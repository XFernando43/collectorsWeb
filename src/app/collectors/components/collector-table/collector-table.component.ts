import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


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


@Component({
  selector: 'app-collector-table',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatTableModule,MatPaginatorModule],
  templateUrl: './collector-table.component.html',
  styleUrls: ['./collector-table.component.css']
})
export class CollectorTableComponent {

  displayedColumns: string[] = ['nroSolicitud', 'Nombre', 'Apellido', 'Doc. identidad', 'Status', 'Fecha de Cobranza', 'acciones'];
  dataSource = ELEMENT_DATA;

}
