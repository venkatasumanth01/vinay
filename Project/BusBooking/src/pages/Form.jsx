

 const Form = () => {
    return (
        <>
            <div>
                {/* <div className="  lap:w-[1280px] h-[55px] bg-[#939FAB] rounded-b-[60px] desk:w-[1440px] lgdes:w-[1920px]  " >

                </div> */}
                <div className="  xl:w-auto h-[55px] bg-[#939FAB] rounded-b-[60px] 2xl:w-auto lg:w-auto md:w-auto sm:w-auto xs:h-[40px]   " >
                    <div className="flex  justify-center " >
                        <div className="m-20 bg-[#DADEE4] h-[630px] xs:h-[540px]  " >
                            <div className=" bg-[#072448] text-white  h-[75px] xs:w-[380px] xs:h-[47px]  sm:w-[400px] md:w-[460px] lg:w-[550px]  xl:w-[580px] 2xl:w-[650px] flex flex-col justify-center items-center " >
                                <h4 className="text-[15px] font-medium xs:text-[12px] " >Sangitam Travels</h4>
                                <p className="text-[13px] font-light xs:text-[10px] xs:font-light  " >2+1, SLEEPER, AC | 8:30PM </p>
                            </div>
                            <form action="">
                                <div className=" grid gap-3 ml-8 mt-4  xs:gap-2 xs:ml-6 sm:ml-2 md:ml-10 md:mt-8 lg:ml-12 lg:mt-6 " >
                                    <h4 className="xs:text-[13px] " >Traveller Information</h4>
                                    <h5 className="xs:text-[14px]" >Passenger 1</h5>
                                    <input type="text" placeholder="Name" id="passengername" className=" lg:w-[400px] md:w-[220px] xs:w-[190px] xs:text-[12px] sm:w-[100px] xs:h-[30px] h-[40px] bg-[#ffffff] rounded-[5px] p-4  border-black  " />
                                    <div>
                                        <input type="number" placeholder="age" id="age" className=" md:w-[120px] xs:w-[90px] sm:w-[100px] lg:w-[137px] xs:h-[30px] h-[40px] bg-[#ffffff] rounded-[5px] p-4  " required />
                                        <input type="radio" id="male" className=" w-[15px] h-[15px] bg-[#DAD9DB] ml-10   xs:ml-5 " /> Male
                                        <input type="radio" id="female" className=" w-[15px] h-[15px] bg-[#DAD9DB] ml-10   xs:ml-5 " /> Female
                                    </div>
                                    <h5 className="xs:text-[14px] " >Passenger 1</h5>
                                    <input type="text" placeholder="Name" id="passengername" className=" lg:w-[400px] md:w-[220px] xs:w-[190px] sm:w-[100px] xs:h-[30px] h-[40px] bg-[#ffffff] rounded-[5px] p-4  " required />
                                    <div className=" gap-3" >
                                        <input type="number" placeholder="age" id="age" className=" md:w-[120px] xs:w-[90px] sm:w-[100px] lg:w-[137px] xs:h-[30px] h-[40px] bg-[#ffffff] rounded-[5px] p-4  " required />
                                        <input type="radio" id="male" className=" w-[15px] h-[15px] bg-[#DAD9DB] ml-10 text-[14px] xs:ml-5 " /> Male
                                        <input type="radio" id="female" className=" w-[15px] h-[15px] bg-[#DAD9DB] ml-10  xs:ml-5 " /> Female
                                    </div>
                                    <h5 className="xs:text-[14px]" >Contact</h5>
                                    <input type="number" placeholder="Mobile" id="age" className=" xs:w-[220px] sm:w-[120px] md:w-[260px] lg:w-[300px] xs:h-[30px] h-[40px] bg-[#ffffff] rounded-[5px] p-4 " required />
                                    <input type="email" id="email" placeholder="Email" className=" xs:w-[220px] sm:w-[120px] md:w-[260px] lg:w-[300px] xs:h-[30px] h-[40px] bg-[#ffffff] rounded-[5px] p-4 " required />
                                    <button className=" bg-[#FFCB00] rounded-[15px] text-white text-[18px] font-medium text-center xs:w-[240px] sm:w-[180px] md:w-[250px] md:mt-6 md:ml-[13%] lg:w-[400px]  xs:mt-6 xs:ml-10  lg:mt-5 lg:ml-5 xl:mt-4 2xl:mt-7 2xl:ml-[11%]  h-[40px]  ml-[15%] " >Proceed to Book</button>
                                </div>

                            </form>
                        </div>

                    </div>


                </div>
            </div>
        </>

    )
}
export default Form;