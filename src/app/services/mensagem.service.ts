import { Injectable } from '@angular/core';
import { ErroService } from './erro.service';
import { MessageService } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(
    private mesageService: MessageService) {

    }

    mensagemSucesso( mensagem: string ){
      this.mesageService.add({
        severity: 'success',
        detail: mensagem,
      });

    }

    showWarnig(mensagem: string){

      this.mesageService.add({ severity: 'warn', summary: 'Warn', detail: mensagem});

    }

    showError(mensagem : string) {
      this.mesageService.add({ severity: 'error', summary: 'Error', detail : mensagem });
  }
}
