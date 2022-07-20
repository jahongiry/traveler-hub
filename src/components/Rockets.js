import { useSelector } from "react-redux";
import { pageActions } from "../redux/store";
import classes from "./Rockets.module.css";
import rocket from "../img/rocket.jpeg";

const Rockets = () => {
  const info = useSelector((state) => state.rocket);
  console.log(info);

  return (
    <>
      {info.map((data) => (
        <div key={data.id} className={classes.rocketContainer}>
          <div>
            <img src={data.flickr_images[0]}></img>
          </div>
          <div>
            <h2>{data.rocket_name}</h2>
            <p>{data.description}</p>
            <button type="submit">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Rockets;
