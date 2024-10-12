import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { TrajetoriaComponent } from './trajetoria/trajetoria.component';
import { ContratarComponent } from './contratar/contratar.component';
import { ServicosComponent } from './servicos-oferecidos/servicos.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, SobreMimComponent, TrajetoriaComponent, ContratarComponent, ServicosComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'landing';
}
