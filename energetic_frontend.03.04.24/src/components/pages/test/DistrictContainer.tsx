import { FC } from "react";
import { DistrictColumn, Id } from "../../../model/types";
import TrashIcon from "../../../icons/TrashIcon";

interface Props {
  district: DistrictColumn;
  deleteDistrict: (id: Id) => void;
}

const DistrictContainer: FC<Props> = (props) => {
  const { district, deleteDistrict } = props;

  return (
    <div
      className="
		bg-colBgColor 
		w-[350px] h-[500px]
		max-h-[500px] rounded-lg
		flex flex-col
		ring-blue-400 hover:ring-2
		"
    >
      {/* District title */}
      <div
        className="
	  	bg-mainBgColor
		text-[20px]
		h-[60px] cursor-grab
		rounded-lg rounded-b-none
		p-3 font-bold
		border-colBgColor border-4
		flex items-center justify-between
		"
      >
        <div className="flex gap-2">
          <div
            className="
		flex justify-center items-center
		bg-colBgColor px-2 py-1 rounded-full"
          >
            0
          </div>
          {district.districTitle}
        </div>
        <button
          onClick={() => deleteDistrict(district.id)}
          className="text-gray-500 hover:text-white hover:bg-columnBackgroundColor
		rounded px-2 py-1"
        >
          <TrashIcon />
        </button>
      </div>
      {/* District description */}
      <div>Description</div>
      {/* Dsitrict substation list */}
      <div
        className="
	  	flex flex-grow
	  "
      >
        Content
      </div>
      {/* District footer */}
      <div>Footer</div>
    </div>
  );
};

export default DistrictContainer;
