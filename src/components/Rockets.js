import classes from "./Rockets.module.css";
import rocket from "../img/rocket.jpeg";

const Rockets = () => {
  return (
    <>
      <div className={classes.rocketContainer}>
        <div>
          <img src={rocket}></img>
        </div>
        <div>
          <h2>Falcon 1</h2>
          <p>
            Lorem ipsum dolor sit amet. Qui consequatur itaque est eligendi
            minus est vero praesentium qui facere dicta in similique error ut
            voluptatem nulla! Et distinctio fugiat id sint vitae vel laudantium
            iusto eum impedit atque et consequuntur
          </p>
          <button type="submit">Reserve Rocket</button>
        </div>
      </div>

      <div className={classes.rocketContainer}>
        <div>
          <img src={rocket}></img>
        </div>
        <div>
          <h2>Falcon 1</h2>
          <p>
            Lorem ipsum dolor sit amet. Qui consequatur itaque est eligendi
            minus est vero praesentium qui facere dicta in similique error ut
            voluptatem nulla! Et distinctio fugiat id sint vitae vel laudantium
            iusto eum impedit atque et consequuntur
          </p>
          <button type="submit">Reserve Rocket</button>
        </div>
      </div>
    </>
  );
};

export default Rockets;
