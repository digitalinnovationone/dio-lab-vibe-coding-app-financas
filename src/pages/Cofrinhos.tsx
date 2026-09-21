// src/pages/Cofrinhos.tsx
import { useCofrinhos } from '@/hooks/useCofrinhos';
import { CofrinhosGrid } from '@/components/cofrinhos/CofrinhosGrid';
import { CofrinhosEmpty } from '@/components/cofrinhos/CofrinhosEmpty';
import { NovoCofrinhoDialog } from '@/components/cofrinhos/NovoCofrinhoDialog';

export default function CofrinhosPage() {
  const { cofrinhos, criar, progressoGeral } = useCofrinhos();

  return (
    <div className="min-h-screen bg-[#F8FBF9] p-4 md:p-6">
      {/* Header idêntico ao "Minhas Metas" da referência */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#22C55E] rounded-full" />
          <h2 className="text-slate-900 font-semibold text-[16px]">Meus Cofrinhos</h2>
          {cofrinhos.length > 0 && (
            <span className="text-xs text-slate-500 bg-white border border-slate-200 rounded-full px-2 py-0.5 ml-2">
              {progressoGeral}% geral
            </span>
          )}
        </div>
        <NovoCofrinhoDialog onCriar={criar} />
      </div>

      {cofrinhos.length === 0 ? <CofrinhosEmpty /> : <CofrinhosGrid cofrinhos={cofrinhos} />}
    </div>
  );
}
