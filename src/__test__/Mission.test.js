import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
// import { user } from '@testing-library/user-event';
import Mission, { TableRow } from '../components/missionsPage/Mission';

describe('Test Mission page', () => {
  it('should display table', () => {
    // render the Component
    const component = render(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    // Manipulate the component or find an element in it
    const table = component.getByTestId('listTable');

    // Assertion
    // what we expect it to do
    expect(table.querySelectorAll('tr').length).toBe(1);
  });

  it('should it display two button', () => {
    // render the Component
    render(<TableRow />);

    // Manipulate the component or find an element in it
    const button = screen.getAllByRole('button');

    // Assertion
    // what we expect it to do
    expect(button).toHaveLength(2);
  });

  it('should it display right data', () => {
    const mockMissionData = {
      mission_id: 1,
      mission_name: 'Mission 1',
      missionStatus: false,
      description: 'Description of Mission',
    };

    // render the Component

    render(
      <TableRow
        missionName={mockMissionData.mission_name}
        missionDescription={mockMissionData.description}
        missionStatus={mockMissionData.missionStatus}
      />,
    );

    // Manipulate the component or find an element in it
    const mission1Name = screen.getAllByText(/Mission 1/i);

    // Assertion
    // what we expect it to do
    expect(mission1Name).toHaveLength(1);
  });
});
