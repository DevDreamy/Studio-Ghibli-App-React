import { render, screen } from '@testing-library/react';
import { Home } from '.';
describe('<Home />', () => {
  test('renders filter', () => {
    render(<Home />);
    const filterMovies = screen.getByText(/Filter movies by director/i);
    expect(filterMovies).toBeInTheDocument();
  });
});
