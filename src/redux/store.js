import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const rocketInfo = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    rockets(state, action) {
      const ids = action.payload.map((item) => ({
        id: item.id,
        rocket_name: item.rocket_name,
        description: item.description,
        flickr_images: item.flickr_images,
      }));
      return ids;
    },
  },
});

export const pageActions = rocketInfo.actions;

export const fetchData = () => async (dispatch) => {
  const fetchingData = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();
    return data;
  };
  try {
    const testdata = await fetchingData();
    dispatch(pageActions.rockets(testdata));
  } catch (error) {
    console.log(error);
  }
};
