import Navbar from "../components/Navbar";
import { IoLogoYoutube, IoLogoFacebook, IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Footer from "../components/Footer";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  
const Contact = () => {
    const [agreed, setAgreed] = useState(false)
    return ( 
        <>
        <Navbar/>

        <div class="container my-20 px-6 mx-auto">
            <section class="mb-32 text-gray-800">
            <div className="flex mb-5 justify-center items-center">
                  <h1 className="head">Kontak kami</h1>
                </div>
            <div class="flex flex-row justify-center">
                <div class=" basis-auto md:mb-0  w-full md:w-6/12 px-3 lg:px-6 flex flex-col items-end">
                <p class="text-gray-500 mb-2">New York, 94126, United States</p>
                <p class="text-gray-500 mb-2">+ 01 234 567 89</p>
                </div>
                <div className="flex ">
                  <span className="border-r-4 border-black "></span>
                </div>
                <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 h-1/3 px-3 lg:pr-6">
                <div class="flex flex-row">
                  <div className="flex flex-col">
                  <div class="mb-3 w-full lg:w-6/12 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <span class="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <IoLogoYoutube/>
                        </span>
                      </div>
                      <div class="grow flex flex-col ml-6">
                        <p class="capt mb-1">Youtube</p>
                        <p className="capt">lorem YT</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 w-full px-3 lg:px-6">
                    <div class="flex items-start">
                      <div class="shrink-0">
                        <span class="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                        <IoLogoFacebook/>
                        </span>
                      </div>
                      <div class="grow flex flex-col ml-6">
                        <p class="capt mb-1">Facebook</p>
                        <p className="capt">Lorem</p>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="flex flex-col">
                  <div class="mb-3 w-full px-3 lg:px-6">
                    <div class="flex align-start">
                      <div class="shrink-0">
                        <span class="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <IoLogoWhatsapp/>
                        </span>
                      </div>
                      <div class="grow flex flex-col ml-6">
                        <p class="capt mb-1">Whatsapp</p>
                        <p className="capt">08123456789</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 w-full px-3 lg:px-6">
            <div class="flex align-start">
              <div class="shrink-0">
                <span class=" rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                  <IoLogoInstagram/>
                </span>
              </div>
              <div class="grow flex flex-col ml-6">
                <p class="capt mb-1">Instagram</p>
                <p className="capt">lorem</p>
              </div>
            </div>
                  </div>
                </div>
            </div>
                </div>
            </div>
            </section>
        </div>

        <div class="container my-24 px-6 mx-auto">
        <section class="mb-32 text-center text-gray-800">
            <div class="max-w-[700px] mx-auto px-3 lg:px-6">
            <h2 class="text-3xl font-bold mb-12 head">Kirim pesan langsung</h2>
            <form>
                <div class="form-group mb-6">
                <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name"/>
                </div>
                <div class="form-group mb-6">
                <input type="email" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                    placeholder="Email address" />
                </div>
                <div class="form-group mb-6">
                <textarea class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                </div>
                <button type="submit" class=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
            </form>
            </div>
        </section>
</div>
        <Footer/>   
        </>
     );
}
 
export default Contact;