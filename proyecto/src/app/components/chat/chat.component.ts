import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  mensaje: string = '';
  respuesta: string = '';

  constructor(private chatService: ChatService) {}

  enviarMensaje() {
    if (this.mensaje.trim()) {
      this.chatService.recomendarPlato(this.mensaje).subscribe(res => {
        this.respuesta = res;
      });
    }
  }
}
