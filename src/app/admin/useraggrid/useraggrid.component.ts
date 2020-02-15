import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-useraggrid',
  templateUrl: './useraggrid.component.html',
  styleUrls: ['./useraggrid.component.css']
})
export class UseraggridComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;

  constructor(private httpclient : HttpClient) { }

  columnDefs = [
    {
      headerName: 'Make',
       field: 'make', 
       rowGroup : true,

    },
    {headerName: 'Price', field: 'price'}
];
autoGroupColumnDef = {
  headerName: 'Model',
  field: 'model',
  cellRenderer: 'agGroupCellRenderer',
  cellRendererParams: {
      checkbox: true
  }
};

rowData : any;

  ngOnInit() {
    this.rowData = this.httpclient.get('https://api.myjson.com/bins/15psn9');
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

}
