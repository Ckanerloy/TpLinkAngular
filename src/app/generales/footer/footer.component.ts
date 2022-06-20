import { VisibilidadFooterService } from './visibilidad/visibilidad-footer.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FooterComponent implements OnInit {
  estaVisible: boolean;

  constructor(
    private visibilidadFooterService: VisibilidadFooterService
  ) {
    this.estaVisible=true;
  }

  ngOnInit(): void {
    this.visibilidadFooterService.cambioDeVisibilidad.subscribe((estaVisible: boolean) =>{
      this.estaVisible=estaVisible;
    })
  }

}
