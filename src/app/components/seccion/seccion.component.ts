import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion',
  standalone: false,
  templateUrl: './seccion.component.html',
  styleUrl: './seccion.component.scss'
})
export class SeccionComponent implements OnInit{
  @Input() section: any;


  ngOnInit(): void {
    console.log(this.section);
  }
}
