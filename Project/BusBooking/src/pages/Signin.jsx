import axios from "axios";
import { useRef,useState } from "react";
import { Routes, useNavigate, Route } from "react-router-dom";
import Login from "./Login";

const Signin = () => {

    const [msg,setMsg] = useState("");

    const name=useRef(null);
    const email=useRef(null);
    const pass=useRef(null);
    const con_pass=useRef(null);

    let navigate=useNavigate();


    const submit=()=>{

        if(name.current.value == "" || email.current.value == "" || pass.current.value == "" || con_pass.current.value == ""){
            setMsg("Enter Valid Details");
        }
        else{
            axios.post("http://localhost:8000/signup",{
                "username":name.current.value,
                "email":email.current.value,
                "password":pass.current.value,
                "conf_password":con_pass.current.value}).then(
                (posRes)=>{
                const {data}=posRes;
                if(data=="Signup Success"){
                    navigate("/login");
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
        <div className="w-[1275px] h-[600px] bg-[url('./assets/Images/loginbackground.png')]  bg-no-repeat bg-cover " >
            <div className="flex justify-center" >
                <div className="w-[362px] h-[447px] bg-[url('./assets/Images/bg.png')]  bg-no-repeat bg-cover mt-20 rounded-[20px] shadow-sm drop-shadow-sm" >
                    <div className="w-[363px] h-[50px] bg-[#FFFFFF] shadow-sm drop-shadow-lg mt-10 rounded-[2px] " >
                        <h1 className="flex justify-center text-[22px] text-[#072448] pt-2 font-semibold " >SIGN IN</h1>
                    </div>
                    <div className=" flex flex-col gap-3 m-10 pt-2 " >
                        <input type="text" ref={name} name="Name" id="Name" placeholder='Name' required className="w-[280px] h-[35px] bg-[#F3EEFF] rounded-[5px] pl-3 font-light  " />
                        <input type="email" ref={email} name="Email" id="email" placeholder='Email' required className="w-[280px] h-[35px] bg-[#F3EEFF] rounded-[5px] pl-3 font-light" />
                        <input type="password" ref={pass} name="Password" id="pwd" placeholder='Password' required className="w-[280px] h-[35px] bg-[#F3EEFF] rounded-[5px] pl-3 font-light " />
                        <input type="password" ref={con_pass} name="Password" id="conformpwd" placeholder='Confirm Password' required className="w-[280px] h-[35px] bg-[#F3EEFF]  rounded-[5px] pl-3 font-light  " />
                    </div>
                    <button onClick={submit} className="w-[149px] h-[27px] bg-[#FFCB00] rounded-[20px] text-white text-[14px] ml-[100px] font-semibold     " >SIGN IN</button>
                    <h4 className="ml-[110px] mt-3 font-bold">{msg}</h4>

                </div>
            </div>
        </div>

    )
}
export default Signin;
