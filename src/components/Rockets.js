import { useSelector, useDispatch } from 'react-redux';
import { pageActions } from '../redux/store';
import classes from './Rockets.module.css';
// import rocket from '../img/rocket.jpeg';

const Rockets = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.rocket);

  const reserve = ({ target }) => {
    const { id } = target;
    dispatch(pageActions.reserving([info, Number(id)]));
  };

  return (
    <>
      {info.map((data) => (
        <div key={data.id} className={classes.rocketContainer}>
          <div>
            <img alt="Rocket" src={data.flickr_images[0]} />
          </div>
          <div>
            <h2>{data.rocket_name}</h2>
            <p>{data.description}</p>
            <button id={data.id} onClick={reserve} type="submit">
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Rockets;
