export interface Treino {
  id: string; // uuid vindo do Supabase
  nome: string;
  tipo: string;
  data: string; // Supabase devolve como string ISO
  exercicios: {
    id: number;
    nome: string;
    repeticoes: number;
    peso: number;
  }[];
  user_id: string; // obrigatório no Supabase
  created_at?: string; // opcional, vem do Supabase
}
