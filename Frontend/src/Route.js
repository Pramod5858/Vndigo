import { BrowserRouter, Routes, Route } from "react-router-dom";

import Parent from "./Component/parent";
import Carousal from "./Component/CarouselComponent";
import Home from "./Component/Home";
import Userlogin from "./Component/Userlogin";
import Adminlogin from "./Component/Adminlogin";
import Login from "./Component/Login";
import Signupnow from "./Component/Signupnow";
import Feedbackform from "./Component/Feedbackform";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/parent" element={<Parent />} />
                <Route path="/carousal" element={<Carousal />} />
                <Route path="/userlogin" element={<Userlogin />} />
                <Route path="/adminlogin" element={<Adminlogin />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signupnow" element={<Signupnow/>}/>
                <Route path="/feedbackform" element={<Feedbackform />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;