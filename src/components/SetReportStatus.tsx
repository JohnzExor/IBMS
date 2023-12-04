import {
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { useFirebaseServices } from "@/store/useFirebase";

type Props = {
  documentID: string;
  status: string;
};

const SetReportStatus = ({ documentID, status }: Props) => {
  const { updateReportStatus } = useFirebaseServices();

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <span>Set Status</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup value={status.toString()}>
            <DropdownMenuRadioItem
              value="0"
              onClick={() => updateReportStatus(documentID, 0)}
            >
              Request
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="1"
              onClick={() => updateReportStatus(documentID, 1)}
            >
              Reviewing
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="2"
              onClick={() => updateReportStatus(documentID, 2)}
            >
              Accepted
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="3"
              onClick={() => updateReportStatus(documentID, 3)}
            >
              Completed
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="5"
              onClick={() => updateReportStatus(documentID, 5)}
            >
              Denied
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default SetReportStatus;
