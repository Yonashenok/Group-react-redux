import { render, screen } from '@testing-library/react';

const MyProfile = () => <>MyProfile</>;

test('should display the nav text profile', () => {
  render(<MyProfile />);
  screen.debug();
});
