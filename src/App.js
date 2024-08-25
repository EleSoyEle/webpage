import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Table from "./pages/Table"
import Img2pdf from './pages/img2pdf';
import InfoPage from './pages/infopage';

function App() {
  return (
          <>
            <Routes>
                <Route
                  exact
                  path="/"
                  element={<Table />}
                />
                <Route 
                path="/convert2pdf"
                element={<Img2pdf/>}
                />
                <Route
                path="/info"
                element={<InfoPage/>}
                />
            </Routes>
          </>
  );
}

export default App;
