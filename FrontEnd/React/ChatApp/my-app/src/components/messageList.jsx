import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { generate } from "shortid";
import { updateMessage } from "../redux/redurcers/messages";

const MessageList = (props) => {
  const messages = useSelector((state) => state.messageStore.messages);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(updateMessage());
  }, [location.pathname]);

  return (
    <>
      <div className="flex flex-col space-y-2">
        {messages.map((message, index) => {
          return (
            <div
              key={generate()}
              className={`w-full ${
                message.user === props.user ? "text-right" : "text-left"
              }`}
            >
              {message.text}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MessageList;
