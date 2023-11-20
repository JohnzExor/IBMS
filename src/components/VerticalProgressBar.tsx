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
          <p
            className={
              status === index
                ? "text-primary font-bold text-lg"
                : "text-gray-300"
            }
          >
            {status >= index ? (
              status === 5 && index >= 2 ? (
                <span className="flex items-center gap-1 text-red-400 font-bold text-lg">
                  <CiCircleRemove size={30} />
                  <span>Denied</span>
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <CiCircleCheck size={30} />
                  {data}
                </span>
              )
            ) : (
              <span className="flex items-center gap-1">
                <CiCircleMinus size={30} />
                {data}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VerticalProgressBar;
