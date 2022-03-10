import Main from './pages/Main/Main';
import { Routes, Route } from 'react-router-dom';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";


const App = () => {
  return (
    <div>
      <NavbarMenu></NavbarMenu>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Routes>
    </div>
  );
}

export default App;
