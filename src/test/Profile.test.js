import { render } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Profile from '../components/Profile';

describe('MissionDisplay', () => {
  test('Builds the snapchot of the Profile component safely', () => {
    const displayMission = renderer.create(<Profile />);
    expect(displayMission.toJSON()).toMatchSnapshot();
  });

  test('renders Profile component', () => {
    render(<Profile />);
  });
});
