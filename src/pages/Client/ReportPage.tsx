import { Button } from "@/components/ui/button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import img from "@/assets/images/reportPage.svg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { reportSchema } from "@/lib/types";
import { useFirebaseServices } from "@/store/useFirebase";
import { toast } from "@/components/ui/use-toast";
import { BiEdit } from "react-icons/bi";
import { cancelBTN, normalBTN, normalBTNLong } from "@/styles/style";
const ReportPage = () => {
  const { submitReport } = useFirebaseServices();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hideName, setHideName] = useState(true);
  const navigate = useNavigate();

  const behaviors = [
    "stealing",
    "bad_attitude",
    "dishonesty",
    "rudeness",
    "laziness",
    "deceit",
    "irresponsibility",
    "selfishness",
    "disrespect",
    "inconsideration",
    "greed",
    "carelessness",
    "dishonor",
    "manipulation",
    "apathy",
    "intolerance",
    "stubbornness",
    "ignorance",
    "arrogance",
    "vengefulness",
  ];

  const form = useForm<z.infer<typeof reportSchema>>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      nameToReport: "",
      violation: "",
      placeOfTheEvent: "",
      dateAndTime: "",
      details: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof reportSchema>) => {
    setIsLoading(true);
    await submitReport(values);
    navigate("/reportsuccess");
    setIsLoading(false);
  };

  const checkAllFields = () => {
    if (
      !form.getValues().nameToReport ||
      !form.getValues().violation ||
      !form.getValues().placeOfTheEvent ||
      !form.getValues().dateAndTime ||
      !form.getValues().details
    ) {
      toast({ description: "Fill out all the required fields" });
    } else {
      setIsConfirmed(true);
    }
  };

  return (
    <div className="flex flex-col md:items-start md:flex-row w-full gap-4">
      <img src={img} className="md:w-1/3  md:hidden" />
      <div className="pb-7">
        <h1 className="font-semibold text-xl">Write a Report</h1>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="flex gap-1 items-center">
                <FormField
                  control={form.control}
                  name="nameToReport"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type={hideName ? "password" : "text"}
                          placeholder="Name of the Person"
                          {...field}
                          required
                          disabled={isConfirmed}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <span
                  onClick={() => setHideName(!hideName)}
                  className="text-4xl cursor-pointer p-2 "
                >
                  {!hideName ? <VscEye /> : <VscEyeClosed />}
                </span>
              </div>

              <FormField
                control={form.control}
                name="violation"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isConfirmed}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Violation" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {behaviors.map((data, index) => (
                          <SelectItem key={index} value={data}>
                            {data}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="placeOfTheEvent"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Place of the event"
                        {...field}
                        required
                        disabled={isConfirmed}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateAndTime"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        {...field}
                        required
                        placeholder="Date and Time"
                        disabled={isConfirmed}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Write something..."
                        {...field}
                        required
                        disabled={isConfirmed}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid w-full max-w-sm items-center gap-1.5 text-sm">
                <h1 className=" pl-2">Evidence/Proof (Image or Video)</h1>
                <Input type="file" disabled={isConfirmed} />
              </div>
              {isConfirmed ? (
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => setIsConfirmed(false)}
                    className={normalBTN}
                    type="submit"
                  >
                    <BiEdit />
                    Edit
                  </button>
                  <button className={normalBTN} type="submit">
                    {isLoading ? "Submitting.." : "Submit Report"}
                  </button>
                </div>
              ) : (
                <div className=" flex justify-center gap-1 text-white">
                  <Link to={"/"}>
                    <button className={cancelBTN}>
                      <MdKeyboardArrowLeft size={30} />
                    </button>
                  </Link>
                  <Dialog>
                    <DialogTrigger className={normalBTNLong}>
                      Next
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="font-bold">
                          Confirm Report
                        </DialogTitle>
                        <DialogDescription className=" break-words flex flex-col text-left">
                          <span>
                            <span className="font-bold">Name: </span>
                            <span>
                              {form.getValues().nameToReport.substring(0, 1)}
                            </span>
                            <input
                              type="password"
                              defaultValue={form.getValues().nameToReport}
                              disabled
                              className=" bg-transparent"
                            />
                            <br />
                            <span className="font-bold">Violation: </span>
                            {form.getValues().violation}
                            <br />
                            <span className="font-bold">
                              Location of the incident:{" "}
                            </span>
                            {form.getValues().placeOfTheEvent}
                            <br />
                            <span className="font-bold">Details: </span>
                            {form.getValues().details}
                            <br />
                            <span className="font-bold">Evidence/Proof: </span>
                            <br />
                            <span className=" italic">
                              No Evidence submitted. Submitting an evidence will
                              greatly help in validating your report.
                            </span>
                          </span>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className=" flex flex-row ">
                        <DialogClose asChild>
                          <Button type="button" className={cancelBTN}>
                            <MdKeyboardArrowLeft size={30} />
                          </Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button
                            type="submit"
                            className={normalBTNLong}
                            onClick={() => checkAllFields()}
                          >
                            Confirm
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
      <img src={img} className="md:w-1/2 hidden md:block" />
    </div>
  );
};

export default ReportPage;
