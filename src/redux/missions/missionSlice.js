import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  toggleStatus: false,
  status: 'idle',
  error: 'no',
};

export const fetchMission = createAsyncThunk(
  'missions/fetchMission',
  async () => {
    const res = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await res.json();
    const newData = data.map((mission) => ({
      ...mission,
      missionStatus: false,
    }));
    return newData;
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleMission(state, action) {
      const id = action.payload;
      const joinedMission = state.missions.find(
        (mission) => mission.mission_id === id,
      );

      joinedMission.missionStatus = !joinedMission.missionStatus;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMission.pending, (state) => {
        state.status = 'Loading...';
      })
      .addCase(fetchMission.fulfilled, (state, action) => {
        state.missions = action.payload;
      })
      .addCase(fetchMission.rejected, (state) => {
        state.status = 'something went wrong';
      });
  },
});

export const { toggleMission } = missionSlice.actions;
export default missionSlice.reducer;
