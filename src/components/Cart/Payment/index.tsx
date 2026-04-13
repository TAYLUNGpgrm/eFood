import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../../store'
import { usePurchaseMutation } from '../../../services/api'
import { CheckoutValues } from '../Checkout'
import { parseToBrl } from '../../../utils'

import Button from '../../Button'
import * as S from './styles'

type Props = {
  onBack: () => void
  onConfirm: (orderId: string) => void
  deliveryData: CheckoutValues
}

const Payment = ({ onBack, onConfirm, deliveryData }: Props) => {
  const [purchase, { isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    // Definindo acc como number e item como any para limpar o erro
    return items.reduce((acc: number, item: any) => {
      return acc + item.preco
    }, 0)
  }

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
    onSubmit: async (values) => {
      purchase({
        products: items.map((item: any) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: deliveryData.receiver,
          address: {
            description: deliveryData.address,
            city: deliveryData.city,
            zipCode: deliveryData.zipCode,
            number: Number(deliveryData.number),
            complement: deliveryData.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      }).then((res: any) => {
        if ('data' in res) {
          onConfirm(res.data.orderId)
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    return fieldName in form.touched && fieldName in form.errors
  }

  return (
    <S.CheckoutContainer>
      <h3>Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}</h3>
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
            {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
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
