import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImageComponent } from '../shared/card-image/card-image.component';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule, CardImageComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss',
})
export class ServicosComponent {
  protected  isFirstMain = signal<boolean>(true);

  listimoveis: any[] = [
    {
      image: 'https://giassiferroeaco.com.br/wp-content/uploads/2019/01/mao-de-obra-sem.png',
      name: 'Vistoria de Imóveis 0',
      tags: ['tag1', 'tag2', 'tag3'],
      description: 'Descrição do serviço',
    },
    {
      image: 'https://giassiferroeaco.com.br/wp-content/uploads/2019/01/mao-de-obra-sem.png',
      name: 'Vistoria de Imóveis 1',
      link: '',
      tags: ['tag1', 'tag2', 'tag3'],
      description: 'Descrição do serviço',
    },
    {
      image: 'https://giassiferroeaco.com.br/wp-content/uploads/2019/01/mao-de-obra-sem.png',
      name: 'Vistoria de Imóveis 2',
      link: '',
      tags: ['tag1', 'tag2', 'tag3'],
      description: 'Descrição do serviço',
    },
    {
      image: 'https://giassiferroeaco.com.br/wp-content/uploads/2019/01/mao-de-obra-sem.png',
      name: 'Vistoria de Imóveis 3',
      link: '',
      tags: ['tag1', 'tag2', 'tag3'],
      description: 'Descrição do serviço',
    },
    {
      image: 'https://giassiferroeaco.com.br/wp-content/uploads/2019/01/mao-de-obra-sem.png',
      name: 'Vistoria de Imóveis 4',
      link: '',
      tags: ['tag1', 'tag2', 'tag3'],
      description: 'Descrição do serviço',
    },
  ];

  changeMain(value: boolean) {
    this.isFirstMain.set(value);
  }
}
