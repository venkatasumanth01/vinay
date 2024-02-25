import { PiArrowsLeftRightDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useRef,useState } from "react";
import './HomePage.css';
import BusSelection from "./BusSelection";

const HomePage = () => {

    let navigate=useNavigate();

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [error,setError] = useState('');

    const busselection=()=>{
        if(origin.length<2 || destination.length<2 || origin==destination){
            setError("Enter Valid Details");
        }
        else{
            navigate(`/busselection?origin=${origin}&destination=${destination}`);
        }
    }

    const exchange=()=>{
        const temp = origin;
        setOrigin(destination);
        setDestination(origin);
    }


    return (
        <>
            <header className="flex " >
                <div className="w-[50px] h-[40px] bg-[url('./assets/Images/iconbus.png')]  bg-no-repeat bg-cover ml-2 " ></div>
                <nav className="flex gap-14 ml-[70%] mt-3 text-[13px] " >
                    <a href="">Home</a>
                    <a href="">Tickets</a>
                    <a href="">Profile</a>
                </nav>
            </header>
            <div className="w-[1278px] h-[54px] bg-[#364E6B] rounded-b-[69px] mt-2" >
                <div className="flex " >
                    <div className="w-[427px] h-[344px] bg-[#54D2D2] rounded-tl-[50px] rounded-br-[50px] rounded-tr-[28px] rounded-bl-[28px] mt-4  ml-16" >
                        <div className="flex  flex-col gap  ml-14 mt-10   " >
                            <input value={origin} onChange={(e) => setOrigin(e.target.value)} type="text" name="Boarding" id="boarding" placeholder="Boading From" className=" w-[310px] h-[50px] bg-[#F3EEFF] text-[16px] text-[#B5A0E8] font-light  rounded-[10px] pl-3  " />
                            <div onClick={exchange} className="w-[40px] h-[40px] bg-[#072448] rounded-[40px] ml-60 icon-card  " ><PiArrowsLeftRightDuotone className="text-[#FFFFFF] w-[25px] h-[25px] rotate-90 m-2  " /></div>
                            <input value={destination} onChange={(e) => setDestination(e.target.value)} type="text" name="Boarding" id="boarding" placeholder="Drop At" className=" w-[310px] h-[50px] bg-[#F3EEFF] text-[16px] text-[#B5A0E8] font-light rounded-[10px] pl-3 drop-card drop-card " />
{/* //button */}            <button onClick={busselection} className="w-[310px] h-[40px] bg-[#364E6B] rounded-[20px] text-[#FFFFFF] font-semibold text-center text-[20px] mt-16 " >Find Buses</button>
                            <h1 className="font-semibold text-[20px] mt-5 ml-[75px]">{error}</h1>
                        </div>

                    </div>
                    <div className="w-[644px] h-[429px] bg-[url('./assets/Images/busstation.jpg')]  bg-no-repeat bg-cover mt-20 ml-24 mb-40  " ></div>
                </div>
                <div className="w-[1081px] h-[400px] bg-[url('./assets/Images/street.png')]  bg-no-repeat bg-cover rounded-[40px] ml-[8%] box-shadow-sm border-[#000000]  " >
                    <h3 className="text-[26px] text-[#000000] font-semibold  enjoy " >ENJOY THE APP</h3>
                </div>
                <div className="w-[309px] h-[179px] bg-[url('./assets/Images/bg.png')]  bg-no-repeat bg-cover rounded-[30px]  border-[black]  border-3  rating-card " >
                    <div>
                        <h4>Quick access</h4>
                        <h4>Superior live tracking</h4>
                    </div>
                    <div>
                        <h4>4.5</h4>
                        <h4>Android</h4>
                    </div>
                </div>

            </div>

            <footer>
                <div>

                </div>
            </footer>
        </>
    )
}
export default HomePage;