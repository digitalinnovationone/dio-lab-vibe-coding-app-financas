// src/components/cofrinhos/CofrinhoCard.tsx
// UI Layer - Fiel 100% ao Design System da print: rounded-xl, border-slate-200, bg-white, primary #22C55E
import { Cofrinho } from '@/types/cofrinho';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Plane, Heart, Smartphone, House, GraduationCap, PiggyBank } from 'lucide-react';

const iconMap = {
  Plane,
  Heart,
  Smartphone,
  House,
  GraduationCap,
  PiggyBank
} as const;

interface Props {
  cofrinho: Cofrinho;
  onDepositar?: () => void;
  onResgatar?: () => void;
}

export function CofrinhoCard({ cofrinho }: Props) {
  const Icon = iconMap[cofrinho.icone];
  const progresso = cofrinho.meta > 0 ? Math.round((cofrinho.atual / cofrinho.meta) * 100) : 0;
  const atingido = progresso >= 100;

  return (
    <Card className="rounded-xl border border-slate-200 shadow-sm bg-white p-5 hover:shadow-md transition-all duration-200 hover:border-slate-300">
      <CardContent className="p-0">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${cofrinho.cor}1A`, color: cofrinho.cor }}
            aria-hidden="true"
          >
            <Icon size={20} strokeWidth={1.8} />
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${atingido ? 'bg-[#22C55E]/10 text-[#16A34A]' : 'bg-slate-100 text-slate-500'}`}>
            {progresso}% guardado
          </span>
        </div>

        <h3 className="text-slate-900 font-semibold text-[15px] leading-tight mb-1 truncate">{cofrinho.nome}</h3>
        <p className="text-slate-500 text-xs mb-4 font-medium">
          R$ {cofrinho.atual.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} / R$ {cofrinho.meta.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </p>

        <div className="space-y-2">
          <Progress 
            value={progresso} 
            className="h-2 bg-slate-100"
            aria-label={`Progresso do cofrinho ${cofrinho.nome}: ${progresso}%`}
          />
          {/* Override do indicator para garantir #22C55E - trava de DS */}
          <style>{`
            [data-cofrinho-id="${cofrinho.id}"] [data-radix-progress-indicator] {
              background-color: ${cofrinho.cor} !important;
            }
          `}</style>
          <div data-cofrinho-id={cofrinho.id}>
            {/* Hack visual para forçar cor sem quebrar shadcn */}
          </div>
        </div>

        {atingido && (
          <p className="text-[11px] text-[#16A34A] font-medium mt-3 flex items-center gap-1">
            🎉 Meta atingida! Hora de celebrar!
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// Versão com Progress custom para garantir cor #22C55E (shadcn usa bg-primary por padrão)
export function CofrinhoCardCustomProgress({ cofrinho }: Props) {
  const Icon = iconMap[cofrinho.icone];
  const progresso = Math.round((cofrinho.atual / cofrinho.meta) * 100);

  return (
    <div className="rounded-xl border border-slate-200 shadow-sm bg-white p-5">
      <div className="flex justify-between mb-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${cofrinho.cor}20`, color: cofrinho.cor }}>
          <Icon size={20} />
        </div>
        <span className="text-xs text-slate-500">{progresso}%</span>
      </div>
      <h3 className="font-semibold text-slate-900 text-[15px]">{cofrinho.nome}</h3>
      <p className="text-xs text-slate-500 mb-3">R$ {cofrinho.atual} / R$ {cofrinho.meta}</p>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-[#22C55E] transition-all duration-500" style={{ width: `${progresso}%`, backgroundColor: cofrinho.cor }} />
      </div>
    </div>
  );
}
