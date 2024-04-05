import AddressHeader from "./AddressHeader";
import AddressList from "./AddressList";

const AddressPage = () => {
  return (
    <div className="w-full p-3 flex flex-col gap-2 bg-white rounded-md">
      <h3 className="text=[20px] uppercase tracking-widest text-center">
        Список адресов
      </h3>
      <AddressHeader />
      <AddressList />
    </div>
  );
};

export default AddressPage;
