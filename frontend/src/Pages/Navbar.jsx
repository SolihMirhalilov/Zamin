import Uzb from "../assets/uzbekistan.png";
import Telegramm from "../assets/telegram.png";
import logo from "../assets/logo.png";
import glass from "../assets/glass.png";
import heart from "../assets/heart 1.png";
import kirish from "../assets/kirush.png";
import savat from "../assets/Savat.png"
export default function Navbar() {
  return (
    <>
      <nav className="max-w-[1140px] w-full m-auto pt-2">
        <div className="">
          {/* Nanbar Mini */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center">
              <div className="items-center flex bg-gray-200 rounded-md p-1">
                <img className="w-10 mr-3" src={Uzb} alt="" />
                <p className="text-sm">O'zbek tili</p>
              </div>
              <p className="ml-2 text-blue-600">Toshkent manzil aniqlangan</p>
            </div>

            <div className="flex justify-center items-center">
              <p className="cursor-pointer mx-2 text-sm" onClick={null}>
                Buyurtmalarim
              </p>
              <p className="cursor-pointer mx-2 text-sm" onClick={null}>
                Sovol-Jovob
              </p>
              <p className="cursor-pointer mx-2 text-sm" onClick={null}>
                Hamkorlar
              </p>

              <div className="bg-blue-600 p-1.5 items-center flex text-white text-sm rounded-md">
                <p>Aksiyalarni kuzatish</p>{" "}
                <img className=" ml-2 w-5 h-5" src={Telegramm} alt="" />
              </div>
            </div>
          </div>
          <div className="w-full h-0.5 bg-blue-200 my-3 hidden md:flex"></div>
            {/* Navbar Center */}
          <div className="flex justify-between items-center">
            <div>
              <img src={logo} alt="" />
            </div>{" "}
            <div
              className="bg-blue-200 hover:bg-blue-500 border-blue-700 border rounded-md flex items-center px-2 py-1 cursor-pointer"
              onClick={null}
            >
              <div >
                <div className="w-7 h-1.5  my-1 bg-white"></div>
                <div className="w-3.5 h-1.5 my-1 bg-white"></div>
                <div className="w-7 h-1.5 my-1 bg-white"></div>
              </div>
              <p className="ml-2 text-white">Katalog</p>
            </div>
            <div className="flex justify-between w-[35%] items-center ">
              <input
                type="text"
                name=""
                id=""
                className="border py-2 rounded-l-md px-2 w-full   text-gray-800 border-black"
              />
              <button className="bg-gray-200 rounded-r-md border border-black px-2 py-2">
                <img className="w-7 h-6" src={glass} alt="Search" />
              </button>
            </div>
            <ul className="flex w-auto items-center justify-between">
              <li className=" md:flex hidden items-center  hover:bg-gray-100 rounded-md p-2 mx-2" onClick={null}>
                <img className="mr-2 w-7 h-7" src={heart} alt="" />{" "}
                <p className="text-sm">Saralangan</p>
              </li>

                            <li className="md:flex items-center hover:bg-gray-100 rounded-md p-2 mx-2 hidden " onClick={null}>
                <img className="mr-2 w-7 h-7 " src={savat} alt="" />{" "}
                <p className="text-sm">Savat</p> <span className="rounded-md ml-1 bg-blue-800 p-1 text-white bg-b">{"11"}</span>
              </li>


                            <li className="md:flex items-center  rounded-md bg-gray-200 p-2 mx-2 cursor-pointer  " onClick={null}>
                <img className="mr-2 w-7 h-7 " src={kirish} alt="" />{" "}
                <p className="text-sm">Kirish</p>
              </li>
            </ul>
          </div>



          <div >
            <ul className="bg-blue-200 w-full  md:flex rounded-md h-12 mt-3 hidden justify-between items-center">
                <li className="text-sm font-semibold ml-3">Mahsulotlar</li>
                <li className="tex-white text-sm cursor-pointer hover:text-white " onClick={null}>Elektronika</li>
                <li className="tex-white text-sm cursor-pointer hover:text-white " onClick={null}>Elektronika</li>
                <li className="tex-white text-sm cursor-pointer hover:text-white " onClick={null}>Elektronika</li>
                <li className="tex-white text-sm cursor-pointer hover:text-white " onClick={null}>Elektronika</li>
                <li className="tex-white text-sm cursor-pointer hover:text-white " onClick={null}>Elektronika</li>
                <li className="tex-white text-sm cursor-pointer hover:text-white " onClick={null}>Elektronika</li>
                <li className="tex-white text-sm cursor-pointer hover:text-white " onClick={null}>Elektronika</li>
                <li className="tex-white text-sm cursor-pointer hover:text-white mr-3" onClick={null}>Elektronika</li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
