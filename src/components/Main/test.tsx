import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the rending', () => {
    // renderiza o componentes
    const { container } = render(<Main />)
    // Busca a existência do elemento e sua verificação
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  // gerar snapshot
})
