import { useState, createContext } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Team from "./Components/Team";
import Layout from "./Components/Layout";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const DarkMode = createContext({});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Router>
        <DarkMode.Provider
          value={{
            darkMode,
            setDarkMode,
          }}
        >
          <div>
            <Navbar></Navbar>
            <div
              className="App h-screen bg-gray-800 text-lg text-center"
              style={{ background: darkMode ? " rgb(43, 43, 43)" : "white" }}
            >
              <Layout>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/about" exact>
                    <About />
                  </Route>{" "}
                  <Route path="/team/:name" exact>
                    <Team />
                  </Route>
                </Switch>
              </Layout>
            </div>
          </div>
        </DarkMode.Provider>
      </Router>
    </>
  );
}

export default App;
