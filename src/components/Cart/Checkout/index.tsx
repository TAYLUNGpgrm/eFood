import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'

import Button from '../../Button'
import * as S from './styles'

// Definimos o tipo dos dados para facilitar a integração
export type CheckoutValues = {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement?: string
}

type Props = {
  onBack: () => void
  onConfirm: (values: CheckoutValues) => void // Agora recebe os valores
}

const Checkout = ({ onBack, onConfirm }: Props) => {
  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().min(5, 'Nome muito curto').required('Obrigatório'),
      address: Yup.string().required('Obrigatório'),
      city: Yup.string().required('Obrigatório'),
      zipCode: Yup.string().min(9, 'CEP inválido').required('Obrigatório'),
      number: Yup.string().required('Obrigatório')
    }),
    onSubmit: (values) => {
      onConfirm(values) // Envia os dados coletados para o componente pai
    }
  })

  const checkInputHasError = (fieldName: string) => {
    return fieldName in form.touched && fieldName in form.errors
  }

  return (
    <S.CheckoutContainer>
      <h3>Entrega</h3>
      <form onSubmit={form.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input
            id="receiver"
            name="receiver"
            type="text"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver}
            className={checkInputHasError('receiver') ? 'error' : ''}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.address}
            className={checkInputHasError('address') ? 'error' : ''}
          />
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.city}
            className={checkInputHasError('city') ? 'error' : ''}
          />
        </S.InputGroup>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <IMaskInput
              id="zipCode"
              name="zipCode"
              mask="00000-000"
              onAccept={(value: string) => form.setFieldValue('zipCode', value)}
              onBlur={form.handleBlur}
              value={form.values.zipCode}
              className={checkInputHasError('zipCode') ? 'error' : ''}
            />
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input
              id="number"
              name="number"
              type="text"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.number}
              className={checkInputHasError('number') ? 'error' : ''}
            />
          </S.InputGroup>
        </S.Row>

        <S.InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            id="complement"
            name="complement"
            type="text"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.complement}
          />
        </S.InputGroup>

        <S.ButtonContainer>
          <Button
            type="submit"
            variant="secondary"
            title="Clique para continuar com o pagamento"
          >
            Continuar com o pagamento
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={onBack}
            title="Voltar para o carrinho"
          >
            Voltar para o carrinho
          </Button>
        </S.ButtonContainer>
      </form>
    </S.CheckoutContainer>
  )
}

export default Checkout
