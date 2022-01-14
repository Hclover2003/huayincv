import { useRef } from "react";
import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  const myRef = useRef();
  const executeScroll = () => {
    const anchor = document.getElementById("anchorPludose");
    anchor.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <Router>
      <div className="App">
        <Landing executeScroll={executeScroll} />
        <Switch>
          <Route path="/about">
            <About myRef={myRef} />
          </Route>
          <Route path="/projects">
            <Projects myRef={myRef} />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
        <Route
          render={({ location }) =>
            ["/", "/login"].includes(location.pathname) ? null : <Footer />
          }
        />
      </div>
    </Router>
  );
}

export default App;
