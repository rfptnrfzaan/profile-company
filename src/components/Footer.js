import NavLogo from '../assets/Navlog.png'

const Footer = () => {
    return ( 
        <div className="mx-auto container py-16 pl-20 foot">
            <div className="grid grid-cols-2">
                <div className='flex flex-row ml-20'>
                    <img src={NavLogo} className="h-36 mb-2 mr-3" alt="Logo" />
                    <span className="mt-10 self-center text-3xl font-semibold whitespace-nowrap dark:text-black head">Studio Shodwe</span>
                </div>
                <div className='flex flex-row mt-12'>
                    <div className=" ml-8">
                        <h2 className="text-base font-semibold leading-4 text-gray-800 mb-4 head">Company</h2>
                        <p className="hover:text-gray-500 text-base leading-4  text-gray-800 flex text-justify mr-20 capt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus laudantium dolorum architecto corporis provident voluptates, deserunt reiciendis tenetur impedit, laboriosam quod exercitationem dicta doloremque sequi tempore voluptas! Adipisci, voluptates?</p>
                        <button className="block mt-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent bg-black  border border-black md:hover:text-blue-700 dark:text-white md:dark:hover:text-black dark:hover:text-black md:dark:hover:bg-transparent">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;