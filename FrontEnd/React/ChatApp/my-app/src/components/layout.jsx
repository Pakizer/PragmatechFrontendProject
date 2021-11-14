import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/redurcers/messages";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();

  const Click = () => {
    dispatch(
      addMessage({
        text: inputRef.current.value,
        user: location.pathname === "/" ? "player1" : "player2",
        read: false,
      })
    );
    inputRef.current.value = "";
  };

  return (
    <>
      <div className="h-full grid grid-rows-[90%,10%] py-5 px-5">
        <main>{props.children}</main>
        <div className="grid grid-cols-[95%,5%] gap-x-4">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                Click();
              }
            }}
            ref={inputRef}
            type="text"
            className="border-2 px-3 border-black border-opacity-60 outline-none rounded-xl"
          />
          <button className="bg-gray-500 rounded-xl text-white" onClick={Click}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Layout;
