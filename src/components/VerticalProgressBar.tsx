import { CiCircleCheck, CiCircleMinus, CiCircleRemove } from "react-icons/ci";

type Props = {
  steps: string[];
  status: number;
};

const VerticalProgressBar = ({ steps, status }: Props) => {
  return (
    <div>
      {steps.map((data, index) => (
        <div key={index} className="flex gap-1 mt-2 items-center">
          <p className={status === index ? "text-primary " : "text-gray-300"}>
            {status >= index ? (
              status === 5 && index >= 2 ? (
                <CiCircleRemove size={30} className="text-red-400" />
              ) : (
                <CiCircleCheck size={30} />
              )
            ) : (
              <CiCircleMinus size={30} />
            )}
          </p>
          <p
            className={
              status >= index
                ? status === 5 && index >= 2
                  ? " text-red-400 font-bold text-lg"
                  : "text-gray-300 font-bold text-lg"
                : "text-gray-300 "
            }
          >
            {status >= index
              ? status === 5 && index == 2
                ? "Denied"
                : data
              : data}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VerticalProgressBar;
