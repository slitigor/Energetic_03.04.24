import { useEffect, useState } from "react";
import { useDistrictStore } from "../../../model/useDistrictStore";
import { IAddress } from "../../../model/types";
import { useAddressStore } from "../../../model/useAddressStore";

const AddDistrictForm = () => {
  const [createDistrict] = useDistrictStore((state) => [state.createDistrict]);
  const [addressList, getAll] = useAddressStore((state) => [
    state.addressList,
    state.getAll,
  ]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState<IAddress>();

  useEffect(() => {
    getAll();
  }, [getAll]);

  const handleAddDistrict = () => {
    if (name) {
      createDistrict({
        name: name,
        description: description,
        address: address,
      });
    }
  };

  const handleSelectAddress = (zip: string) => {
    setAddress(addressList.find((address) => address.zip === zip));
  };
  return (
    <form className="min-w-[360px] w-full container">
      <h2 className="text-[22px] p-2 font-bold uppercase text-center">
        Добавление РЭС
      </h2>
      <div className="flex flex-col w-full gap-2">
        <div className="flex items-center">
          <label className="basis-1/4" htmlFor="zip">
            Название:
          </label>
          <input
            className="
              basis-3/4 px-2 py-1 card-input ml-2"
            id="zip"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <label className="basis-1/4" htmlFor="city">
            Описание:
          </label>
          <input
            className="
              basis-3/4 px-2 py-1 card-input ml-2"
            id="city"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <label className="basis-1/4" htmlFor="street">
            Адрес:
          </label>
          <select
            className="
              basis-3/4 px-2 py-1 card-input ml-2"
            value={address?.zip}
            onChange={(e) => handleSelectAddress(e.target.value)}
          >
            <option value="">Выбери адрес</option>
            {addressList.map((address) => (
              <option key={address.zip} value={address.zip}>
                {address.city}, {address.street}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-end">
          <button
            className="p-2 bg-dark-btnOkColor text-white"
            onClick={handleAddDistrict}
          >
            Добавить
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddDistrictForm;
