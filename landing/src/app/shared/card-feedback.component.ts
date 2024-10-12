import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-feedback.component.html',
  styleUrl: './card-feedback.component.scss',
})
export class CardFeedbackComponent {
  listItemCardsFeedbacks = input<CardFeedback[]>()
  protected readonly Array = Array;
}

export interface CardFeedback {
  nomeUsuario: string;
  cargo: string;
  image: string;
  avaliacao: number;
  descricao: string;
}
