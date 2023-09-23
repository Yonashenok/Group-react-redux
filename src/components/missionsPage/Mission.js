import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { toggleMission } from '../../redux/missions/missionSlice';
import classes from './Mission.module.css';

export function TableRow({
  missionName,
  missionDescription,
  missionStatus,
  missionId,
  dispatch,
}) {
  return (
    <tr className={classes.missionDetails}>
      <td data-testid="mission-name" className={classes.missionTitle}>
        {missionName}
      </td>
      <td className={classes.tableText}>{missionDescription}</td>
      <td>
        <button
          className={missionStatus ? classes.activeMember : classes.memberBtn}
          type="button"
        >
          {missionStatus ? 'Active Member' : 'NOT A MEMBER'}
        </button>
      </td>
      <td>
        <button
          className={missionStatus ? classes.leaveMission : classes.joinBtn}
          type="button"
          onClick={() => dispatch(toggleMission(missionId))}
        >
          {missionStatus ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
}

function Mission() {
  const { missions } = useSelector((state) => state.miss);
  // const isMission = missions.length >= 0;

  const dispatch = useDispatch();

  return (
    <div data-testid="listTable" className={classes.container}>
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
          {missions.map((mission) => (
            <TableRow
              key={mission.mission_id}
              dispatch={dispatch}
              missionName={mission.mission_name}
              missionDescription={mission.description}
              missionStatus={mission.missionStatus}
              missionId={mission.mission_id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

TableRow.defaultProps = {
  missionName: '',
  missionDescription: '',
  missionStatus: false,
  missionId: '',
  dispatch: () => {},
};

TableRow.propTypes = {
  dispatch: propTypes.func,
  missionName: propTypes.string,
  missionStatus: propTypes.bool,
  missionId: propTypes.string,
  missionDescription: propTypes.string,
};

export default Mission;
