import axios from "axios";
import { useRef,useState } from "react";
import { Routes, useNavigate, Route } from "react-router-dom";
import HomePage from "./HomePage";


const Login = () => {
    const [msg,setMsg] = useState("");

    const email=useRef(null);
    const pass=useRef(null);

    let navigate=useNavigate();

    const submit=()=>{

      if(email.current.value == "" || pass.current.value == "" ){
          setMsg("Enter Valid Details");
      }
      else{
          axios.post("http://localhost:8000/login",{
              "email":email.current.value,
              "password":pass.current.value}).then(
              (posRes)=>{
              const {data}=posRes;
              if(data=="Login Success"){
                  navigate("/homepage");
              }
              else{
                  setMsg(data);
              }
              },(errRes)=>{
                  console.log(errRes);
              }   
          )
      }
  }

  return (
    <>

      <div className="w-[1275px] h-[600px] bg-[url('./assets/Images/loginbackground.png')]  bg-no-repeat bg-cover " >
        <div className="flex justify-center" >
          <div className="w-[362px] h-[447px] bg-[url('./assets/Images/bg.png')]  bg-no-repeat bg-cover mt-20 rounded-[20px] shadow-sm drop-shadow-sm" >
            <div className="w-[363px] h-[50px] bg-[#FFFFFF] shadow-sm drop-shadow-sm mt-16 rounded-[2px] " >
              <h1 className="flex justify-center text-[24px] text-[#072448] pt-2 font-semibold " >LOGIN</h1>
            </div>
            <div className=" flex flex-col gap-2 m-10 pt-8 " >
              <input type="email" ref={email} name="Email" id="email" placeholder='Email' required className="w-[280px] h-[35px] bg-[#F3EEFF] rounded-[5px] pl-3 " />
              <input type="password" ref={pass} name="Password" id="pwd" placeholder='Password' required className="w-[280px] h-[35px] bg-[#F3EEFF] rounded-[5px] pl-3 " />
            </div>
            <button onClick={submit} className="w-[149px] h-[27px] bg-[#FFCB00] rounded-[20px] text-white text-[14px] ml-[100px] font-semibold " >SUBMIT</button>
            <h4 className="ml-[105px] mt-5 font-bold">{msg}</h4>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
