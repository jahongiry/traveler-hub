import { configureStore } from '@reduxjs/toolkit';
import { rocketInfo } from './store';

const store = configureStore({
  reducer: { rocket: rocketInfo.reducer },
});
export default store;
