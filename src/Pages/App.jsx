import "../Style/App.css";
import NavBar from "../Components/NavBar";
import TildeHeader from "../Components/TildeHeader";
import Board from "./Board";
import Actions from "./Actions";
import Review from "./Review";
import Profile from "./Profile";
import { List } from "phosphor-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [show, toggleMenu] = useState(false);
  const [openMenu, toggleOpenMenu] = useState(false);
  useEffect(() => {
    if (show) toggleOpenMenu(true);
    else toggleOpenMenu(false);
  }, [show]);
  return (
    <div
      className='App'
      onClick={() => {
        if (openMenu) toggleMenu(!show);
      }}
    >
      {show ? (
        <div>
          <NavBar className='Nav-Bar'></NavBar>
        </div>
      ) : (
        <List
          className='Burger-Menu'
          onClick={() => {
            toggleMenu(!show);
          }}
          size={32}
        ></List>
      )}
      <Router>
        <TildeHeader></TildeHeader>
        <Routes>
          <Route path='/' element={<Board />} />
          <Route path='/actions' element={<Actions />} />
          <Route path='/review-performance' element={<Review />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
