import img from '../assets/Slide_1.jpg';
import img_1 from '../assets/Slide_2.jpg';

const Card = () => {
    return ( 
        <>
        <div className=" bg-white h-full w-full flex flex-row justify-between">
            <img className="w-1/2 py-28 px-32 max-h-screen" src={img}/>
            <div className="flex flex-col items-start justify-start w-1/2 ">
                <h1 className="mt-28 text-start text-3xl head">Kitchen Interior</h1>
                <p className='font-thin pr-32 text-justify pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima, placeat possimus at dolorem illum animi dolor iusto blanditiis natus provident atque? Quasi esse, non dolorum perferendis mollitia maxime dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aspernatur consequatur. Voluptate quia provident et quas cupiditate nulla eligendi possimus velit porro quos quidem autem voluptates, fugit voluptatum culpa sit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod provident et quas cupiditate nulla eligendi </p>
                <button className="block mt-4 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent bg-black  border border-black md:hover:text-blue-700 dark:text-white md:dark:hover:text-black dark:hover:text-black md:dark:hover:bg-transparent">Read more</button>
            </div>
        </div>
        <div className=" bg-white h-full w-full flex flex-row-reverse justify-between crad">
            <img className="w-1/2 py-28 px-32 max-h-screen" src={img_1}/>
            <div className="flex flex-col items-end justify-start w-1/2 ">
                <h1 className="mt-28 flex text-3xl pl-32 head">Living Room</h1>
                <p className='font-thin pl-32 text-justify pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima, placeat possimus at dolorem illum animi dolor iusto blanditiis natus provident atque? Quasi esse, non dolorum perferendis mollitia maxime dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aspernatur consequatur. Voluptate quia provident et quas cupiditate nulla eligendi possimus velit porro quos quidem autem voluptates, fugit voluptatum culpa sit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod provident et quas cupiditate nulla eligendi adipisicing elit. Quod provident et quas cupiditate nulla eligendi</p>
                <button className="block ml-32 mt-4 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent bg-black  border border-black md:hover:text-blue-700 dark:text-white md:dark:hover:text-black dark:hover:text-black md:dark:hover:bg-transparent">Read more</button>
            </div>
        </div>
        </>
     );
}
 
export default Card;