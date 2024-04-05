import "./App.css";
import DistrictCard from "./components/pages/test/DistrictCard";

function App() {
  return (
    <main className="flex items-center justify-center">
      <div
        className="
    h-full p-4 
    grid grid-cols-3 
    gap-6 justify-between"
      >
        <DistrictCard />
        <DistrictCard />
      </div>
    </main>
  );
}
export default App;
