import {Component, input, InputSignal, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [CommonModule, CarouselModule, NgOptimizedImage],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CardImageComponent implements OnInit {
  listItems: InputSignal<Array<any>> = input.required({
    alias: 'listItems'
  });
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  goToLink() {
    //TODO: Ajustar aqui

  }
}
