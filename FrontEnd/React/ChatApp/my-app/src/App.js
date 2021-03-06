import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import MessageList from "./components/messageList";

function App() {
  const messages = useSelector((state) => state.messageStore.messages);

  return (
    <div className="h-screen">
      <BrowserRouter>
        <nav className="h-[75px] w-full z-10 fixed top-0 left-0 bg-gray-500 flex justify-center items-center space-x-8 text-white">
          <Link to="/">
            Player 1{" "}
            <div className="text-xs bg-red-500">
              {
                messages.filter((w) => w.user === "player2" && w.read === false)
                  .length
              }
            </div>
          </Link>
          <Link to="/player2">
            Player 2{" "}
            <div className="text-xs bg-red-500">
              {
                messages.filter((w) => w.user === "player1" && w.read === false)
                  .length
              }
            </div>
          </Link>
        </nav>
        <div className="App h-full pt-[85px]">
          <Layout>
            <Routes>
              <Route path="/" element={<MessageList user="player1" />} />
              <Route path="/player2" element={<MessageList user="player2" />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
