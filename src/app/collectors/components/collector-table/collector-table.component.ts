import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { TagComponentComponent } from '../../../public/components/tag-component/tag-component.component';
import { Router } from '@angular/router';

export interface PeriodicElement {
  nombre: string;
  apellido: string;
  nroSolicitud: number;
  docIdentidad: string;
  status: string;
  fechaCobranza: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    nroSolicitud: 1,
    nombre: 'Juan',
    apellido: 'Pérez',
    docIdentidad: '12345678A',
    status: 'Pendiente',
    fechaCobranza: '2024-08-15',
  },
  {
    nroSolicitud: 2,
    nombre: 'Ana',
    apellido: 'López',
    docIdentidad: '87654321B',
    status: 'Pagado',
    fechaCobranza: '2024-07-22',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 4,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 5,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 6,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pagado',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
  {
    nroSolicitud: 3,
    nombre: 'Carlos',
    apellido: 'García',
    docIdentidad: '11223344C',
    status: 'Pendiente',
    fechaCobranza: '2024-09-01',
  },
];

@Component({
  selector: 'app-collector-table',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    TagComponentComponent,
  ],
  templateUrl: './collector-table.component.html',
  styleUrls: ['./collector-table.component.css'],
})
export class CollectorTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['nroSolicitud','Nombre','Doc. identidad','Status','Fecha de Cobranza','acciones',];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
   
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private router: Router) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

}
