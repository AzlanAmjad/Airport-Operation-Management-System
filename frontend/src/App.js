import { Route, Routes } from "react-router-dom";

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
