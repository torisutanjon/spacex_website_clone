import { logo, hamburger, close } from "../assets";
interface PropTypes {
  isOpen: boolean;
  showHeader: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HiddenNavBarDesktop = ({ isOpen, showHeader, setIsOpen }: PropTypes) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-24 w-full flex flex-row items-center justify-start z-[2] ${
          showHeader ? "showTopNav" : "hidden"
        }`}
      >
        <img
          src={logo}
          alt=""
          className="relative ml-8 h-5 w-48 mb-4 mx-2 xl:ml-24 xl:h-7 xl:w-60"
        />
        <a href="" className="text-xs text-white font-bold mx-1 xl:mx-3">
          FALCON 9
        </a>
        <a
          href=""
          className="text-.65 text-white font-bold mx-1 xl:text-xs xl:mx-3"
        >
          FALCON HEAVY
        </a>
        <a
          href=""
          className="text-.65 text-white font-bold mx-1 xl:text-xs xl:mx-3"
        >
          DRAGON
        </a>
        <a
          href=""
          className="text-.65 text-white font-bold mx-1 xl:text-xs xl:mx-3"
        >
          STARSHIP
        </a>
        <a
          href=""
          className="text-.65 text-white font-bold mx-1 xl:text-xs xl:mx-3"
        >
          HUMAN SPACEFLIGHT
        </a>
        <a
          href=""
          className="text-.65 text-white font-bold mx-1 xl:text-xs xl:mx-3"
        >
          RIDESHARE
        </a>
        <a
          href=""
          className="text-.65 text-white font-bold mx-1 xl:text-xs xl:mx-3"
        >
          STARSHIELD
        </a>
        <a
          href=""
          className="text-.65 text-white font-bold mx-1 xl:text-xs xl:mr-32 xl:mx-3"
        >
          STARLINK
        </a>
        <a
          href=""
          className="absolute text-.65 right-24 text-white font-bold xl:text-xs xl:right-32"
        >
          SHOP
        </a>
        <button
          type="button"
          className="absolute right-12 h-5 w-5 xl:right-16"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img src={hamburger} alt="" className="relative h-3 w-5" />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-screen w-screen z-[2] bg-black/75 transition-css ${
          isOpen ? "" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full flex flex-col items-end justify-start bg-black z-[3] transition-css ${
          isOpen ? "w-96" : "w-0"
        }`}
      >
        <button
          type="button"
          className={`h-5 w-5 mr-12 mt-10 flex items-center justify-center ${
            isOpen ? "" : "hidden"
          }`}
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img src={close} alt="" className="relative h-3 w-3" />
        </button>
        <div
          className={`mt-4 mr-12 h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-center justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a
            href=""
            className="text-sm text-white hover:opacity-50 transition-css"
          >
            MISSION
          </a>
        </div>
        <div
          className={`mr-12 h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-center justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a
            href=""
            className="text-sm text-white hover:opacity-50 transition-css"
          >
            LAUNCHES
          </a>
        </div>
        <div
          className={`mr-12 h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-center justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a
            href=""
            className="text-sm text-white hover:opacity-50 transition-css"
          >
            CAREERS
          </a>
        </div>
        <div
          className={`mr-12 h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-center justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a
            href=""
            className="text-sm text-white hover:opacity-50 transition-css"
          >
            UPDATES
          </a>
        </div>
        <div
          className={`mr-12 h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-center justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a
            href=""
            className="text-sm text-white hover:opacity-50 transition-css"
          >
            SHOP
          </a>
        </div>
      </div>
    </>
  );
};

export default HiddenNavBarDesktop;
