import { FC } from "react";
import { IAddress } from "../../../model/types";

interface Props {
  address: IAddress;
  delAddr: (zip: string) => void;
}

const AddressItem: FC<Props> = (props) => {
  const { address, delAddr } = props;

  return (
    <div
      className="
	flex h-12 items-center border border-cyan-200"
      key={address.zip}
    >
      <div className="basis-1/4 px-2">{address.zip}</div>
      <div className="basis-1/4 px-2">{address.city}</div>
      <div className="basis-1/4 px-2">{address.street}</div>
      <div className="basis-1/4 flex justify-end pr-4">
        <button
          className="p-2 bg-red-500 text-white"
          onClick={() => delAddr(address.zip)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default AddressItem;
