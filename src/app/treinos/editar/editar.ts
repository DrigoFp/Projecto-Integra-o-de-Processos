import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreinosStore } from '../treinos-store';
import { Treino } from '../../shared/models/treino.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  templateUrl: './editar.html',
  styleUrls: ['./editar.css'],
  imports: [FormsModule],
})
export class Editar implements OnInit {
  treino!: Treino | undefined;
  mensagem: string = '';

  constructor(
    private route: ActivatedRoute,
    private treinosStore: TreinosStore,
  ) {}

  mostrarMensagem(texto: string) {
    this.mensagem = texto;

    setTimeout(() => {
      this.mensagem = '';
    }, 2500);
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.treino = this.treinosStore.getTreinoById(id);
  }

  guardarData() {
    if (!this.treino) return;

    this.treinosStore.updateTreino(this.treino);
    this.mostrarMensagem('Data atualizada com sucesso');
  }
  
  guardarExercicio(idExercicio: number) {
    if (!this.treino) return;

    const ex = this.treino.exercicios.find((e) => e.id === idExercicio);
    if (!ex) return;

    // Já alteraste ex.repeticoes e ex.peso via ngModel
    this.treinosStore.updateTreino(this.treino);

    this.mostrarMensagem('Exercício guardado');
  }
}
