import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the rending', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()
  })
})
