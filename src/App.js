import { useRef } from "react";
import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <Router>
      <div className="App">
        <Landing executeScroll={executeScroll} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects myRef={myRef} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
