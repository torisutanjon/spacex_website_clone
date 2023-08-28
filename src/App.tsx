import { useEffect, useState } from "react";
import { HiddenNavBarMobile, HiddenNavBarDesktop } from "./components";
import { fadeHook } from "./hooks";
import { useMediaQuery } from "react-responsive";

function App() {
  fadeHook.reveal();

  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const isDesktop = useMediaQuery({
    query: "(min-width: 960px)",
  });

  useEffect(() => {
    setPrevScrollY(window.scrollY);

    const onScrollUpdateHandler = () => {
      setIsOpen(false);
      const currentScrollY = window.scrollY;
      if (prevScrollY > currentScrollY || window.scrollY <= 200) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScrollUpdateHandler);
    return () => {
      window.removeEventListener("scroll", onScrollUpdateHandler);
    };
  }, [prevScrollY]);

  useEffect(() => {
    fadeHook.reveal();
  }, []);

  return (
    <div className="absolute top-0 left-0 h-full w-full">
      {/* topnav */}
      <div
        className={`fixed top-0 left-0 w-full transition-css bg-black z-[2] ${
          showHeader && window.scrollY >= 740 ? "h-16 md:h-24" : "h-0"
        }`}
      ></div>

      {isDesktop ? (
        <HiddenNavBarDesktop
          isOpen={isOpen}
          showHeader={showHeader}
          setIsOpen={setIsOpen}
        />
      ) : (
        <>
          {/* hidden navbar */}
          <HiddenNavBarMobile
            isOpen={isOpen}
            showHeader={showHeader}
            setIsOpen={setIsOpen}
          />
        </>
      )}

      {/* upcoming section */}
      <section className="relative h-screen w-screen upcoming-section flex">
        <div className="absolute bottom-16 left-4 h-36 w-72 flex flex-col items-start justify-start reveal xl:bottom-32 xl:left-28 xl:h-40 xl:w-1/3">
          <p className="text-lg text-[white]">UPCOMING LAUNCH</p>
          <p className="text-3xl font-bold text-white mt-[5px] xl:text-5xl">
            CREW-7 MISSION
          </p>
          <button
            type="button"
            className="absolute bottom-0 left-0 py-4 w-48 border-[2px] border-white text-[14px] text-white xl:py-3 xl:w-40"
          >
            WATCH
          </button>
        </div>
      </section>
      {/* recent section */}
      <section className="relative h-screen w-screen recent1-section flex">
        <div className="absolute bottom-16 left-4 h-36 w-72 flex flex-col items-start justify-start reveal xl:bottom-32 xl:left-28 xl:h-40 xl:w-1/3">
          <p className="text-lg text-[white]">RECENT LAUNCH</p>
          <p className="text-3xl font-bold text-white mt-[5px] xl:text-5xl">
            STARLINK MISSION
          </p>
          <button
            type="button"
            className="absolute bottom-0 left-0 h-[52.5px] w-[165px] border-[2px] border-white text-[14px] text-white"
          >
            REWATCH
          </button>
        </div>
      </section>
      {/* recent section */}
      <section className="relative h-screen w-screen recent2-section flex">
        <div className="absolute bottom-16 left-4 h-36 w-72 flex flex-col items-start justify-start reveal xl:bottom-32 xl:left-28 xl:h-40 xl:w-1/3">
          <p className="text-lg text-[white]">RECENT LAUNCH</p>
          <p className="text-3xl font-bold text-white mt-[5px] xl:text-5xl">
            STARLINK MISSION
          </p>
          <button
            type="button"
            className="absolute bottom-0 left-0 h-[52.5px] w-[165px] border-[2px] border-white text-[14px] text-white"
          >
            REWATCH
          </button>
        </div>
      </section>
      {/* starship section */}
      <section className="relative h-screen w-screen starship-section flex">
        <div className="absolute bottom-[10%] left-[20px] h-[150px] w-[90%] flex flex-col items-start justify-between reveal">
          <p className="text-3xl font-bold text-white mt-[5px] xl:text-5xl">
            STARSHIP FLIGHT TEST
          </p>
          <button
            type="button"
            className="absolute bottom-0 left-0 h-[52.5px] w-[165px] border-[2px] border-white text-[14px] text-white"
          >
            REWATCH
          </button>
        </div>
      </section>
      {/* footer */}
      <footer className="h-44 w-full bg-black xl:h-20 xl:flex xl:flex-row xl:items-center xl:justify-center">
        <div className="h-20 w-full flex items-center justify-center xl:h-10 xl:w-28">
          <p className="text-.65 text-white">SPACEX &copy; 2023</p>
        </div>
        <div className="h-24 w-full flex flex-col items-center justify-center xl:h-10 xl:flex-row xl:w-5/12">
          <div className="h-[45%] w-[80%] flex flex-row items-start justify-between xl:h-full xl:w-96 xl:items-center xl:mr-4">
            <a href="#" className="text-.65 font-bold text-white">
              TWITTER
            </a>
            <a href="#" className="text-.65 font-bold text-white">
              YOUTUBE
            </a>
            <a href="#" className="text-.65 font-bold text-white">
              INSTAGRAM
            </a>
            <a href="#" className="text-.65 font-bold text-white">
              FLICKR
            </a>
            <a href="#" className="text-.65 font-bold text-white">
              LINKEDIN
            </a>
          </div>
          <div className="h-[45%] w-[45%] flex flex-row items-start justify-between xl:h-full xl:w-44 xl:items-center xl:ml-4">
            <a href="#" className="text-.65 font-bold text-white">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-.65 font-bold text-white">
              SUPPLIERS
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
