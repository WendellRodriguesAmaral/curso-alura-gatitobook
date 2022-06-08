import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.autenticar(this.usuario, this.senha)
      .subscribe(
      () => {            //em caso de sucesso 
       this.router.navigate(['/animais'])
      },
      (error) => {        //em caso de erro
        alert('usuario ou senha invalido');
        console.log(error)
      }
    )
  }

} 
