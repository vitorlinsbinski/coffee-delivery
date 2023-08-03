import { CounterContainer } from './styles';

import { Minus, Plus } from 'phosphor-react';

interface CounterProps {
  quantity: number;
  onAddQuantityClick: () => void;
  onRemoveQuantityClick: () => void;
}

export function Counter({
  quantity,
  onAddQuantityClick,
  onRemoveQuantityClick,
}: CounterProps) {
  return (
    <CounterContainer>
      <Minus size={14} weight="bold" onClick={onRemoveQuantityClick} />
      <span>{quantity}</span>
      <Plus size={14} weight="bold" onClick={onAddQuantityClick} />
    </CounterContainer>
  );
}
