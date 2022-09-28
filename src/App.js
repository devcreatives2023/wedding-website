import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { icons } from "./constants";
import { Contatti, Home, LocationOzieri, Locations, Marketing, Partners, Progetto, Shooting, SocialWall } from "./pages";
import { Footer, Text, Xd } from "./components";
const App = () => {
  // change cursor style
  const delay = 18;
  const dot = useRef(null);
  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);
  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(1);
  const _y = useRef(1);
  const requestRef = useRef(null);
  React.useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);
    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate(-50%, -50%) scale(0.75)";
    } else {
      dot.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };
  return (
    <>
      <div
        className="cursor-dot flex  font-logo justify-center
         items-center capitalize z-[111111000000]
         text-red-700 font-semibold "
        ref={dot}
      > <icons.AiFillHeart fontSize={24} className="ml-1" />
      </div>
      <div className=" font-main overflow-x-hidden">
        <Text />
        <Xd />
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="shoot" element={<Shooting />} />
              <Route path="shoot" element={<Shooting />} />

              <Route path="locations">
                <Route index element={<Locations />} />
                <Route path="ozieri" element={<LocationOzieri />} />
              </Route>

              <Route  path="Partners" element={<Partners />}  />
              <Route  path="progetto" element={<Progetto />}  />
              <Route  path="social" element={<SocialWall />}  />
              <Route  path="market" element={<Marketing />}  />
              <Route  path="contatti" element={<Contatti />}  />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
};

export default App;
