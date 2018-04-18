import { Component } from '@angular/core';

//Componenets
import { ToastController,Platform } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

//servicios
import {HistorialServece} from "../../providers/historial/historial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform:Platform,
            private _historialService:HistorialServece) {



  }
  scan(){
    console.log("Realizando scan......");

     if (!this.platform.is('cordova')) {
       //this._historialService.agregar_historial("http://google.com");
       //this._historialService.agregar_historial("geo:-17.408499,-66.167221");
       //this._historialService.agregar_historial( `BEGIN:VCARD
//VERSION:2.1
//N:Kent;Clark
//FN:Clark Kent
//ORG:
//TEL;HOME;VOICE:12345
//TEL;TYPE=cell:67890
//ADR;TYPE=work:;;;
//EMAIL:clark@superman.com
//END:VCARD` );
  //      return;
      this._historialService.agregar_historial( "MATMSG:TO:felisitotj@gmail.com;SUB:Hola Mundo;BODY:Saludos felix;;" );


     }

     this.barcodeScanner.scan().then(barcodeData => {
       console.log('Barcode data: ', barcodeData.text);
      console.log('Format: ',barcodeData.format);
      console.log('Cancelled: ',barcodeData.cancelled);

        if ( barcodeData.cancelled==false && barcodeData.text != null)
        {
          this._historialService.agregar_historial(barcodeData.text);
        }

}).catch(err => {
    console.error('Error: ', err);
    this.mostrar_error("Error: "+err)
});

  }

  mostrar_error(mensaje:string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
