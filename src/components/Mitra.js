
import Orang from '../assets/Mitra.png';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Car = () => {
    return ( 
        <div className="flex flex-col relative space-x-5 items-center py-4 mit">
        <div className='pb-10 flex flex-col  mitra '>
            <h1 className='flex items-end justify-end head '>Mitra Kami</h1>
            <span className='border-b-4 border-black w-28'></span>
        </div>
        <div className='flex flex-row w-11/12 space-x-6 justify-center'>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
        </div>
        <div className='flex flex-row w-11/12 space-x-6 mt-8 justify-center '>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
            <img src={Orang} height={100} width={100}/>
        </div>
        <button role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-24 top-48 left-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
        <svg width={20} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
        </button>
        <button role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-24 top-48 le focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
            <svg width={20} height={20} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    </div>
     );
}
 
export default Car;