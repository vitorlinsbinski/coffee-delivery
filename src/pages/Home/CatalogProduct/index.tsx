import { Card, CoffeeTag, AddCartButton, Price } from './styles';

import { Counter } from '../../../components/Counter';

import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { ShoppingContext } from '../../../contexts/ShoppingContext';

interface ProductType {
  id: string;
  imgPath: string;
  tags: string[];
  name: string;
  details: string;
  price: number;
}

interface CatalogProductProps {
  product: ProductType;
}

export function CatalogProduct({ product }: CatalogProductProps) {
  const { addProductToCart } = useContext(ShoppingContext);

  const [quantity, setQuantity] = useState(1);

  function handleAddNewProductToCart() {
    const newProduct = {
      id: product.id,
      imgPath: product.imgPath,
      name: product.name,
      quantity: quantity,
      price: product.price,
    };

    addProductToCart(newProduct);
  }

  function handleAddQuantityClick() {
    setQuantity((state) => state + 1);
  }

  function handleRemoveQuantityClick() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <Card>
      <img src={product.imgPath} alt="" />
      <ul>
        {product.tags.map((tag) => (
          <CoffeeTag key={tag}>{tag.toUpperCase()}</CoffeeTag>
        ))}
      </ul>
      <h3>{product.name}</h3>
      <p>{product.details}</p>

      <footer>
        <Price>
          R${' '}
          <strong>
            {product.price.toFixed(2).toString().replace('.', ',')}
          </strong>
        </Price>

        <div className="actions">
          <Counter
            quantity={quantity}
            onAddQuantityClick={handleAddQuantityClick}
            onRemoveQuantityClick={handleRemoveQuantityClick}
          />

          <AddCartButton onClick={handleAddNewProductToCart}>
            <ShoppingCart size={20} weight="fill" />
          </AddCartButton>
        </div>
      </footer>
    </Card>
  );
}
