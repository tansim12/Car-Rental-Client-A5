import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";

const App = () => {
  return (
    <div>
      
        <div className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg">
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default App;
