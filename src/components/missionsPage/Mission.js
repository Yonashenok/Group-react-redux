import { useDispatch, useSelector } from 'react-redux';
import { toggleMission } from '../../redux/missions/missionSlice';
import classes from './Mission.module.css';

function Mission() {
  const { missions } = useSelector((state) => state.miss);
  const isMission = missions.length >= 0;

  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <table className={classes.tableContainer}>
        <thead>
          <tr className={classes.theadContainer}>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{false}</th>
          </tr>
        </thead>
        <tbody>
          {isMission
            && missions.map((mission) => (
              <tr className={classes.missionDetails} key={mission.mission_id}>
                <td className={classes.missionTitle}>{mission.mission_name}</td>
                <td className={classes.tableText}>{mission.description}</td>
                <td>
                  <button
                    className={
                      mission.missionStatus
                        ? classes.activeMember
                        : classes.memberBtn
                    }
                    type="button"
                  >
                    {mission.missionStatus ? 'Active Member' : 'NOT A MEMBER'}
                  </button>
                </td>
                <td>
                  <button
                    className={
                      mission.missionStatus
                        ? classes.leaveMission
                        : classes.joinBtn
                    }
                    type="button"
                    onClick={() => dispatch(toggleMission(mission.mission_id))}
                  >
                    {mission.missionStatus ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Mission;
