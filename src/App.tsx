import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";

const App = () => {
  return (
    <div className="bg-pageBg">
      <div className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg">
        <Navbar />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
