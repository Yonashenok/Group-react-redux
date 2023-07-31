import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    miss: missionReducer,
  },
});

export default store;
