import deliverymanImage from '../../assets/confirmedPaymentIllustration.png';
import { ContainerBox } from '../../styles/container';
import { useParams } from 'react-router-dom';
import {
  OrderDetailsArea,
  LeftDiv,
  AddressDetails,
  DeliveryTimeDetails,
  PaymentDetails,
  MainContainer,
} from './styles';
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { ShoppingContext } from '../../contexts/ShoppingContext';

const paymentMethodsTranscript = {
  debitCard: 'Cartão de débito',
  creditCard: 'Cartão de crédito',
  money: 'Dinheiro',
};

export function Order() {
  const { id } = useParams();

  const { orders } = useContext(ShoppingContext);

  const order = orders.find((order) => order.orderId === id);

  return (
    <MainContainer>
      <ContainerBox>
        {order ? (
          <>
            {' '}
            <LeftDiv>
              <h2>Uhu! Pedido confirmado</h2>
              <p>Agora é só aguardar que logo o café chegará até você</p>

              <OrderDetailsArea>
                <AddressDetails>
                  <div className="icon">
                    <MapPin size={16} weight="fill" />
                  </div>

                  <div className="text">
                    <p>
                      Entrega em <strong>{order.street}</strong>,
                      {order?.numberHome}
                    </p>

                    <span>
                      {order.neighborhood} - {order.city}, {order.uf}
                    </span>
                  </div>
                </AddressDetails>

                <DeliveryTimeDetails>
                  <div className="icon">
                    <Timer size={16} weight="fill" />
                  </div>

                  <div className="text">
                    <p>Previsão de entrega</p>

                    <strong>20 min - 30 min</strong>
                  </div>
                </DeliveryTimeDetails>

                <PaymentDetails>
                  <div className="icon">
                    <CurrencyDollar size={16} weight="fill" />
                  </div>

                  <div className="text">
                    <p>Pagamento na entrega</p>

                    <strong>
                      {paymentMethodsTranscript[order.paymentMethod]}
                    </strong>
                  </div>
                </PaymentDetails>
              </OrderDetailsArea>
            </LeftDiv>
            <img src={deliverymanImage} alt="" />
          </>
        ) : (
          <div>Error! There`s any other with ID: "{id}"</div>
        )}
      </ContainerBox>
    </MainContainer>
  );
}
