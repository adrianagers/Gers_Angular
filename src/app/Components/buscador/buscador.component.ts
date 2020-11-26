import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  keyword = 'name';
  data = any;
  constructor(private info: InfoService) { }

  ngOnInit(): void {
    this.info.getInfo().subscribe(res => this.data = res);
  }

}
