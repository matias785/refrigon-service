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
  seccions: any = [
    {
      title: 'Lavarropas',
      reverse: false,
      imgUrl: 'https://static.wixstatic.com/media/4c552d_b65eb68707644df7845ee3648250366d~mv2.jpg/v1/fill/w_554,h_300,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c552d_b65eb68707644df7845ee3648250366d~mv2.jpg',
      attributes: ['Cambio de rulemanes con eje y retén',
        'Reparación de placas',
        'Cambio de electroválvula',
        'Cambio de sensores de calor',
        'Cambio de resistencia',
        'Cambio de gabinetes',
        'Cambio de bomba de desagote',
        'Reparación de cubas',
        'Cambio de correas',
        'Reparación de sistema de secado']
    },
    {
      title: 'Heladeras',
      reverse: true,
      imgUrl: 'https://static.wixstatic.com/media/4c552d_3d44956cd6d14cb38525937d87731b3e~mv2.jpg/v1/fill/w_554,h_300,fp_0.28_0.45,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c552d_3d44956cd6d14cb38525937d87731b3e~mv2.jpg',
      attributes: ['Service heladeras general',
        'No frost, ciclicas, exibidoras y cavas',
        'Reparación y cambio de placas',
        'Cambio de motores y reparación',
        'Cambio de sensores',
        'Cambio de resistencia y forzadores',
        'Cargas de gas',
        'Cambio de burletes',
        'Cambio de termostato']
    },
    {
      title: 'Aires Acondicionados',
      reverse: false,
      imgUrl: 'https://static.wixstatic.com/media/b89f56c31bcf49db901274a6845755e7.jpg/v1/fill/w_554,h_300,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b89f56c31bcf49db901274a6845755e7.jpg',
    attributes: ['Cambio de magnetron',
      'Instalaciones de aire frío calor',
      'Carga de gas',
      'Cambio de motor',
      'Reparación de placa',
      'Cambio de bomba inversora',
      'Mantenimiento']
  },
];

  mensajeWhatApp?: string = environment.mensajeWhatApp;
  numberCelular?: string = environment.numberCelular;
  numberFijo?: string = environment.numberFijo;
  email?: string = environment.email;
;


clickRedirect(url: string) {
    window.open(url, '_blank');
  }



}
