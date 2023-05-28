import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Pedido } from '../../../../core/models/Pedido';

@Component({
  selector: 'app-cocina-table',
  templateUrl: './cocina-table.component.html',
  styleUrls: ['./cocina-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule]
})
export class CocinaTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['npedido', 'pedido', 'mesa', 'fecha', 'hora'];
  selectedRow = new Pedido();
  dataSource = new MatTableDataSource<Pedido>(ELEMENT_DATA);
  clickedRows = new Set<Pedido>();

  @ViewChild(MatPaginator) paginator!: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  printRow(row: Pedido) {
    console.log(row);
  }

}

const ELEMENT_DATA: Pedido[] = [
  { npedido: 1, pedido: 'Hydrogen', mesa: 1, fecha: '26/05/2023', hora: '12:00:00' },
  { npedido: 2, pedido: 'Helium', mesa: 1, fecha: '26/05/2023', hora: '12:00:00' },
  { npedido: 3, pedido: 'Lithium', mesa: 1, fecha: '26/05/2023', hora: '12:00:00' },
  { npedido: 4, pedido: 'Beryllium', mesa: 1, fecha: '26/05/2023', hora: '12:00:00' },
  { npedido: 5, pedido: 'Boron', mesa: 1, fecha: '26/05/2023', hora: '12:00:00' },
  { npedido: 6, pedido: 'Carbon', mesa: 2, fecha: '26/05/2023', hora: '12:00:00' },
  { npedido: 7, pedido: 'Nitrogen', mesa: 6, fecha: '26/05/2023', hora: '12:00:00' },
  { npedido: 8, pedido: 'Oxygen', mesa: 2, fecha: '26/05/2023', hora: '12:00:00' },
  { npedido: 9, pedido: 'Fluorine', mesa: 3, fecha: '26/05/2023', hora: '12:00:00' },
  { npedido: 10, pedido: 'Neon', mesa: 4, fecha: '26/05/2023', hora: '12:00:00' },
  // { npedido: 11, pedido: 'Sodium', mesa: 6, fecha: '26/05/2023', hora: '12:00:00' },
  // { npedido: 12, pedido: 'Magnesium', mesa: 8, fecha: '26/05/2023', hora: '12:00:00' },
  // { npedido: 13, pedido: 'Aluminum', mesa: 9, fecha: '26/05/2023', hora: '12:00:00' },
  // { npedido: 14, pedido: 'Silicon', mesa: 1, fecha: '26/05/2023', hora: '12:00:00' },
  // { npedido: 15, pedido: 'Phosphorus', mesa: 6, fecha: '26/05/2023', hora: '12:00:00' },
  // { npedido: 16, pedido: 'Sulfur', mesa: 4, fecha: '26/05/2023', hora: '12:00:00' },
  // { npedido: 17, pedido: 'Chlorine', mesa: 2, fecha: '26/05/2023', hora: '12:00:00' },
  // { npedido: 18, pedido: 'Argon', mesa: 1, fecha: '26/05/2023', hora: '12:00:00' },
  // { npedido: 19, pedido: 'Potassium', mesa: 3, fecha: '26/05/2023', hora: '12:00:00' },
  // { npedido: 20, pedido: 'Calcium', mesa: 9, fecha: '26/05/2023', hora: '12:00:00' },
];