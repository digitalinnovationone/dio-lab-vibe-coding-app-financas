// src/components/cofrinhos/CofrinhosEmpty.tsx
import { PiggyBank } from 'lucide-react';

export function CofrinhosEmpty() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-12 text-center">
      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <PiggyBank size={28} className="text-slate-400" strokeWidth={1.5} />
      </div>
      <h3 className="text-slate-900 font-medium text-sm mb-1">Você ainda não tem cofrinhos.</h3>
      <p className="text-slate-500 text-xs">Crie um para começar a guardar de forma inteligente!</p>
    </div>
  );
}
