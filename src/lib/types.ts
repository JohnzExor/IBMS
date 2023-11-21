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
  status?: Number;
  documentID?: string;
};

export type Firebase = {
  reportProgress: ReportDetails[];
  userLogIn: (email: string, password: string) => void;
  userSignUp: (email: string, password: string) => void;
  userLogout: () => void;
  submitReport: (data: ReportDetails) => void;
  getUserReportProgress: () => void;
  cancelReport: (documentID: string) => void;
};

export const authSchema = z.object({
  email: z.string().min(6, { message: "Email must be 6 characters." }),
  password: z.string().min(6, { message: "Password must be 6 characters." }),
  confirmPassword: z
    .string()
    .min(6, { message: "Password must be 6 characters." })
    .optional(),
});

export const reportSchema = z.object({
  nameToReport: z.string().min(1, { message: "Must be 1 characters." }),
  violation: z.string(),
  placeOfTheEvent: z.string().min(1, { message: "Must be 1 characters." }),
  dateAndTime: z.string().min(1, { message: "Must be 1 characters." }),
  details: z.string().min(1, { message: "Must be 1 characters." }),
});
