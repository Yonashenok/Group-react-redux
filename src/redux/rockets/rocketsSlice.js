import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  toggleStatus: false,
  status: 'idle',
  error: 'no',
};

export const fetchRocket = createAsyncThunk('rockets/fetchRocket', async () => {
  const res = await fetch('https://api.spacexdata.com/v4/rockets');
  const data = await res.json();
  const rocketdata = data.map((rockets) => ({
    ...rockets,
    rocketStatus: false,
  }));
  return rocketdata;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    RocketReservation(state, action) {
      const id = action.payload;
      const updatedRockets = state.rockets.map((rocket) => (rocket.id === id
        ? { ...rocket, rocketStatus: !rocket.rocketStatus }
        : rocket));

      state.rockets = updatedRockets;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocket.pending, (state) => {
        state.status = 'Loading...';
      })
      .addCase(fetchRocket.fulfilled, (state, action) => {
        state.rockets = action.payload;
        state.status = 'idle';
        state.error = 'no';
      })
      .addCase(fetchRocket.rejected, (state) => {
        state.status = 'something went wrong';
      });
  },
});

export const { RocketReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
