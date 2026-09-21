// src/components/cofrinhos/CofrinhosGrid.tsx
import { Cofrinho } from '@/types/cofrinho';
import { CofrinhoCard } from './CofrinhoCard';

export function CofrinhosGrid({ cofrinhos }: { cofrinhos: Cofrinho[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cofrinhos.map(c => (
        <CofrinhoCard key={c.id} cofrinho={c} />
      ))}
    </div>
  );
}
