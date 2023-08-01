import { useSelector } from 'react-redux';
import classes from './MyProfile.module.css';

function MyProfile() {
  const { missions } = useSelector((state) => state.miss);

  const reservedMission = missions.filter(
    (mission) => mission.missionStatus === true,
  );

  return (
    <div className={classes.container}>
      <div className={classes.containMission}>
        <h2 className={classes.headText}>My Missions</h2>
        <ul className={classes.missions}>
          {reservedMission.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className={classes.containMission}>
        <h2 className={classes.headText}>My Rockets</h2>
        <ul className={classes.missions}>
          <li>Telstar</li>
          <li>Telstar</li>
          <li>Telstar</li>
          <li>Telstar</li>
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
