import { Outlet } from "react-router-dom";
import RadioPlayer from "../components/player/RadioPlayer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="min-h-screen text-white flex flex-col">
      <div className="max-w-285 mx-auto w-full px-4">
        <Header />
        <main className="flex-1 pt-6 pb-28">
          <Outlet />
        </main>
      </div>
      <RadioPlayer />
    </div>
  );
};

export default MainLayout;
