import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Treino } from '../shared/models/treino.model';
import { SupabaseService } from '../services/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class TreinosStore {

  private treinosSubject = new BehaviorSubject<Treino[]>([]);
  treinos$ = this.treinosSubject.asObservable();

  readonly tipos = [
    {
      nome: 'Peito e Costas',
      exercicios: [
        '1- Pac Deck - SUPERSET',
        '2- Incline Press',
        '1- Nautilus Pullover - SUPERSERT',
        '2- The Close Grip Palms Up PullDown',
        '3- Deadlift',
      ],
    },
    {
      nome: 'Pernas',
      exercicios: [
        '1- Leg Extension - SUPERSET',
        '2- Leg Press',
        '3- Leg Curls',
        '4- Gemeos + Estáticos',
      ],
    },
    {
      nome: 'Ombros, Bicep e Tricep',
      exercicios: [
        '1- Ombros Lateral',
        '2- Ombros Posterior',
        '3- Bicep Straight Barbell Curl',
        '4- Tricep com barra - Superset',
        '5- Dips',
      ],
    },
    {
      nome: 'Pernas c/Squats',
      exercicios: [
        '1- Leg Extension Estaticos - Superset',
        '2- Squats',
        'Hip thrust',
        'Gémeos',
      ],
    },
  ];

  constructor(private supabase: SupabaseService) {
    this.loadTreinos();
  }

  // -------------------------
  // CARREGAR TREINOS DO SUPABASE
  // -------------------------
  async loadTreinos() {
    const user = await this.supabase.getUser();
    if (!user) return;

    const data = await this.supabase.getTreinos();

    const treinosDoUser = data.filter((t: Treino) => t.user_id === user.id);

    this.treinosSubject.next(treinosDoUser);
  }

  // -------------------------
  // ADICIONAR TREINO
  // -------------------------
  async addTreino(treino: Omit<Treino, 'id' | 'user_id'>) {
    const user = await this.supabase.getUser();
    if (!user) return;

    const novoTreino = {
      ...treino,
      user_id: user.id,
    };

    const data = await this.supabase.addTreino(novoTreino);

    this.treinosSubject.next([data, ...this.treinosSubject.value]);
  }

  // -------------------------
  // APAGAR TREINO
  // -------------------------
  async deleteTreino(id: string) {
    await this.supabase.deleteTreino(id);

    const atual = this.treinosSubject.value.filter(t => t.id !== id);
    this.treinosSubject.next(atual);
  }

  // -------------------------
  // ATUALIZAR TREINO
  // -------------------------
  async updateTreino(treino: Treino) {
    const data = await this.supabase.updateTreino(treino);

    const atual = this.treinosSubject.value.map(t =>
      t.id === treino.id ? data : t
    );

    this.treinosSubject.next(atual);
  }

  // -------------------------
  // GETTERS
  // -------------------------
  getTipos() {
    return this.tipos;
  }

  getExerciciosPorTipo(tipo: string): string[] {
    return this.tipos.find((t) => t.nome === tipo)?.exercicios ?? [];
  }

  getTreinoById(id: string): Treino | undefined {
    return this.treinosSubject.value.find(t => t.id === id);
  }
}
