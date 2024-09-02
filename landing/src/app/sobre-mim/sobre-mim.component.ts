import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SobreMimComponent {
  readonly pathImage = 'images/manuela-perin.svg';

  isPortfolioActive = signal(true);

  isActive(value: string): void {
    if (value === 'portfolio') {
      this.isPortfolioActive.set(true);
    }
    else {
      this.isPortfolioActive.set(false);
    }
  }
}
