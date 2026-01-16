import Home from "./pages/Home";

import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import NotFoundState from "./components/layout/NotFoundState";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyecto/:slug" element={<ProjectDetail />} />
          <Route
            path="*"
            element={<NotFoundState label="Página no encontrada" />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnFocusLoss={false}
        draggable
        toastClassName={() =>
          "p-4 w-80 text-start rounded-md bg-black/50 backdrop-blur-md"
        }
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
