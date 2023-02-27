import img from '../assets/Slide_1.jpg';

const Sejarah = () => {
    return ( 
    <>
            <div className=" bg-white h-full w-full flex flex-row justify-between mb-10">
            <div className='flex flex-col'>
            <h1 className="px-32 head pb-5">Sejarah</h1>
            <img className=" flex pl-32 pr-5 " src={img} height={900} width={850}/>
            </div>
            <div className="flex flex-col items-start justify-center w-4/5 capt-sejarah mt-6">
                <p className='capt pr-32 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minima, placeat possimus at dolorem illum animi dolor iusto blanditiis natus provident atque? Quasi esse, non dolorum perferendis mollitia maxime dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aspernatur consequatur. Voluptate quia provident et quas cupiditate nulla eligendi possimus velit porro quos quidem autem voluptates, fugit voluptatum culpa sit?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod provident et quas cupiditate nulla eligendi Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam cumque inventore, quaerat rerum repudiandae, quod, obcaecati fugit laborum ullam reprehenderit! Eligendi cum quaerat id suscipit doloremque commodi ipsam temporibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quos sunt est,sit amet consectetur adipisicing elit. Unde quos sunt estsit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat repellat, tenetur impedit obcaecati officiis itaque deleniti! Quibusdam, beatae fugiat odio architecto reiciendis repellat assumenda itaque modi provident, aut deserunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel earum quos, quisquam animi corporis soluta, voluptatem quas, quia impedit quaerat natus tempore neque molestiae cupiditate? Animi praesentium voluptate reiciendis nobis?</p>
                <button className="block mt-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent bg-black  border border-black md:hover:text-blue-700 dark:text-white md:dark:hover:text-black dark:hover:text-black md:dark:hover:bg-transparent">Read more</button>
            </div>
        </div>
    </> 
    );
}
 
export default Sejarah;