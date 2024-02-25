import {Route,Routes} from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Signin from "./Signin";
import HomePage from "./HomePage";
import BusSelection from "./BusSelection";
import Form from "./Form";

const Parent=()=>{
    return(
        <>
            <Routes>
                <Route path="" element={<LandingPage></LandingPage>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="signin" element={<Signin></Signin>}></Route>
                <Route path="homepage" element={<HomePage></HomePage>}></Route>
                <Route path="busselection" element={<BusSelection></BusSelection>}></Route>
                <Route path="form" element={<Form></Form>}></Route>
            </Routes>
        </>
    )
}
export default Parent;