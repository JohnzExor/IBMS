import { z } from "zod";

export type ReportDetails = {
  uid?: String;
  nameToReport: String;
  violation: String;
  placeOfTheEvent: String;
  dateAndTime: String;
  details: String;
  createdDateAt?: string;
  createdTimeAt?: string;
  status?: number | string;
  documentID?: string;
  fileStatus?: string;
};

export type UsersDetails = {
  email: string;
  password: string;
  uid?: string;
  isRegistered: number;
  status: number;
};

export type Firebase = {
  usersData: UsersDetails[];
  reportProgress: ReportDetails[];
  adminDashboardData: ReportDetails[];
  userLogIn: (email: string, password: string) => void;
  userLogout: () => void;
  submitReport: (data: ReportDetails) => void;
  getUserReportProgress: () => void;
  getUsersReport: () => void;
  cancelReport: (documentID: string) => void;
  addNewUser: (email: string) => Promise<void>;
  getUsersData: () => void;
};

export const authSchema = z.object({
  email: z.string().min(6, { message: "Email must be atleast 6 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters." }),
  confirmPassword: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters." })
    .optional(),
});

export const reportSchema = z.object({
  nameToReport: z.string().min(1, { message: "Must be atleast 1 character." }),
  violation: z.string().min(1, { message: "Required" }),
  placeOfTheEvent: z
    .string()
    .min(1, { message: "Must be atleast 1 character." }),
  dateAndTime: z.string().min(1, { message: "Must be atleast 1 character." }),
  details: z.string().min(1, { message: "Must be atleast 1 character." }),
});
