import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  usuarios:Usuario[];

  constructor(public usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe( users => {
      console.log(users);
      this.usuarios = users;
    });
  }

}
