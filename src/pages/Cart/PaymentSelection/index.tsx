import { useContext } from 'react';
import { PaymentContainer, SelectorArea, Selector } from './styles';

import { CurrencyDollarSimple, CreditCard } from 'phosphor-react';
import { ShoppingContext } from '../../../contexts/ShoppingContext';

export function PaymentSelection() {
  const { selectPaymentMethod, paymentMethod } = useContext(ShoppingContext);

  function handleSetCreditCardMethod() {
    selectPaymentMethod('creditCard');
  }

  function handleSetDebitCardMethod() {
    selectPaymentMethod('debitCard');
  }

  function handleSetMoneyMethod() {
    selectPaymentMethod('money');
  }

  return (
    <PaymentContainer>
      <header>
        <div className="icon">
          <CurrencyDollarSimple size={22} />
        </div>

        <div className="text">
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </header>

      <SelectorArea>
        <Selector
          onClick={handleSetCreditCardMethod}
          $isSelected={paymentMethod === 'creditCard'}
        >
          <div>
            <CreditCard size={16} />
          </div>

          <span>CARTÃO DE CRÉDITO</span>
        </Selector>

        <Selector
          onClick={handleSetDebitCardMethod}
          $isSelected={paymentMethod === 'debitCard'}
        >
          <div>
            <CreditCard size={16} />
          </div>

          <span>CARTÃO DE DÉBITO</span>
        </Selector>

        <Selector
          onClick={handleSetMoneyMethod}
          $isSelected={paymentMethod === 'money'}
        >
          <div>
            <CreditCard size={16} />
          </div>

          <span>DINHEIRO</span>
        </Selector>
      </SelectorArea>
    </PaymentContainer>
  );
}
