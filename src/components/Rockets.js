import { useSelector, useDispatch } from 'react-redux';
import { pageActions } from '../redux/store';
import classes from './Rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.rocket);

  const reserve = ({ target }) => {
    const { id } = target;
    dispatch(pageActions.reserving([info, Number(id)]));
  };

  const cancel = ({ target }) => {
    const { id } = target;
    dispatch(pageActions.cancelReserving([info, Number(id)]));
  };

  return (
    <>
      {info.map((data) => (
        <div key={data.id} className={classes.rocketContainer}>
          <div>
            <img
              className={classes.images}
              alt="Rocket"
              src={data.flickr_images[0]}
            />
          </div>
          <div>
            <h2>{data.rocket_name}</h2>
            {!data.reserved && (
              <p className={classes.paragraph}>{data.description}</p>
            )}
            {data.reserved && (
              <p className={classes.paragraph}>
                <span className={classes.flag}>Reserved </span>
                {data.description}
              </p>
            )}
            {!data.reserved && (
              <button
                className={classes.reservation}
                id={data.id}
                onClick={reserve}
                type="submit"
              >
                Reserve Rocket
              </button>
            )}
            {data.reserved && (
              <button
                className={classes.cancelReservation}
                id={data.id}
                onClick={cancel}
                type="submit"
              >
                Cancel Reservation
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Rockets;
