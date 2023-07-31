// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Routes, Route, Outlet } from 'react-router-dom';
// import { fetchMission } from './redux/missions/missionSlice';
// import PageNav from './components/PageNav/PageNav';
// import MyProfile from './pages/MyProfile';
// import Missions from './pages/Missions';
// import Rockets from './pages/Rockets';
// import './App.css';

// function Layout() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchMission());
//   }, [dispatch]);
//   return (
//     <>
//       <PageNav />
//       <Outlet />
//     </>
//   );
// }

function App() {
  return (
    <div>
      <h1>home page</h1>
    </div>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<h1>home</h1>} />
    //     <Route path="missions" element={<Missions />} />
    //     <Route path="rockets" element={<Rockets />} />
    //     <Route path="myProfile" element={<MyProfile />} />
    //     <Route path="*" element={<h2>No page found</h2>} />
    //   </Route>
    // </Routes>
  );
}

export default App;
