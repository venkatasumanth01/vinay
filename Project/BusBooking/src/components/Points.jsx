import "./Points.css"
import { LuArrowLeftFromLine } from "react-icons/lu";
import { LuArrowRightFromLine } from "react-icons/lu";
import { FaRupeeSign } from "react-icons/fa";

const Points=({ clickedButtons })=> {

  

  const selectedButtons = Object.entries(clickedButtons)
    .filter(([buttonName, isClicked]) => isClicked)
    .map(([buttonName]) => buttonName);

  const bus_price=parseInt(clickedButtons.price);
  const total=parseInt(selectedButtons.length);

  return (
    <>
      <div className="h-[344px] w-[390px] bg-[#9aa9ba] rounded-t-[60px] mt-5 ml-5">
          <br /><br />
          <div className="list">
            <div>
            <LuArrowRightFromLine className="w-[24px] h-[24px] ml-7 mt-3 " />
            </div>
            <div class="mainselection">
              <select name="State" id="input7">
                  <option>Select Boarding Point</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option> 
                  <option value="Alabama">Alabama</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>                              
              </select>
            </div>              
          </div>

          <br />
          <div className="list">
            <div>
            <LuArrowLeftFromLine className="w-[24px] h-[24px] ml-7 mt-3 " />
            </div>
            <div class="mainselection">
              <select name="State" id="input7">
                  <option>Select Dropping Point</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option> 
                  <option value="Alabama">Alabama</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>                              
              </select>
            </div>              
          </div>

          <br /> <br />
          <div className="ml-[30px] w-[330px] flex space-x-[140px] font-normal">
            <div>
                <p>Selected Seats <br /> 
                <div className="clicked-button font-bold">
                {selectedButtons.length > 0 && (
                  <div>
                    {selectedButtons.join(', ')}
                  </div>
                    )}
              </div>
              </p>
                
            </div>
            <div>
                <p>Total Fare <br /> Rs. <span className="font-bold">{total * bus_price}</span></p>
            </div>
          </div>

          <br />
          <button className="bg-[#FFCB00] rounded-md h-[40px] w-[300px] ml-10 font-normal text-[white]">Proceed</button>
      </div>
    </>
  )
}

export default Points;