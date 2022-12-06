import { Component, EventEmitter, Output } from "@angular/core";
import { isEmpty } from "rxjs";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent{
  @Output() onTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir(){

    const valorEmitir = {valor: this.valor, destino: this.destino};

    this.onTransferir.emit(valorEmitir);
    this.zerarCampos();
    console.log('joje');
  }

  zerarCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
