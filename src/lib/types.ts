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
  userLogIn: (email: string, password: string) => Promise<void>;
  userSignUp: (email: string, password: string) => Promise<void>;
  userLogout: () => Promise<void>;
  reportProgress: ReportDetails[];
  submitReport: (data: ReportDetails) => Promise<void>;
  getUserReportProgress: () => Promise<void>;
  cancelReport: (documentID: string) => Promise<void>;
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
  nameToReport: z.string().min(6, { message: "Must be 6 characters." }),
  violation: z.string(),
  placeOfTheEvent: z.string().min(6, { message: "Must be 6 characters." }),
  dateAndTime: z.string().min(6, { message: "Must be 6 characters." }),
  details: z.string().min(6, { message: "Must be 6 characters." }),
});
