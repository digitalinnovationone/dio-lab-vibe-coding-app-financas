// src/components/cofrinhos/NovoCofrinhoDialog.tsx
// shadcn/ui travado - NÃO usar div custom
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';
import { CofrinhoCor, CofrinhoIcone, COFRINHO_CORES, COFRINHO_ICONES, NovoCofrinhoDTO } from '@/types/cofrinho';

interface Props {
  onCriar: (dto: NovoCofrinhoDTO) => void;
}

export function NovoCofrinhoDialog({ onCriar }: Props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<NovoCofrinhoDTO>({ nome: '', meta: 0, cor: '#22C55E', icone: 'PiggyBank' });

  const handleSubmit = () => {
    if (!form.nome || form.meta <= 0) return;
    onCriar(form);
    setForm({ nome: '', meta: 0, cor: '#22C55E', icone: 'PiggyBank' });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* TRAVA DE DS: mesma classe do botão Nova Meta da referência */}
        <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-white rounded-lg text-sm font-medium shadow-sm">
          <Plus size={16} className="mr-1" /> Novo Cofrinho
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-slate-900">Criar Cofrinho Inteligente</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label className="text-slate-700">Nome do cofrinho</Label>
            <Input placeholder="Ex: Viagem Europa" value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} className="rounded-lg" />
          </div>
          <div className="space-y-2">
            <Label className="text-slate-700">Meta (R$)</Label>
            <Input type="number" placeholder="500" value={form.meta || ''} onChange={e => setForm({...form, meta: Number(e.target.value)})} className="rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-slate-700">Ícone</Label>
              <Select value={form.icone} onValueChange={(v: CofrinhoIcone) => setForm({...form, icone: v})}>
                <SelectTrigger className="rounded-lg"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {COFRINHO_ICONES.map(i => <SelectItem key={i.value} value={i.value}>{i.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700">Cor</Label>
              <Select value={form.cor} onValueChange={(v: CofrinhoCor) => setForm({...form, cor: v})}>
                <SelectTrigger className="rounded-lg"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {COFRINHO_CORES.map(c => <SelectItem key={c.value} value={c.value}><div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{background: c.value}} />{c.label}</div></SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={handleSubmit} className="w-full bg-[#22C55E] hover:bg-[#16A34A] rounded-lg mt-2">Criar cofrinho</Button>
          <p className="text-[11px] text-slate-500 text-center">Dica: depois diga no chat "guardei R$50 para {form.nome || 'viagem'}"</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
