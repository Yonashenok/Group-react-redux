import { useSelector } from 'react-redux';

function Mission() {
  const { missions } = useSelector((state) => state.miss);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.length >= 0
            && missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td>
                  <button type="button">Active member</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Mission;
