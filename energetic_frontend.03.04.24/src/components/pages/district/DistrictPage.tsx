import DistrictHeader from "./DistrictHeader";
import DistrictList from "./DistrictList";

const DistrictPage = () => {
  return (
    <div className="w-full p-3 flex flex-col gap-2 bg-white rounded-md">
      <h3 className="text=[20px] uppercase tracking-widest text-center">
        Список адресов
      </h3>
      <DistrictHeader />
      <DistrictList />
    </div>
  );
};

export default DistrictPage;
