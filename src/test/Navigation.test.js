import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from '../components/Navigation';

it('Builds the snapchot of the navbar component safely', () => {
  const three = renderer
    .create(
      <Router>
        <Navigation />
      </Router>,
    )
    .toJSON();
  expect(three).toMatchSnapshot();
});
