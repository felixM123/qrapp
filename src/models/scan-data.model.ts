

export class ScanData{
  info:string;
  tipo:string;
  constructor(texto:string){
    this.tipo="no difinido";
    this.info=texto;
    if ( texto.startsWith("http")) {
      this.tipo="http";

    }
  }
}
