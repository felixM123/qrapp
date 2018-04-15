
import { Injectable } from '@angular/core';

import { ScanData} from "../../models/scan-data.model";

import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialServece {

  private _historial:ScanData[]=[];

  constructor(private iab: InAppBrowser) {

  }
  agregar_historial(texto:string){
    let data = new ScanData(texto);

    this._historial.unshift(data);
     console.log(this._historial);

     this.abrir_scan(0);
  }

  abrir_scan(index:number){

let scandata=this._historial[index];
console.log(scandata);
switch(scandata.tipo){

  case "http":
  this.iab.create(scandata.info,"_system");

  break
  default:
  console.error("Tipo no soportado");
}
  }

  cargar_historial(){
    return this._historial;
  }

}
