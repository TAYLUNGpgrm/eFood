import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'

import Button from '../../Button'
import * as S from './styles'

type Props = {
  onBack: () => void
  onConfirm: () => void
}

const Payment = ({ onBack, onConfirm }: Props) => {
  const form = useFormik({
    initialValues: {
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardOwner: Yup.string().required('Obrigatório'),
      cardNumber: Yup.string().required('Obrigatório'),
      cardCode: Yup.string().length(3, 'CVC inválido').required('Obrigatório'),
      expiresMonth: Yup.string().required('Obrigatório'),
      expiresYear: Yup.string().required('Obrigatório')
    }),
    onSubmit: () => {
      onConfirm()
    }
  })

  const checkInputHasError = (fieldName: string) => {
    return fieldName in form.touched && fieldName in form.errors
  }

  return (
    <S.CheckoutContainer>
      <h3>
        Pagamento - Valor a pagar{' '}
        {/* Aqui você pode passar o valor total real */}
      </h3>
      <form onSubmit={form.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="cardOwner">Nome no cartão</label>
          <input
            id="cardOwner"
            name="cardOwner"
            type="text"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.cardOwner}
            className={checkInputHasError('cardOwner') ? 'error' : ''}
          />
        </S.InputGroup>

        <S.Row>
          <S.InputGroup style={{ flex: 3 }}>
            <label htmlFor="cardNumber">Número do cartão</label>
            <IMaskInput
              id="cardNumber"
              name="cardNumber"
              mask="0000 0000 0000 0000"
              onAccept={(value: string) =>
                form.setFieldValue('cardNumber', value)
              }
              onBlur={form.handleBlur}
              value={form.values.cardNumber}
              className={checkInputHasError('cardNumber') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup style={{ flex: 1 }}>
            <label htmlFor="cardCode">CVV</label>
            <IMaskInput
              id="cardCode"
              name="cardCode"
              mask="000"
              onAccept={(value: string) =>
                form.setFieldValue('cardCode', value)
              }
              onBlur={form.handleBlur}
              value={form.values.cardCode}
              className={checkInputHasError('cardCode') ? 'error' : ''}
            />
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <IMaskInput
              id="expiresMonth"
              name="expiresMonth"
              mask="00"
              onAccept={(value: string) =>
                form.setFieldValue('expiresMonth', value)
              }
              onBlur={form.handleBlur}
              value={form.values.expiresMonth}
              className={checkInputHasError('expiresMonth') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <IMaskInput
              id="expiresYear"
              name="expiresYear"
              mask="00"
              onAccept={(value: string) =>
                form.setFieldValue('expiresYear', value)
              }
              onBlur={form.handleBlur}
              value={form.values.expiresYear}
              className={checkInputHasError('expiresYear') ? 'error' : ''}
            />
          </S.InputGroup>
        </S.Row>

        <S.ButtonContainer>
          <Button
            variant="secondary"
            type="submit"
            title="Clique para finalizar o pagamento"
          >
            Finalizar pagamento
          </Button>
          <Button
            variant="secondary"
            type="button"
            title="Clique para voltar ao endereço"
            onClick={onBack}
          >
            Voltar para a edição de endereço
          </Button>
        </S.ButtonContainer>
      </form>
    </S.CheckoutContainer>
  )
}

export default Payment
