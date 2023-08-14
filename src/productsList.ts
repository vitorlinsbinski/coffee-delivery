import { v4 as uuidv4 } from 'uuid';

import typeExpressoImg from './assets/type-expresso.png';
import typeExpressoAmericanoImg from './assets/type-expresso-americano.png';
import typeExpressoCremosoImg from './assets/type-expresso-cremoso.png';
import typeExpressoGeladoImg from './assets/type-expresso-gelado.png';
import typeCafeComLeiteImg from './assets/type-cafe-com-leite.png';
import typeLatteImg from './assets/type-latte.png';
import typeCapuccinoImg from './assets/type-capuccino.png';
import typeMacchiatoImg from './assets/type-macchiato.png';
import typeMocaccinoImg from './assets/type-mocaccino.png';
import typeChocolateQuenteImg from './assets/type-chocolate-quente.png';
import typeCubanoImg from './assets/type-cubano.png';
import typeAmericanoImg from './assets/type-americano.png';
import typeArabeImg from './assets/type-arabe.png';
import typeAlcoolicoImg from './assets/type-alcoolico.png';

export const productsList = [
  {
    id: uuidv4(),
    imgPath: typeExpressoImg,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    details: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeExpressoAmericanoImg,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    details: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeExpressoCremosoImg,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    details: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeExpressoGeladoImg,
    tags: ['tradicional'],
    name: 'Expresso Gelado',
    details: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeCafeComLeiteImg,
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    details: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeLatteImg,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    details: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeCapuccinoImg,
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    details: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeMacchiatoImg,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    details: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeMocaccinoImg,
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    details: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeChocolateQuenteImg,
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    details: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeCubanoImg,
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    details: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeAmericanoImg,
    tags: ['especial'],
    name: 'Havaiano',
    details: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeArabeImg,
    tags: ['especial'],
    name: 'Árabe',
    details: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },

  {
    id: uuidv4(),
    imgPath: typeAlcoolicoImg,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    details: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
];
