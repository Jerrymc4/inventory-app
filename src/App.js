import Sidebar from "../src/scences/global/Sidebar";
import "./App.css";
import SavedItemsSidebar from "./scences/global/SavedItemsSidebar";

import NewItemsPage from "./scences/NewItemsPage";
import { CategoryProvider } from "./components/context/CategoryContext";
import { ItemContextProvider } from "./components/context/ItemContext";
import { Scrollbars } from "react-custom-scrollbars-2";

function App() {
  return (
    <div className="app">
      <CategoryProvider>
        <ItemContextProvider>
          <Sidebar />
          <SavedItemsSidebar />
          <NewItemsPage />
        </ItemContextProvider>{" "}
      </CategoryProvider>{" "}
    </div>
  );
}

export default App;
