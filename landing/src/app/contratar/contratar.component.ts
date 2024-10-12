import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFeedback, CardFeedbackComponent } from '../shared/card-feedback.component';

@Component({
  selector: 'app-contratar',
  standalone: true,
  imports: [CommonModule, CardFeedbackComponent],
  templateUrl: './contratar.component.html',
  styleUrl: './contratar.component.scss',
})
export class ContratarComponent {
  private listaFeedbacks: CardFeedback[] = [
    {
      nomeUsuario: 'Lucas Jesus',
      image: 'https://scontent.fcpq16-1.fna.fbcdn.net/v/t39.30808-6/384756400_6532805303471650_5215351256827022721_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AnSWxTywQVMQ7kNvgERSSKp&_nc_ht=scontent.fcpq16-1.fna&oh=00_AYB-78cH_12Wh2yC4IJvoOiH8kuedzVqbGBR4mYArN9aZw&oe=66DEC0A4',
      descricao: 'Lorem Impes',
      avaliacao: 5.0,
      cargo: 'Desenvolvedor de Software'
    },
    {
      nomeUsuario: 'Lucas Jesus',
      image: 'https://scontent.fcpq16-1.fna.fbcdn.net/v/t39.30808-6/384756400_6532805303471650_5215351256827022721_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AnSWxTywQVMQ7kNvgERSSKp&_nc_ht=scontent.fcpq16-1.fna&oh=00_AYB-78cH_12Wh2yC4IJvoOiH8kuedzVqbGBR4mYArN9aZw&oe=66DEC0A4',
      descricao: 'Lorem Impes',
      avaliacao: 5.0,
      cargo: 'Desenvolvedor de Software'
    },
    {
      nomeUsuario: 'Lucas Jesus',
      image: 'https://scontent.fcpq16-1.fna.fbcdn.net/v/t39.30808-6/384756400_6532805303471650_5215351256827022721_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AnSWxTywQVMQ7kNvgERSSKp&_nc_ht=scontent.fcpq16-1.fna&oh=00_AYB-78cH_12Wh2yC4IJvoOiH8kuedzVqbGBR4mYArN9aZw&oe=66DEC0A4',
      descricao: 'Lorem Impes',
      avaliacao: 5.0,
      cargo: 'Desenvolvedor de Software'
    }
  ]
  listItemCardsFeedbacks = signal<CardFeedback[]>(this.listaFeedbacks)

  pathImage = 'images/imagem-mp.png';

  numeroProjetosConcluidos = 15;
  numeroMentoriasRealizadas = 15;
  protected readonly Array = Array;
}


