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

import { productsList } from '../../productsList';

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

                <span>Entrega rápida e rastreada</span>
              </FeatureList>

              <FeatureList>
                <IconList $background={defaultTheme.purple}>
                  <Coffee size={16} weight="fill" />
                </IconList>

                <span>O café chega fresquinho até você</span>
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
            {productsList.map((product) => (
              <CatalogProduct key={product.id} product={product} />
            ))}
          </CoffeeList>
        </ContainerBox>
      </CoffeeListSection>
    </main>
  );
}
