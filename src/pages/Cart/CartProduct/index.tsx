import { ProductContainer, RemoveButton } from './styles';

import { Counter } from '../../../components/Counter';

import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { ShoppingContext } from '../../../contexts/ShoppingContext';

interface ProductType {
  id: string;
  imgPath: string;
  name: string;
  quantity: number;
  price: number;
}

interface ProductProps {
  product: ProductType;
}

export function CartProduct({ product }: ProductProps) {
  const { addQuantity, removeQuantity, removeProductFromCart } =
    useContext(ShoppingContext);

  function onAddQuantityClick() {
    addQuantity(product);
  }

  function onRemoveQuantityClick() {
    removeQuantity(product);
  }

  function handleRemoveProductClick() {
    removeProductFromCart(product.id);
  }

  return (
    <ProductContainer>
      <div className="image">
        <img src={product.imgPath} alt="" />
      </div>

      <div className="actions">
        <h4>{product.name}</h4>

        <div className="buttons">
          <Counter
            onAddQuantityClick={onAddQuantityClick}
            onRemoveQuantityClick={onRemoveQuantityClick}
            quantity={product.quantity}
          />

          <RemoveButton onClick={handleRemoveProductClick}>
            <div>
              <Trash size={16} />
            </div>

            <span>REMOVER</span>
          </RemoveButton>
        </div>
      </div>

      <div className="price">
        <span>R$ {product.price.toFixed(2).toString().replace('.', ',')}</span>
      </div>
    </ProductContainer>
  );
}
