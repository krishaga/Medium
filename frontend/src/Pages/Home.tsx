import { NavBar } from "../Components/NavBar";
import { Button } from "../Components/Button";

export const Home = () => {
  return (
    <div className="relative bg-custom-home h-screen">
      <div>
        <NavBar />
      </div>
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
            <Button data="Start Reading" css="bg-green-600 lg:px-8 lg:py-2 lg:font-medium lg:text-lg lg:bg-black"></Button>
          </div>
        </div>
        <div className="relative flex-grow invisible lg:visible">
          <img
            src="/assets/home_page.png"
            className="absolute right-0 top-10 h-[580px] w-[440px] aspect-auto overflow-clip"
            alt="Flower"
          />
          
        </div>
      </div>

      <hr className="border-t-1 border-black" />
      <div className="py-5 bg-black  lg:bg-custom-home">
        <div>
          <ul className="flex items-center justify-center gap-5 text-xs invisible lg:visible text-gray-500">
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
          <ul className="flex items-center justify-center gap-5 text-xs visible lg:invisible text-white ">
            <li>About</li>
            <li>Help</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};



