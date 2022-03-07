import styles from './App.module.css';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';


const App = () => {
  return (
    <div className={styles.wrapper}>
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
