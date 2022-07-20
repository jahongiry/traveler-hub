import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const missionInfo = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    missions(state, action) {
      const missionArray = [];
      Object.keys(action.payload).forEach((key) => {
        missionArray.push({
          mission_id: key,
          mission_name: action.payload[key].mission_name,
          description: action.payload[key].description,
        });
      });
      return missionArray;
    },

    JoinButtonAction(state, action) {
      const lastState = action.payload[1];
      const newState = action.payload[0].map((mission) => {
        if (mission.mission_id !== lastState) { return mission; }
        return { ...mission, reserved: true };
      });
      // console.log(newState);
      return newState;
    },

  },
});

export const missionActions = missionInfo.actions;

export const getMissions = () => async (dispatch) => {
  const fetchingData = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
  };

  try {
    const testdata = await fetchingData();
    dispatch(missionActions.missions(testdata));
  } catch (error) {
    console.log(error);
  }
};
