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
        reserved: false,
      }));
      return ids;
    },

    reserving(state, action) {
      const reservedId = action.payload[1];
      const reserves = action.payload[0].map((item) => {
        if (item.id !== reservedId) {
          return item;
        }
        return { ...item, reserved: true };
      });
      return reserves;
    },

    cancelReserving(state, action) {
      const reservedId = action.payload[1];
      const reserves = action.payload[0].map((item) => {
        if (item.id !== reservedId) {
          return item;
        }
        return { ...item, reserved: false };
      });
      return reserves;
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
