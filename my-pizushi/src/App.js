import './App.css';
import CategoriesPage from "./Pages/Categories";
import {Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout";
import NoMatch from "./Pages/NoMatch";
import HomePage from "./Pages/Home";
import CategoriesCreatePage from "./Pages/Categories/Create";

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />

                    <Route path={"Categories"}>
                        <Route index element={<CategoriesPage />}></Route>
                        <Route path={"Create"} element={<CategoriesCreatePage />}></Route>
                    </Route>
                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;