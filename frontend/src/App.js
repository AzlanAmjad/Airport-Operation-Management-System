import { Route, Routes } from "react-router-dom";

// import components
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <div>Hello World</div>

      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
