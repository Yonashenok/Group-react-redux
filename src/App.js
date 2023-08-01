import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';
import { fetchMission } from './redux/missions/missionSlice';
import { fetchRocket } from './redux/rockets/rocketsSlice';
import PageNav from './components/PageNav/PageNav';
import MyProfile from './pages/MyProfile';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';
import './App.css';

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchRocket());
  }, [dispatch]);
  return (
    <>
      <PageNav />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>home</h1>} />
          <Route path="missions" element={<Missions />} />
          <Route path="rockets" element={<Rockets />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="*" element={<h2>No page found</h2>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
