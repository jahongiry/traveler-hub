import { configureStore } from '@reduxjs/toolkit';
import { missionInfo } from './missions/missions';
import { rocketInfo } from './store';

const store = configureStore({
  reducer: { rocket: rocketInfo.reducer, mission: missionInfo.reducer },
});
export default store;
