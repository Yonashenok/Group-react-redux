import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import store from '../redux/store';
import MyProfile from '../pages/MyProfile';

const mockStore = configureStore([]);

describe('Test on MyProfile', () => {
  test('should display the title profile', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    const missionsTitle = screen.queryByTestId('mission title');
    const rocketsTitle = screen.queryByTestId('rocket title');

    expect(missionsTitle).toBeDefined();
    expect(rocketsTitle).toBeDefined();
  });

  test('should the filter of mission and rocket', () => {
    const mockRockets = [
      { id: '1', name: 'Rocket 1', rocketStatus: true },
      { id: '2', name: 'Rocket 2', rocketStatus: false },
    ];

    const mockMissions = [
      { id: '1', name: 'Mission 1', missionStatus: true },
      { id: '2', name: 'Mission 2', missionStatus: false },
    ];

    const store = mockStore({
      rocket: { rockets: mockRockets },
      miss: { missions: mockMissions },
    });

    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    const joinedMission = screen.queryByText('Mission 1');
    expect(joinedMission).toBeDefined();

    const reservedRocket = screen.getByText(/Rocket 1/i);
    expect(reservedRocket).toBeDefined();

    const notJoinedMission = screen.queryByText('Mission ');
    expect(notJoinedMission).toBeNull();

    const notReservedRocket = screen.queryByText('Rocket');
    expect(notReservedRocket).toBeNull();
  });
});
