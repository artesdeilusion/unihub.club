 import Link from "next/link";

export default function Navbar() {
 
    return (
           

             <div className=" flex rounded-full justify-between items-center  p-2 m-4 bg-opacity-10 bg-gray-500  max-w-screen-sm sm:mx-auto mx-4  backdrop-blur-3xl fixed   left-0 right-0 z-[12] ">
                 
                    <Link href="/" className="btn btn-ghost px-2 pt-1  text-xl text-gray-700 hover:text-gray-900">
                        <img src="/unihub.club.png" alt="Penguen Sanat Logo" className="h-7" />
                    </Link>

                 

                     <a href="http://register.unihub.club" className=" px-4 py-2    rounded-full text-white bg-red-500 border-none hover:bg-red-600">Şimdi üye ol</a>
             </div>
 
    );
}