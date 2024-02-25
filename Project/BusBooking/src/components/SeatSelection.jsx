import Points from "./Points";
import { useState } from "react";

 const SeatSelection = (props) => {

    const seatStyle = {
        backgroundImage: 'url("src/assets/images/SeatsLayout.png")',
        backgroundSize: 'cover', // You can customize other background properties here
        width: '', // Set width as per your requirement
        height: '', // Set height as per your requirement
      };

      const lowersleepStyle = {
        backgroundImage: 'url("src/assets/images/lowerdeck.png")',
        backgroundSize: 'cover', // You can customize other background properties here
        width: '', // Set width as per your requirement
        height: '', // Set height as per your requirement
      };

      const uppersleepStyle = {
        backgroundImage: 'url("src/assets/images/upperdeck.png")',
        backgroundSize: 'cover', // You can customize other background properties here
        width: '', // Set width as per your requirement
        height: '', // Set height as per your requirement
      };

      const [clickedButtons, setClickedButtons] = useState({
        3: false,
        5: false,
        10: false,
      });
    
      const handleButtonClick = (buttonName) => {
        setClickedButtons((prevClickedButtons) => ({
          ...prevClickedButtons,
          [buttonName]: !prevClickedButtons[buttonName],
        }));
      };
    
    const bus_type=props.bus_type;
    const bus_price=props.price;
    
    if(bus_type=="seater"){
        
        return ( 
            
            <div className="w-[1000px] h-[450px] shadow-lg  m-4 " >
                <div className="flex justify-first  gap-20 m-4 ml-20 mt-5" >
                <div className="flex gap-3 " >
                        <div className="w-[33px] h-[26px] rounded-[8px]  "><img src="src\assets\images\seaticon.png" alt="i" /></div>
                        <h3 className="" >Booked</h3>
                    </div>
                    <div className="flex gap-3 " >
                        <div className="w-[33px] h-[26px] rounded-[8px]  "> <img src="src\assets\images\sleepicon.png" alt="i" /></div>
                        <h3 className="" >Booked</h3>
                    </div>
                    <div className="flex gap-3" >
                        <div className="w-[33px] h-[26px] bg-[#DAD9DB] rounded-[8px]" />
                        <h3 className="" >Available</h3>
                    </div>
                    <div className="flex gap-3" >
                        <div className="w-[33px] h-[26px] bg-[#F8AA4B] rounded-[8px]" />
                        <h3 className="" >Your Seat</h3>
                    </div>
                    
    
                </div>
                <div className="flex gap-5 ml-5" >
                    <div className="shadow-lg w-[250.88px] h-[366.63px] bg-auto bg-no-repeat bg-center style rounded-[14px] pt-12" style={seatStyle}>
                        <button onClick={() => handleButtonClick('3')} className="clickedButtons[3] ? 'clicked' : '' ml-[152px] mt-[22px] w-[33px] h-[30px] bg-[#DAD9DB] rounded-[8px]"></button> <br />
                        <button onClick={() => handleButtonClick('5')} className="clickedButtons[5] ? 'clicked' : '' ml-[25px] mt-[3px] w-[33px] h-[30px] bg-[#DAD9DB] rounded-[8px]"></button> <br />
                        <button onClick={() => handleButtonClick('10')} className="clickedButtons[10] ? 'clicked' : '' ml-[150px] w-[33px] h-[30px] bg-[#DAD9DB] rounded-[8px]"></button>
                        
                        
                    </div>
    
    
                    <div className="shadow-lg w-[252.88px] h-[366.63px] bg-auto bg-no-repeat bg-center style rounded-[14px] pt-12" style={uppersleepStyle}>
                    
                    </div>
                    <div>
                        <Points clickedButtons={clickedButtons} price={bus_price}/>
                    </div>
                    
                </div>
                
    
            </div>
            
        )

    } 
    else{
        return ( 
            <div className="w-[1000px] h-[430px] shadow-lg  m-4 " >
                <div className="flex justify-first  gap-20 m-4 ml-20 " >
                    <div className="flex gap-3 " >
                        <div className="w-[33px] h-[26px] bg-[#072448] rounded-[8px]  " />
                        <h3 className="" >Booked</h3>
                    </div>
                    <div className="flex gap-3" >
                        <div className="w-[33px] h-[26px] bg-[#DAD9DB] rounded-[8px]" />
                        <h3 className="" >Available</h3>
                    </div>
                    <div className="flex gap-3" >
                        <div className="w-[33px] h-[26px] bg-[#F8AA4B] rounded-[8px]" />
                        <h3 className="" >Your Seat</h3>
                    </div>

                </div>
                <div className="flex gap-5 ml-5" >
                    <div className="shadow-lg w-[250.88px] h-[366.63px] bg-auto bg-no-repeat bg-center style rounded-[14px] pt-12" style={lowersleepStyle} >
                    <button onClick={() => handleButtonClick('1')} className="clickedButtons[1] ? 'clicked' : '' ml-[29px] mt-[-10px] w-[30px] h-[83px] bg-[#DAD9DB] rounded-[8px]"></button>
                    <button onClick={() => handleButtonClick('2')} className="clickedButtons[2] ? 'clicked' : '' ml-[10px] mt-[-10px] w-[30px] h-[83px] bg-[#DAD9DB] rounded-[8px]"></button>
                    </div>


                    <div className="shadow-lg w-[252.88px] h-[366.63px] bg-auto bg-no-repeat bg-center style rounded-[14px] pt-12" style={uppersleepStyle}>
                    
                    </div>
                    <div>
                        <Points clickedButtons={clickedButtons}/>
                    </div>
        
                </div>

            </div>
        )
    }
}
export default SeatSelection;
