import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import DisplayMissions from '../components/displayMissions';

describe('MissionDisplay', () => {
  test('Builds the snapchot of the displayMission component safely', () => {
    const displayMission = renderer.create(<Router><DisplayMissions /></Router>).toJSON();
    expect(displayMission).toMatchSnapshot();
  });

  test('renders DisplayMission component', () => {
    render(<Router><DisplayMissions /></Router>);

    screen.getByRole('component');
  });
});