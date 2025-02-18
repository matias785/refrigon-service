import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'refrigon-service';


  mensajeWhatApp?: string = environment.mensajeWhatApp;
  numberCelular?: string = environment.numberCelular;
  numberFijo?: string = environment.numberFijo;
  email?: string = environment.email;
;


clickRedirect(url: string) {
    window.open(url, '_blank');
  }
}
