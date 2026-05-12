import type React from "react";

type AreaTextProps = {
  title: React.ReactNode;
  description: string;
};

function AreaText({ title, description }: AreaTextProps) {
  return (
    <div className="flex flex-col items-start justify-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="94"
        height="5"
        viewBox="0 0 94 5"
        fill="none"
      >
        <line
          x1="2.5"
          y1="2.5"
          x2="90.9341"
          y2="2.5"
          stroke="#A28A59"
          stroke-width="5"
          stroke-linecap="round"
        />
      </svg>
      <h3 className="text-[2.3rem] font-bold mt-3 leading-snug">{title}</h3>
      <p className="text-[1.8rem] text-gray-300">{description}</p>
    </div>
  );
}

export default AreaText;
