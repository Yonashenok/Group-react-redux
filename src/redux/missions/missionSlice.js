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
    return data;
  },
);

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggle(state) {
      state.toggleStatus = !state.toggleStatus;
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

export const { toggle } = missionSlice.actions;
export default missionSlice.reducer;
