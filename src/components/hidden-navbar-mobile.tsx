import { logo, hamburger } from "../assets";

interface PropTypes {
  isOpen: boolean;
  showHeader: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HiddenNavBarMobile = ({ isOpen, showHeader, setIsOpen }: PropTypes) => {
  return (
    <>
      <div
        className={`fixed h-16 w-full flex flex-row items-center justify-center z-[3] transition-css ${
          showHeader ? "" : "hidden"
        }`}
      >
        <img src={logo} alt="" className="relative h-6 w-36" />
        <button
          type="button"
          className="absolute right-4 h-6 w-6 flex items-center justify-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img src={hamburger} alt="" className="relative h-4 w-10" />
        </button>
      </div>
      <div
        className={`fixed right-0 z-[1]  h-full w-full ${
          isOpen ? "bg-[black]/50" : ""
        }`}
      ></div>
      <div
        className={`fixed right-0 z-[1] transition-css h-[100%] flex flex-col items-end justify-start bg-[black] ${
          isOpen ? "w-72" : "w-0"
        }`}
      >
        <div
          className={`mt-16 h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            FALCON 9
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            FALCON HEAVY
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            DRAGON
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            STARSHIP
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            HUMAN SPACEFLIGHT
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            RIDESHARE
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            STARSHIELD
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            STARLINK
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            MISSION
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            LAUNCHES
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            CAREERS
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            UPDATES
          </a>
        </div>
        <div
          className={`h-10 w-60 border-b-[1px] border-b-[#808080]/25 flex items-end justify-end ${
            isOpen ? "" : "hidden"
          }`}
        >
          <a href="" className="mb-1 mr-4 text-white text-sm">
            SHOP
          </a>
        </div>
      </div>
    </>
  );
};

export default HiddenNavBarMobile;
