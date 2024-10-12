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

  changeMain(value: boolean) {
    this.isFirstMain.set(value);
  }
}
