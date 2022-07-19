import { useSelector } from "react-redux";
import { pageActions } from "../redux/store";
import classes from "./Rockets.module.css";
import rocket from "../img/rocket.jpeg";

const Rockets = () => {
  const info = useSelector((state) => state.rocket);

  return (
    <div className={classes.rocketContainer}>
      <div>
        <img src={info.flickr_images[0]}></img>
      </div>
      <div>
        <h2>{info.rocket_name}</h2>
        <p>{info.description}</p>
        <button type="submit">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rockets;
