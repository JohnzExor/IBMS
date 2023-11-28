import { auth, db } from "@/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { create } from "zustand";
import { Firebase, ReportDetails, UsersDetails } from "@/lib/types";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "@/components/ui/use-toast";

export const useFirebaseServices = create<Firebase>((set) => ({
  usersData: [],
  reportProgress: [],
  adminDashboardData: [],

  userLogIn: async (email, password) => {
    const snapshot = await getDocs(collection(db, "users"));
    const fetchedData: UsersDetails[] = [];

    const userLogin = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        toast({ description: `${error.message}` });
      }
    };

    const updateDocData = async (uid: string) => {
      await updateDoc(doc(db, "users", uid), {
        isRegistered: 1,
      });
    };

    let emailFound = false;

    snapshot.forEach((doc) => {
      const postData = doc.data() as UsersDetails;
      if (postData.email == email) {
        fetchedData.push(postData);
        emailFound = true;
        if (postData.isRegistered == 0) {
          createUserWithEmailAndPassword(auth, email, "123456").then(
            async () => {
              if (postData.uid) updateDocData(postData.uid);
            }
          );
        } else {
          userLogin();
        }
      }
    });
    if (!emailFound) {
      toast({ description: "Email not found" });
    }
  },

  userLogout: async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      toast({ description: `${error.message}` });
    }
  },

  submitReport: async (data) => {
    console.log(data);
    const currentDate = new Date();
    try {
      const documentID = Date.now().toString();
      setDoc(doc(db, "reports", documentID), {
        uid: auth.currentUser?.uid,
        nameToReport: data.nameToReport,
        violation: data.violation,
        placeOfTheEvent: data.placeOfTheEvent,
        dateAndTime: data.dateAndTime,
        details: data.details,
        createdDateAt: currentDate.toLocaleDateString(),
        createTimeAt: currentDate.toLocaleTimeString(),
        status: 0,
        documentID: documentID,
        fileStatus: 0,
      }).then(() => toast({ description: "Reported" }));
    } catch (error: any) {
      toast({ description: `${error.message}` });
    }
  },

  getUserReportProgress: async () => {
    try {
      const snapshot = await getDocs(collection(db, "reports"));
      const fetchedData: ReportDetails[] = [];

      snapshot.forEach((doc) => {
        const postData = doc.data() as ReportDetails;
        if (postData.uid === auth.currentUser?.uid) {
          fetchedData.push(postData);
        }
      });

      set({ reportProgress: fetchedData.reverse() });
    } catch (error: any) {
      toast({ description: `${error.message}` });
    }
  },
  getUsersReport: async () => {
    try {
      const snapshot = await getDocs(collection(db, "reports"));
      const fetchedAdminDashboardData: ReportDetails[] = [];
      const status = ["Request", "Reviewing", "Accepted", "Completed"];

      snapshot.forEach((doc) => {
        const postData = doc.data() as ReportDetails;
        fetchedAdminDashboardData.push({
          uid: postData.uid,
          nameToReport: postData.nameToReport,
          violation: postData.violation,
          placeOfTheEvent: postData.placeOfTheEvent,
          dateAndTime: postData.dateAndTime,
          details: postData.details,
          createdDateAt: postData.createdDateAt,
          createdTimeAt: postData.createdTimeAt,
          status: status[Number(postData.status)],
          documentID: postData.documentID,
          fileStatus: postData.fileStatus,
        });
      });
      set({ adminDashboardData: fetchedAdminDashboardData.reverse() });
    } catch (error: any) {
      toast({ description: `${error.message}` });
    }
  },
  cancelReport: async (documentID) => {
    const { getUserReportProgress } = useFirebaseServices.getState();
    try {
      await deleteDoc(doc(db, "reports", documentID)).then(() => {
        toast({ description: "Report cancellation was successful." });
        getUserReportProgress();
      });
    } catch (error: any) {
      toast({ description: `${error.message}` });
    }
  },
  addNewUser: async (email) => {
    const uid = Date.now().toString();
    await setDoc(doc(db, "users", uid), {
      email: email,
      password: "123456",
      isRegistered: 0,
      uid: uid,
    }).then(() =>
      toast({ title: "Success", description: "The email has been added" })
    );
  },
  getUsersData: async () => {
    const snapshot = await getDocs(collection(db, "users"));
    const fetchedData: UsersDetails[] = [];

    snapshot.forEach((doc) => {
      const postdata = doc.data() as UsersDetails;
      fetchedData.push(postdata);
    });

    set({ usersData: fetchedData.reverse() });
  },
}));
