import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' // primary = rosa, secondary = claro
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'link' && to) {
    return (
      <S.ButtonLink to={to} title={title}>
        {children}
      </S.ButtonLink>
    )
  }

  // Se a variante for secondary, usa o estilo de sidebar
  if (variant === 'secondary') {
    return (
      <S.ButtonSidebar
        type={type === 'submit' ? 'submit' : 'button'}
        onClick={onClick}
        title={title}
      >
        {children}
      </S.ButtonSidebar>
    )
  }

  return (
    <S.ButtonContainer
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      title={title}
    >
      {children}
    </S.ButtonContainer>
  )
}

export default Button
