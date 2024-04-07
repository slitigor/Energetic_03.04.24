import { useState } from "react";
// import { useDistrictStore } from "../../../model/useDistrictStore";
import PlusIcon from "../../../icons/PlusIcon";
import { DistrictColumn, Id } from "../../../model/types";
import DistrictContainer from "./DistrictContainer";

const MainBoard = () => {
  //   const [districtList, getAll, createDistrict] = useDistrictStore((state) => [
  //     state.districtList,
  //     state.getAll,
  //     state.createDistrict,
  //   ]);
  const [districts, setDistricts] = useState<DistrictColumn[]>([]);

  // Добавление нового РЭС
  const createNewDistrict = () => {
    const districtToAdd: DistrictColumn = {
      id: generateId(),
      districTitle: `District ${districts.length + 1}`,
    };
    setDistricts([...districts, districtToAdd]);
  };

  //   useEffect(() => {
  //     getAll();
  //   }, [getAll]);

  const deleteDistrict = (id: Id) => {
    const filteredDistricts = districts.filter(
      (district) => district.id !== id
    );
    setDistricts(filteredDistricts);
  };

  return (
    <div
      className="
		m-auto flex min-h-screen w-full
		items-center overflow-x-auto
		overflow-y-hidden p-[40px]
	"
    >
      <div className="m-auto flex gap-4">
        {/* Контейнеры РЭСов */}
        <div className="flex gap-4">
          {districts.map((dist) => (
            <DistrictContainer
              key={dist.id}
              district={dist}
              deleteDistrict={deleteDistrict}
            />
          ))}
        </div>
        <button
          onClick={() => createNewDistrict()}
          className="
		h-[60px] w-[350px] min-w-[350px]
		cursor-pointer rounded-lg bg-mainBgColor
		border-2 border-colBgColor
		p-4 ring-blue-400 hover:ring-2
		flex gap-2
	"
        >
          <PlusIcon />
          Добавить
        </button>
      </div>
    </div>
  );
};

const generateId = () => {
  // Генерируем случайное число от 0 до 10000
  return Math.floor(Math.random() * 10001);
};

export default MainBoard;
