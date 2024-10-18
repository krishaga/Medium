// import { NavBar } from "../Components/NavBar"
// import { Button } from "../Components/Button"
// export const Home = () => {
//     return <div className="bg-custom-home h-screen">
//         <NavBar></NavBar>
//         <div className="flex">
//             <div className="flex-none">
//                 <div className="-tracking-wide pt-40 pl-40">
//                         <div className="text-8xl  font-serif">
//                             Human
//                             <br/>stories & ideas
//                         </div>
//                         <div className="pt-10 font-serif font-medium text-xl">A place to read, write and deepen your understanding</div>
//                 </div>
//                 <div className="pt-12 pl-40 " >
//                     <Button data="Start Reading" css="px-8 py-2 font-medium text-lg"></Button>
//                 </div>
//             </div>
//             <div className="pt-10" >
//                 <img src="/assets/home_page.png" className="h-[580px] w-[440px] justify-end aspect-auto align-middle overflow-clip" alt="Hello" />
//             </div>
//         </div>
//         <hr className="border-t-1 border-black " />
//         <div className="py-5">
//             <ul className="flex items-center justify-center gap-7 text-xs  text-gray-400">
//                 <li>Help</li>
//                 <li>Status</li>
//                 <li>About</li>
//                 <li>Carrers</li>
//                 <li>Press</li>
//                 <li>Blog</li>
//                 <li>Privacy</li>
//                 <li>Terms</li>
//                 <li>Text to speech</li>
//                 <li>Teams</li>
//             </ul>
//         </div>
//     </div>
// }


import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/Button";

export const Home = () => {
  return (
    <div className="relative bg-custom-home h-screen">
      <NavBar />
      <div className="flex">
        <div className="flex-none">
          <div className="-tracking-wide pt-40 pl-40">
            <div className="text-8xl  font-serif">
              Human
              <br></br>
              stories & ideas
            </div>
            <div className="pt-10 font-serif font-medium text-xl">
              A place to read, write and deepen your understanding
            </div>
          </div>
          <div className="pt-12 pl-40 pb-24">
            <Button data="Start Reading" css="px-8 py-2 font-medium text-lg"></Button>
          </div>
        </div>

        {/* Right-end image */}
        <div className="relative flex-grow">
          <img
            src="/assets/home_page.png"
            className="absolute right-0 top-10 h-[580px] w-[440px] aspect-auto overflow-clip"
            alt="Flower"
          />
          
        </div>
      </div>

      <hr className="border-t-1 border-black" />
      <div className="py-5">
        <ul className="flex items-center justify-center gap-5 text-xs text-gray-500">
          <li>Help</li>
          <li>Status</li>
          <li>About</li>
          <li>Carrers</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Text to speech</li>
          <li>Teams</li>
        </ul>
      </div>
    </div>
  );
};



