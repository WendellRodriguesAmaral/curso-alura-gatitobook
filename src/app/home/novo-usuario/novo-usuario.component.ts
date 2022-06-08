import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private route: Router,
      ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuider.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator], [this.usuarioExistenteService.usuarioJaExiste()]], // minusculoValidator é validação customizada
      password: [''],
    },
      {
        validators: [usuarioSenhaIguaisValidator]
      }
    )
  }

  cadastrar() {
    if(this.novoUsuarioForm.valid){
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;

      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
        ()=>{this.route.navigate([''])},
        (error)=>{console.log(error)}
      )
    }
  }

}
