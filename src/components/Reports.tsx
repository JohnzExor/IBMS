import { ReportDetails } from "@/lib/types";

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
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFirebaseServices } from "@/store/useFirebase";
import VerticalProgressBar from "./VerticalProgressBar";

type Props = {
  data: ReportDetails;
};

const Reports = ({ data }: Props) => {
  const { cancelReport } = useFirebaseServices();

  const steps = ["Request", "Reviewing", "Accepted", "Completed"];
  return (
    <div className="w-full">
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {data.createdDateAt} {data.createdTimeAt}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col items-center gap-4">
            {data.status == 0 && "You have sent the request"}
            {data.status == 1 && "We are now reviewing your request"}
            {data.status == 2 && "Your request is accepted"}
            {data.status == 3 && "Report complete"}
            {data.status == 5 && "Your request was denied"}

            <VerticalProgressBar steps={steps} status={Number(data.status)} />
            <Dialog>
              <DialogTrigger className="text-white flex items-center gap-1 bg-nextColor dark:bg-slate-900 w-fit py-2 px-4 rounded-2xl">
                Cancel
              </DialogTrigger>
              <DialogContent className=" w-80">
                <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription>
                    You are about to cancel this report
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
                      onClick={() => cancelReport(data.documentID as string)}
                      className="text-white gap-1 bg-nextColor dark:bg-opacity-50 w-full py-2 px-4 rounded-2xl"
                    >
                      Confirm
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Reports;
