import Layout from './components/Layout';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Patrons from "./pages/patrons/Patrons";
import Books from "./pages/books/Books";
import Login from "./pages/Login";
import FetchData from "./pages/FetchData";

const App = () => (
    <Layout>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/books" element={<Books/>} />
            <Route path="/patrons" element={<Patrons/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/fetch-data" element={<FetchData/>} />
        </Routes>
    </Layout>
);

export default App;
