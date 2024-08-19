import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-collector-table',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatTableModule],
  templateUrl: './collector-table.component.html',
  styleUrls: ['./collector-table.component.css']
})
export class CollectorTableComponent {
  public deudores: any[];
  public paginatedDeudores: any[];
  public pageSize = 10;
  public currentPage = 0;
  public totalPages = 0;

  constructor() {
    this.deudores = [
      {
        nroSolicitud: 1,
        nombre: 'Juan',
        apellido: 'Pérez',
        docIdentidad: '12345678A',
        status: 'Pendiente',
        fechaCobranza: '2024-08-15'
      },
      {
        nroSolicitud: 2,
        nombre: 'Ana',
        apellido: 'López',
        docIdentidad: '87654321B',
        status: 'Pagado',
        fechaCobranza: '2024-07-22'
      },
      {
        nroSolicitud: 3,
        nombre: 'Carlos',
        apellido: 'García',
        docIdentidad: '11223344C',
        status: 'Pendiente',
        fechaCobranza: '2024-09-01'
      },
      {
        nroSolicitud: 3,
        nombre: 'Carlos',
        apellido: 'García',
        docIdentidad: '11223344C',
        status: 'Pendiente',
        fechaCobranza: '2024-09-01'
      },      {
        nroSolicitud: 3,
        nombre: 'Carlos',
        apellido: 'García',
        docIdentidad: '11223344C',
        status: 'Pendiente',
        fechaCobranza: '2024-09-01'
      },      {
        nroSolicitud: 3,
        nombre: 'Carlos',
        apellido: 'García',
        docIdentidad: '11223344C',
        status: 'Pendiente',
        fechaCobranza: '2024-09-01'
      },      {
        nroSolicitud: 3,
        nombre: 'Carlos',
        apellido: 'García',
        docIdentidad: '11223344C',
        status: 'Pendiente',
        fechaCobranza: '2024-09-01'
      },      {
        nroSolicitud: 3,
        nombre: 'Carlos',
        apellido: 'García',
        docIdentidad: '11223344C',
        status: 'Pendiente',
        fechaCobranza: '2024-09-01'
      },      {
        nroSolicitud: 3,
        nombre: 'Carlos',
        apellido: 'García',
        docIdentidad: '11223344C',
        status: 'Pendiente',
        fechaCobranza: '2024-09-01'
      },      {
        nroSolicitud: 3,
        nombre: 'Carlos',
        apellido: 'García',
        docIdentidad: '11223344C',
        status: 'Pendiente',
        fechaCobranza: '2024-09-01'
      },      {
        nroSolicitud: 3,
        nombre: 'Carlos',
        apellido: 'García',
        docIdentidad: '11223344C',
        status: 'Pendiente',
        fechaCobranza: '2024-09-01'
      },      {
        nroSolicitud: 3,
        nombre: 'Carlos',
        apellido: 'García',
        docIdentidad: '11223344C',
        status: 'Pendiente',
        fechaCobranza: '2024-09-01'
      },      {
        nroSolicitud: 3,
        nombre: 'Carlos',
        apellido: 'García',
        docIdentidad: '11223344C',
        status: 'Pendiente',
        fechaCobranza: '2024-09-01'
      },
    ];

    this.totalPages = Math.ceil(this.deudores.length / this.pageSize);
    this.paginatedDeudores = this.paginate(this.deudores, this.pageSize, this.currentPage);
  }

  paginate(array: any[], pageSize: number, pageNumber: number): any[] {
    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }

  goToPage(pageNumber: number): void {
    if (pageNumber >= 0 && pageNumber < this.totalPages) {
      this.currentPage = pageNumber;
      this.paginatedDeudores = this.paginate(this.deudores, this.pageSize, this.currentPage);
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }
}
