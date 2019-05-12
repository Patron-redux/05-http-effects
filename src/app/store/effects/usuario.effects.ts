import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuarioActions from '../actions/usuario.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import {of} from 'rxjs';

@Injectable()
export class UsuarioEffects{

  @Effect()
  cargarUsuario$ = this.actions$
    .pipe(
        ofType(usuarioActions.CARGAR_USUARIO)
    )
    .pipe(
      switchMap(action =>{
        const id =  action['id'];
        return this.usuarioService.getUserById(id)
               .pipe(
                 map( user => new usuarioActions.CargarUsuarioSuccess(user)),
                 catchError(error =>
                   of(new usuarioActions.CargarUsuarioFail(error)))
               );
      })
    );
  constructor(
      private actions$: Actions,
      public usuarioService:UsuarioService
    ){}
}
