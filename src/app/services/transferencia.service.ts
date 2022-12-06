import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];


  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  addTransferencia(transferencia: any){
    this.addMoreData(transferencia);

    this.transferencias.push(transferencia);
  }

  private addMoreData(transferencia: any){
    transferencia.data = new Date();
  }

}
