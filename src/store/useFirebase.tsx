import { auth, db } from "@/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { create } from "zustand";
import { Firebase, ReportDetails } from "@/lib/types";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { toast } from "@/components/ui/use-toast";

export const useFirebaseServices = create<Firebase>((set) => ({
  reportProgress: [],
  userLogIn: async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  },

  userSignUp: async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          const uid = userCredentials.user.uid;
          setDoc(doc(db, "users", uid), {
            uid: uid,
            email: email,
            password: password,
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  },
  userLogout: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
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
      });
    } catch (error) {
      console.error(error);
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
    } catch (error) {
      console.error(error);
    }
  },
  cancelReport: async (documentID) => {
    const { getUserReportProgress } = useFirebaseServices.getState();
    try {
      await deleteDoc(doc(db, "reports", documentID)).then(() => {
        toast({ description: "Deleted Sucessfully" });
        getUserReportProgress();
      });
    } catch (error) {
      console.error(error);
    }
  },
}));
