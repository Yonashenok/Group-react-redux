import { render, screen } from "@testing-library/react";

const RocketPage = () => <>Rockets</>;

test("should display the nav text Rockets", () => {
  render(<RocketPage />);
  screen.debug();
});
