import Routing from "../pages/routing";
import { NavLink, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
        <div className="mx-16 mt-8 flex gap-x-8">
          <NavLink
            to={"/department"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-500")}>
            <h2 className="text-lg underline font-bold">Сотрудники</h2>
          </NavLink>
          <NavLink
            to={"/location"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "text-gray-500")}>
            <h2 className="text-lg underline font-bold">Место жительства</h2>
          </NavLink>
        </div>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
