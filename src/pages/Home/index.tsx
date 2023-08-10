import {
  HeroBanner,
  IconList,
  FeatureList,
  CoffeeListSection,
  CoffeeList,
} from './styles';

import { ContainerBox } from '../../styles/container';

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';

import { defaultTheme } from '../../styles/themes/default';

import imgHeroBanner from '../../assets/hero-banner-img.png';
import { CatalogProduct } from './CatalogProduct';

import { v4 as uuidv4 } from 'uuid';

const products = [
  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-expresso.png',
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    details: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-expresso-americano.png',
    tags: ['tradicional'],
    name: 'Expresso Americano',
    details: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-expresso-cremoso.png',
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    details: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-expresso-gelado.png',
    tags: ['tradicional'],
    name: 'Expresso Gelado',
    details: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-cafe-com-leite.png',
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    details: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-latte.png',
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    details: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-capuccino.png',
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    details: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-macchiato.png',
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    details: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-mocaccino.png',
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    details: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-chocolate-quente.png',
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    details: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-cubano.png',
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    details: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-americano.png',
    tags: ['especial'],
    name: 'Havaiano',
    details: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-arabe.png',
    tags: ['especial'],
    name: 'Árabe',
    details: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: 'coffee-delivery/assets/type-alcoolico.png',
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    details: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
];

export function Home() {
  return (
    <main>
      <HeroBanner>
        <ContainerBox>
          <div className="text">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul>
              <FeatureList>
                <IconList $background={defaultTheme['yellow-dark']}>
                  <ShoppingCart size={16} weight="fill" />
                </IconList>

                <span>Compra simples e segura</span>
              </FeatureList>

              <FeatureList>
                <IconList $background={defaultTheme['base-text']}>
                  <Package size={16} weight="fill" />
                </IconList>

                <span>Embalagem mantém o café intacto</span>
              </FeatureList>

              <FeatureList>
                <IconList $background={defaultTheme.yellow}>
                  <Timer size={16} weight="fill" />
                </IconList>

                <span>Compra simples e segura</span>
              </FeatureList>

              <FeatureList>
                <IconList $background={defaultTheme.purple}>
                  <Coffee size={16} weight="fill" />
                </IconList>

                <span>Compra simples e segura</span>
              </FeatureList>
            </ul>
          </div>

          <div className="image">
            <img
              src={imgHeroBanner}
              alt="Imagem de um copo de café com a logo 'Coffee Delivery', com um fundo amarelo e grãos de café espalhados, além de uma folha da planta de café"
            />
          </div>
        </ContainerBox>
      </HeroBanner>

      <CoffeeListSection>
        <ContainerBox>
          <h2>Nossos cafés</h2>

          <CoffeeList>
            {products.map((product) => (
              <CatalogProduct key={product.id} product={product} />
            ))}
          </CoffeeList>
        </ContainerBox>
      </CoffeeListSection>
    </main>
  );
}
