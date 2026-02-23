import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Musica from "../pages/Musica";
import Videos from "../pages/Videos";
import Concursos from "../pages/Concursos";
import Tickets from "../pages/Tickets";
import Espectaculos from "../pages/Espectaculos";
import EnVivo from "../pages/EnVivo";
import NoticiaDetail from "../pages/noticias/NoticiaDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/espectaculos",
        element: <Espectaculos />,
      },
      {
        path: "/musica",
        element: <Musica />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/concursos",
        element: <Concursos />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "en-vivo",
        element: <EnVivo />,
      },
      { path: "noticia/:slug", element: <NoticiaDetail /> },
    ],
  },
]);
