import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";

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

const ReportPage = () => {
  const { submitReport } = useFirebaseServices();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    <div className="flex flex-col items-center gap-4 w-80 pt-10">
      <h1 className="font-semibold text-xl">Report</h1>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 w-full flex flex-col items-center justify-center"
          >
            <FormField
              control={form.control}
              name="nameToReport"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Name of the Person"
                      {...field}
                      className=" bg-gray-100 w-72 py-6 rounded-xl dark:bg-opacity-50"
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
              name="violation"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isConfirmed}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-gray-100 px-4 py-3 rounded-xl text-md font-medium dark:bg-opacity-50 w-72">
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
                      className=" bg-gray-100 w-72 py-6 rounded-xl dark:bg-opacity-50"
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
                      className=" bg-gray-100 w-72 py-6 rounded-xl dark:bg-opacity-50"
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
                      className=" bg-skipColor w-72 py-6 rounded-xl dark:bg-opacity-50 h-52"
                      required
                      disabled={isConfirmed}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isConfirmed ? (
              <button
                className="text-white flex items-center gap-1 bg-nextColor dark:bg-opacity-50 w-fit py-2 px-4 rounded-2xl"
                type="submit"
              >
                {isLoading ? "Submitting.." : "Submit Report"}
              </button>
            ) : (
              <div className=" flex gap-4 text-white">
                <Link to={"/"}>
                  <button className=" font-semibold  bg-skipColor rounded-xl h-12 w-32 shadow-xl dark:bg-opacity-50">
                    Return
                  </button>
                </Link>
                <Dialog>
                  <DialogTrigger className="text-white flex items-center gap-1 bg-nextColor dark:bg-opacity-50 w-fit py-2 px-4 rounded-2xl">
                    Next
                  </DialogTrigger>
                  <DialogContent className=" w-80">
                    <DialogHeader>
                      <DialogTitle className="font-bold">
                        Confirm Report
                      </DialogTitle>
                      <DialogDescription className=" w-72 break-words flex flex-col items-center">
                        <span>
                          <span className="font-bold">Name: </span>
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
                          <span className="font-bold">Happened in: </span>
                          {form.getValues().placeOfTheEvent}
                        </span>
                        <span className="font-bold">Details:</span>
                        {form.getValues().details}
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className=" flex flex-row gap-2">
                      <DialogClose asChild>
                        <Button
                          type="button"
                          className="text-white dark:bg-slate-900 gap-1 w-fit py-2 px-4 rounded-2xl"
                        >
                          Cancel
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button
                          type="submit"
                          className="text-white gap-1 bg-nextColor dark:bg-opacity-50 w-full py-2 px-4 rounded-2xl text-center"
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
  );
};

export default ReportPage;
