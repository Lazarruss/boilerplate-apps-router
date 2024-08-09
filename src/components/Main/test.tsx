import { render } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the rending', () => {
    render(<Main />)

    // expect(('heading', {name: /react avançado/i})).toBeInTheDocument()
  })
})
