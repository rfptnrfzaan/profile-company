import Navbar from "../components/Navbar";
import Logo from '../assets/Logo.png';
import Team from "../components/Team";
import Footer from '../components/Footer'
import img from '../assets/Slide_1.jpg';
import Sejarah from "../components/Sejarah";
import img_1 from '../assets/Slide_2.jpg';

const About = () => {
    return ( 
        <>
        <Navbar/>
        <div className=" bg-white h-full w-4/5 flex flex-row justify-between abt ml-40">
            <img className=" pb-28 pt-10 pr-32 pl-20" src={Logo} height={600} width={600}/>
            <div className="flex flex-col items-start justify-center w-4/5 ">
                <h1 className="mt-18 text-start head">Studio Shodwe</h1>
                <p className=' pr-20 text-justify pt-4 capt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima, placeat possimus at dolorem illum animi dolor iusto blanditiis natus provident atque? Quasi esse, non dolorum perferendis mollitia maxime dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aspernatur consequatur. Voluptate quia provident et quas cupiditate nulla eligendi possimus velit porro quos quidem autem voluptates, fugit voluptatum culpa sit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod provident et quas cupiditate nulla eligendi </p>
                <button className="block mt-4 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent bg-black  border border-black md:hover:text-blue-700 dark:text-white md:dark:hover:text-black dark:hover:text-black md:dark:hover:bg-transparent">Read More</button>
            </div>
        </div>
        <Team/>
        <div className=" bg-white h-full w-full flex flex-row-reverse justify-between">
            <img className=" py-28 pr-32 pl-5 " src={img_1} height={550} width={550}/>
            <div className="flex flex-col items-end justify-start w-4/5 ">
                <h1 className="mt-28 flex pl-32 head">Visi</h1>
                <p className='pl-32 text-justify pt-4 capt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima, placeat possimus at dolorem illum animi dolor iusto blanditiis natus provident atque? Quasi esse, non dolorum perferendis mollitia maxime dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aspernatur consequatur. Voluptate quia provident et quas cupiditate nulla eligendi possimus velit porro quos quidem autem voluptates, fugit voluptatum culpa sit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod provident et quas cupiditate nulla eligendi adipisicing elit. Quod provident et quas cupiditate nulla eligendi</p>
                <button className="block ml-32 mt-4 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent bg-black  border border-black md:hover:text-blue-700 dark:text-white md:dark:hover:text-black dark:hover:text-black md:dark:hover:bg-transparent">Read More</button>
            </div>
        </div>
        <div className=" bg-white h-full w-full flex flex-row justify-between crad">
            <img className=" py-28 pl-32 pr-5 " src={img_1} height={550} width={550}/>
            <div className="flex flex-col items-start justify-start w-4/5 ">
                <h1 className="mt-28 flex pr-32 head">Misi</h1>
                <p className='capt pr-32 text-justify pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima, placeat possimus at dolorem illum animi dolor iusto blanditiis natus provident atque? Quasi esse, non dolorum perferendis mollitia maxime dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aspernatur consequatur. Voluptate quia provident et quas cupiditate nulla eligendi possimus velit porro quos quidem autem voluptates, fugit voluptatum culpa sit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod provident et quas cupiditate nulla eligendi adipisicing elit. Quod provident et quas cupiditate nulla eligendi</p>
                <button className="block  mt-4 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent bg-black  border border-black md:hover:text-blue-700 dark:text-white md:dark:hover:text-black dark:hover:text-black md:dark:hover:bg-transparent">Read More</button>
            </div>
        </div>
        <Sejarah/>
        <Footer/>
        </>
     );
}
 
export default About;