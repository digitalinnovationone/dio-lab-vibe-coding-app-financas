// src/hooks/useCofrinhos.ts
// Application Layer - Clean Architecture: use case isolado, sem acoplamento com UI
import { useState, useEffect } from 'react';
import { Cofrinho, NovoCofrinhoDTO } from '@/types/cofrinho';

const STORAGE_KEY = 'smart_pockets_v1';

export function useCofrinhos() {
  const [cofrinhos, setCofrinhos] = useState<Cofrinho[]>(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cofrinhos));
  }, [cofrinhos]);

  const criar = (dto: NovoCofrinhoDTO) => {
    const novo: Cofrinho = {
      id: crypto.randomUUID(),
      ...dto,
      atual: 0,
      createdAt: new Date().toISOString(),
    };
    setCofrinhos(prev => [...prev, novo]);
  };

  /**
   * Use Case: ALLOCATE_SAVING
   * Integração com o chat de linguagem natural
   * Ex: "guardei R$50 para viagem" | "guardar 20 para casa" | "guarde R$30,50 para emergencia"
   */
  const alocarPorChat = (mensagem: string): { sucesso: boolean; nome?: string; valor?: number; cofrinhoId?: string } => {
    const normalized = mensagem.toLowerCase();
    // Regex robusto para PT-BR com R$, vírgula, etc.
    const regex = /(?:guardei|guarde|guardar|poupar|poupei)\s*(?:r\$\s*)?(\d+[.,]?\d*)\s*(?:para|no|na|em)?\s*([a-zà-ú\s]+)/i;
    const match = normalized.match(regex);

    if (!match) return { sucesso: false };

    const valorStr = match[1].replace(',', '.');
    const valor = parseFloat(valorStr);
    const termoBusca = match[2].trim().replace(/[!?.]/g, '');

    if (isNaN(valor) || valor <= 0) return { sucesso: false };

    // Busca parcial: "viagem" encontra "Viagem Europa"
    const cofrinho = cofrinhos.find(c => 
      c.nome.toLowerCase().includes(termoBusca) || 
      termoBusca.includes(c.nome.toLowerCase().split(' ')[0])
    );

    if (!cofrinho) return { sucesso: false };

    // Invariante DDD: atual <= meta
    setCofrinhos(prev => prev.map(c =>
      c.id === cofrinho.id ? { ...c, atual: Math.min(c.atual + valor, c.meta) } : c
    ));

    return { sucesso: true, nome: cofrinho.nome, valor, cofrinhoId: cofrinho.id };
  };

  const depositar = (id: string, valor: number) => {
    setCofrinhos(prev => prev.map(c =>
      c.id === id ? { ...c, atual: Math.min(c.atual + valor, c.meta) } : c
    ));
  };

  const resgatar = (id: string, valor: number) => {
    setCofrinhos(prev => prev.map(c =>
      c.id === id ? { ...c, atual: Math.max(0, c.atual - valor) } : c
    ));
  };

  const remover = (id: string) => setCofrinhos(prev => prev.filter(c => c.id !== id));

  const progressoGeral = cofrinhos.length > 0 
    ? Math.round((cofrinhos.reduce((acc, c) => acc + c.atual, 0) / cofrinhos.reduce((acc, c) => acc + c.meta, 0)) * 100)
    : 0;

  return { cofrinhos, criar, alocarPorChat, depositar, resgatar, remover, progressoGeral };
}
