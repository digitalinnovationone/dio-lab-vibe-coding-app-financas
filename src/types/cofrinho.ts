// src/types/cofrinho.ts
// Domain Model - DDD: Aggregate Root Cofrinho

export type CofrinhoCor = '#22C55E' | '#3B82F6' | '#F59E0B' | '#8B5CF6' | '#EC4899';
export type CofrinhoIcone = 'Plane' | 'Heart' | 'Smartphone' | 'House' | 'GraduationCap' | 'PiggyBank';

export interface Cofrinho {
  id: string;
  nome: string;
  meta: number;
  atual: number;
  cor: CofrinhoCor;
  icone: CofrinhoIcone;
  createdAt: string;
  desafioAtivo?: boolean;
}

export interface NovoCofrinhoDTO {
  nome: string;
  meta: number;
  cor: CofrinhoCor;
  icone: CofrinhoIcone;
}

export const COFRINHO_CORES: { value: CofrinhoCor; label: string }[] = [
  { value: '#22C55E', label: 'Verde (primary)' },
  { value: '#3B82F6', label: 'Azul' },
  { value: '#F59E0B', label: 'Amarelo' },
  { value: '#8B5CF6', label: 'Roxo' },
  { value: '#EC4899', label: 'Rosa' },
];

export const COFRINHO_ICONES: { value: CofrinhoIcone; label: string }[] = [
  { value: 'Plane', label: 'Viagem' },
  { value: 'PiggyBank', label: 'Cofrinho' },
  { value: 'House', label: 'Casa' },
  { value: 'Smartphone', label: 'Celular' },
  { value: 'GraduationCap', label: 'Estudos' },
  { value: 'Heart', label: 'Reserva' },
];
