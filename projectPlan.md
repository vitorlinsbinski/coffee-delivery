## Formato de dado do produto em catálogo:

```
const produtos = [
    {
        id: string,
        tags: string[],
        name: string,
        details: string,
        price: number,
        imgPath: string
    }
]

```

## Formato do dado do produto no carrinho:

```
const productsInCart = [
    {
        id: string,
        price: number,
        quantity: number
    }
]

```

## Formato dos dados do formulário:

```
    {
        cep: number,
        street: string,
        number: number,
        complement?: string,
        bairro: string,
        cidade: string,
        uf: string
    }

```
