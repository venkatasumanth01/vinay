// eslint-disable-next-line no-unused-vars
import React from 'react'
import BusCard from '../components/BusCard';
import FilterContainer from '../components/FilterContainer';
import AdSection from '../components/AdSection';
import { IoIosArrowDropright } from "react-icons/io";
import { useLocation } from 'react-router-dom';


const BusSelection = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const origin = params.get('origin');
    const destination = params.get('destination');


    return (
        <div>
            <div className='z-10 header-nav fixed top-0 left-0 right-0 '>
                <h3 className='text-white text-center pt-3 text-xs ' >Select your Seat</h3>
                <div className='flex justify-center gap-20 mt-1' >
                    <h2 className='text-white font-medium text-lg   ' >{origin}</h2>
                    <span><IoIosArrowDropright className='w-[20px] h-[20px] text-[#FFFFFF] mt-2 ' /></span>
                    <h2 className='text-white font-medium text-lg ' >{destination}</h2>
                </div>
            </div>
            <AdSection />
            <div className='flex ' >
                <div>
                    <FilterContainer />
                </div>
                <div className="overscroll-auto">
                    <BusCard />

                </div>
            </div>

        </div>
    )
}

export default BusSelection;