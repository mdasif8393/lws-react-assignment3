import "./App.css";
import Header from "./components/Header";
import AllTasks from "./components/Tasks/AllTasks";

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Header />
      <AllTasks />
    </div>
  );
}

export default App;
