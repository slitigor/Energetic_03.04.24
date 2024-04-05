import { useState } from "react";
import { useAddressStore } from "../../../model/useAddressStore";

const AddAddressForm = () => {
  const createAddress = useAddressStore((state) => state.createAddress);
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const handleAddAddress = () => {
    if (zip && city && street) {
      createAddress({
        zip: zip,
        city: city,
        street: street,
      });
    }
  };

  return (
    <form className="bg-white min-w-[360px] p-4 rounded-lg w-full">
      <h2 className="text-[22px] p-2 font-bold uppercase text-center">
        Добавление адреса
      </h2>
      <div className="flex flex-col w-full gap-2">
        <div className="flex items-center">
          <label className="basis-1/4" htmlFor="zip">
            Почтовый индекс:
          </label>
          <input
            className="
              basis-3/4 px-2 py-1 border border-gray-300 ml-2"
            id="zip"
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <label className="basis-1/4" htmlFor="city">
            Населённый пункт:
          </label>
          <input
            className="
              basis-3/4 px-2 py-1 border border-gray-300 ml-2"
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <label className="basis-1/4" htmlFor="street">
            Улица, дом:
          </label>
          <input
            className="
              basis-3/4 px-2 py-1 border border-gray-300 ml-2"
            id="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="p-2 bg-green-500 text-white"
            onClick={handleAddAddress}
          >
            Добавить
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddAddressForm;
