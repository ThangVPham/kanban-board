import "./App.css";
import { useState } from "react";
import MainBoard from "./components/MainBoard";
import SideUtility from "./components/SideUtility";
import SideMain from "./components/SideMain";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  const [revealMenu, setRevealMenu] = useState(true);
  const showMenu = () => {
    setRevealMenu(!revealMenu);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App bg-slate-800 text-white ">
        <div className="flex w-full ">
          <div className="w-14 flex h-screen sticky top-0">
            <div className="w-14  bg-slate-600">
              <SideUtility showMenu={showMenu}></SideUtility>
            </div>
            {revealMenu && (
              <div className="w-52 h-screen left-14 bg-slate-700/[0.90] absolute">
                <SideMain></SideMain>
              </div>
            )}
          </div>
          <div className="w-full px-2 md:w-3/4 mx-auto ">
            <MainBoard></MainBoard>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
