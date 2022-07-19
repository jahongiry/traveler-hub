const FETCH_MISSIONS = 'store/missions/FETCH_MISSIONS';


export const getMissions = () => async (dispatch) => {
    await fetch('https://api.spacexdata.com/v3/missions')
      .then((res) => res.json())
      .then((mission) => {
        const missionTable = [];
        Object.keys(mission).forEach((mission_id) => {
          missionTable.push({
            mission_id: mission_id,
            mission_name: mission[mission_id][0].mission_name,
            description: mission[mission_id][0].description,
          });
        })
        .catch(error => {
          console.log(error);
      });
            
        dispatch({ type: FETCH_MISSIONS, missionTable });
      });
  };

const MissionReducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_MISSIONS:
        return action.missionTable;
      default:
        return state;
    }
  };

  export default MissionReducer;