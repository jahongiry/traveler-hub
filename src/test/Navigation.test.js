import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from '../components/Navigation';

describe('Navigation', () => {
  test('Builds the snapchot of the navbar component safely', () => {
    const navbar = renderer.create(<Router><Navigation /></Router>).toJSON();
    expect(navbar).toMatchSnapshot();
  });

  test('renders navbar component', () => {
    render(<Router><Navigation /></Router>);

    screen.getByRole('navigation');
  });
});
