import {
  AddressContainer,
  CepInput,
  StreetInput,
  NumberHomeInput,
  ComplementInput,
  NeighborhoodInput,
  CityInput,
  UfInput,
  ComplementArea,
} from './styles';

import { MapPinLine } from 'phosphor-react';

import { useFormContext } from 'react-hook-form';

export function AddressCard() {
  const { register } = useFormContext();

  return (
    <AddressContainer>
      <header>
        <div className="icon">
          <MapPinLine size={22} />
        </div>
        <div className="text">
          <h4>Endereço de entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>

      <div>
        <CepInput type="text" placeholder="CEP" required {...register('cep')} />
        <StreetInput
          type="text"
          placeholder="Rua"
          required
          {...register('street')}
        />
        <NumberHomeInput
          type="text"
          placeholder="Número"
          required
          {...register('numberHome')}
        />
        <ComplementArea>
          <ComplementInput
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          <span>Opcional</span>
        </ComplementArea>
        <NeighborhoodInput
          type="text"
          placeholder="Bairro"
          {...register('neighborhood')}
        />
        <CityInput
          type="text"
          placeholder="Cidade"
          required
          {...register('city')}
        />
        <UfInput type="text" placeholder="UF" required {...register('uf')} />
      </div>
    </AddressContainer>
  );
}
