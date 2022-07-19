import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  rocket_name: "",
  description: "",
  flickr_images: "",
};

export const rocketInfo = createSlice({
  name: "pages",
  initialState,
  reducers: {
    rockets(state, action) {
      return {
        id: action.payload.id,
        rocket_name: action.payload.rocket_name,
        description: action.payload.description,
        flickr_images: action.payload.flickr_images,
      };
    },
  },
});

export const pageActions = rocketInfo.actions;

export const fetchData = () => {
  return async (dispatch) => {
    const fetchingData = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await response.json();
      return data;
    };

    try {
      const testdata = await fetchingData();
      console.log(testdata);
      dispatch(pageActions.rockets(testdata[0]));
    } catch (error) {
      console.log(error);
    }
  };
};
