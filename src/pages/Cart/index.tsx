import {
  OrderDataArea,
  OrderReviewArea,
  MainFormArea,
  Products,
  ReviewPrice,
  TotalItensPrice,
  DeliveryPrice,
  TotalPrice,
  ReviewCard,
  ConfirmationButton,
} from './styles';

import { ContainerBox } from '../../styles/container';

import { AddressCard } from './AddressCard';
import { PaymentSelection } from './PaymentSelection';
import { CartProduct } from './CartProduct';
import { useContext } from 'react';
import { ShoppingContext } from '../../contexts/ShoppingContext';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { useNavigate } from 'react-router-dom';

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe um CEP válido'),
  street: zod.string().min(8),
  numberHome: zod.string().min(1),
  neighborhood: zod.string().min(1, 'Informe um bairro válido'),
  city: zod.string().min(1, "Informe uma cidade 'válida"),
  uf: zod.string().min(2, 'Informe UF válido'),
});

type newOrderFormData = zod.infer<typeof newOrderFormValidationSchema>;

export function Cart() {
  const { productsInCart, paymentMethod, createNewOrder } =
    useContext(ShoppingContext);

  const navigate = useNavigate();

  const deliveryTax = 3.5;

  const totalItensPrice = productsInCart.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);

  const newOrderForm = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  });

  const { handleSubmit, watch } = newOrderForm;

  const isButtonDisable =
    productsInCart.length === 0 ||
    !watch('cep') ||
    !watch('street') ||
    !watch('numberHome') ||
    !watch('neighborhood') ||
    !watch('city') ||
    !watch('uf') ||
    !paymentMethod;

  function handleCreateNewOrder(data: newOrderFormData) {
    if (productsInCart.length > 0) {
      const orderId = new Date().toISOString();
      const orderData = {
        orderId,
        ...data,
        paymentMethod: paymentMethod,
        products: productsInCart,
      };

      createNewOrder(orderData);

      navigate(`/coffee-delivery/order/${orderId}`);
    }
  }

  return (
    <MainFormArea>
      <ContainerBox>
        <form action="" onSubmit={handleSubmit(handleCreateNewOrder)}>
          <FormProvider {...newOrderForm}>
            <OrderDataArea>
              <h3>Complete seu pedido</h3>
              <AddressCard />
              <PaymentSelection />
            </OrderDataArea>
          </FormProvider>

          <OrderReviewArea>
            <h3>Cafés selecionados</h3>

            <ReviewCard>
              <Products>
                {productsInCart &&
                  productsInCart.map((product) => (
                    <CartProduct key={product.id} product={product} />
                  ))}
              </Products>

              <ReviewPrice>
                <TotalItensPrice>
                  <p>Total de itens</p>
                  <span>
                    R$ {totalItensPrice.toFixed(2).toString().replace('.', ',')}
                  </span>
                </TotalItensPrice>

                <DeliveryPrice>
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </DeliveryPrice>

                <TotalPrice>
                  <p>Total</p>
                  <span>
                    R${' '}
                    {(totalItensPrice + deliveryTax)
                      .toFixed(2)
                      .toString()
                      .replace('.', ',')}
                  </span>
                </TotalPrice>
              </ReviewPrice>

              <ConfirmationButton type="submit" disabled={isButtonDisable}>
                CONFIRMAR PEDIDO
              </ConfirmationButton>
            </ReviewCard>
          </OrderReviewArea>
        </form>
      </ContainerBox>
    </MainFormArea>
  );
}
