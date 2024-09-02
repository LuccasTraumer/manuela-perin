import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';

@Component({
  selector: 'app-trajetoria',
  standalone: true,
  imports: [CommonModule, TimelineComponent],
  templateUrl: './trajetoria.component.html',
  styleUrl: './trajetoria.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrajetoriaComponent {
  listaTimeline = [
    {
      title: 'Direcional Engenharia, Campinas',
      description: 'Agosto, 2021 - Julho, 2023'
    },
    {
      title: 'Direcional Engenharia, Campinas',
      description: 'Agosto, 2021 - Julho, 2023'
    },
    {
      title: 'Direcional Engenharia, Campinas',
      description: 'Agosto, 2021 - Julho, 2023'
    },
    {
      title: 'Direcional Engenharia, Campinas',
      description: 'Agosto, 2021 - Julho, 2023'
    }
  ]
}
