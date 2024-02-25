import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signin from "./Signin";

const LandingPage = () => {

  let navigate=useNavigate();

  const signin=()=>{
    navigate("/signin");
  }

  const login=()=>{
    navigate("/login");
  }

  return (
    <>
      <div className="xl:w-[1280px] xl:h-[3411px xl:m-3 " >
        <div className="flex gap-[74%]  " >
          <div className="w-[50px] h-[40px] bg-[url('./assets/Images/iconbus.png')]  bg-no-repeat bg-cover ml-2 " ></div>
          <div className="flex m-2 gap-5 " >
            <button onClick={signin} className="w-[98px] h-[29px] bg-[#FFCB00] text-white font-[10px] text-center rounded-[20px] "  >SignUp</button>
            <button onClick={login} className="w-[98px] h-[29px] bg-[#FFCB00] text-white font-[10px] text-center rounded-[20px] "  >LogIn</button>
          </div>
        </div>
        <div className="w-[1280px] h-[613px] bg-[url('./assets/images/Landingpage.jpg')]  bg-no-repeat bg-cover  " >

        </div>

      </div>

    </>
  )
}
export default LandingPage;