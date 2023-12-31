import { useSelector } from 'react-redux';
import classes from './MyProfile.module.css';

function MyProfile() {
  const { missions } = useSelector((state) => state.miss);
  const { rockets } = useSelector((state) => state.rocket);

  const reservedMission = missions.filter(
    (mission) => mission.missionStatus === true,
  );
  const reservedRocketList = rockets.filter(
    (reservedRocket) => reservedRocket.rocketStatus === true,
  );

  return (
    <div className={classes.container}>
      <div className={classes.containMission}>
        <h2 data-testid="mission title" className={classes.headText}>
          My Missions
        </h2>
        <ul className={classes.missions}>
          {reservedMission.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className={classes.containMission}>
        <h2 data-testid="rocket title" className={classes.headText}>
          My Rockets
        </h2>
        <ul className={classes.missions}>
          {reservedRocketList.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
