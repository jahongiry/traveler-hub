import { render, screen } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import DisplayMissions from '../components/displayMissions';

describe('MissionDisplay', () => {
  test('Builds the snapchot of the displayMission component safely', () => {
    const displayMission = renderer.create(<DisplayMissions />);
    expect(displayMission.toJSON()).toMatchSnapshot();
  });

  test('renders DisplayMission component', () => {
    render(<DisplayMissions />);

    screen.getByRole('component');
  });
});
