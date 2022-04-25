import React from "react";
import { Routes, Route} from "react-router-dom"
import DepartmentPage from "./department-page";

function Routing() {
    return (
            <Routes>
                <Route path="/department" element={<DepartmentPage />} exact />
                {/* <Route path="/location" element={LocationPage} exact /> */}
            </Routes>
    );
}

export default Routing;