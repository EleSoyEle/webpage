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
                path="/cimg"
                element={<Img2pdf/>}
                />
            </Routes>
          </>
  );
}

export default App;
