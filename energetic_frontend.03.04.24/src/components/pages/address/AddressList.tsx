import { useEffect } from "react";
import { useAddressStore } from "../../../model/useAddressStore";
import AddressItem from "./AddressItem";

const AddressList = () => {
  const [addressList, getAll, deleteAddress] = useAddressStore((state) => [
    state.addressList,
    state.getAll,
    state.deleteAddress,
  ]);

  useEffect(() => {
    getAll();
  }, [getAll]);

  const handleDel = (zip: string) => {
    deleteAddress(zip);
  };

  return (
    <>
      {" "}
      {addressList.map((address) => (
        <AddressItem key={address.zip} address={address} delAddr={handleDel} />
      ))}
    </>
  );
};

export default AddressList;
