import { useEffect } from "react";
import { useDistrictStore } from "../../../model/useDistrictStore";

const DistrictList = () => {
  const [districtList, getAll, deleteDistrict] = useDistrictStore((state) => [
    state.districtList,
    state.getAll,
    state.deleteDistrict,
  ]);

  useEffect(() => {
    getAll();
  }, [getAll]);
  const handleDel = (name: string) => {
    deleteDistrict(name);
  };
  return (
    <div>
      {districtList.map((district) => (
        <div
          className="
	flex h-12 items-center border border-cyan-200"
          key={district.name}
        >
          <div className="basis-2/12 px-2">{district.name}</div>
          <div className="basis-6/12 px-2">{district.description}</div>
          <div className="basis-2/12 px-2">{district.address?.zip}</div>
          <div className="basis-2/12 flex justify-end pr-4">
            <button
              onClick={() => handleDel(district.name)}
              className="p-2 bg-red-500 text-white"
            >
              Del
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DistrictList;
