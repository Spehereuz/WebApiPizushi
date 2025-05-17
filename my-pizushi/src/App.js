import './App.css';
import CategoriesPage from "./Pages/Categories";
import {Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout";
import NoMatch from "./Pages/NoMatch";

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<CategoriesPage />} />

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