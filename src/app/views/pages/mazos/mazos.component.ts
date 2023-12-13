import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { MazosService} from './mazos.service'
import { lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mazos',
  templateUrl: './mazos.component.html',
  styles: []
})
export class MazosComponent implements OnInit{

  lstMazos: any[] = [];
  currentPage: any;
  itemsPerPage: any;

  //? CONFIGURACIÓN NGX-DATATABLE
  selected = [];
  temp = [];
  reorderable = true;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType.single;

  constructor(
    private mazosService: MazosService
  ){

  }

  ngOnInit() {
    this.obtenerMazos();
  }

  async obtenerMazos(){
    const mazos$ = this.mazosService.obtenerMazos();

    const res: any = await lastValueFrom(mazos$);

    if(res.estado === 1) {
      this.lstMazos = res.data;
      console.log(this.lstMazos)
    } else if (res.estado === 2) {
      this.lstMazos = [];
    } else {
      Swal.fire('Error', 'Error del sistema, por favor contactarse con proveedor.', 'error');
    }
  }

  setPage(event: any){

  }
}
