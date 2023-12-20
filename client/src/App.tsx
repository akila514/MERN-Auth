import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="max-w-[2000px] flex mx-auto flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
