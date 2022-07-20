import { useSelector } from 'react-redux';
import classes from './Profile.module.css';

const Profile = () => {
  const info = useSelector((state) => state.rocket);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.missions}>
        <p>Under construction</p>
      </div>
      <div className={classes.rocket}>
        <h2>My Rockets</h2>
        <table>
          <tbody>
            {info.map((data) => (
              <tr key={data.id} className={classes.containerRocket}>
                {data.reserved && (
                  <th className={classes.items}>{data.rocket_name}</th>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
