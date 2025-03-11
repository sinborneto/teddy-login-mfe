import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  imports: [ButtonModule, InputTextModule,FloatLabelModule,FormsModule, DialogModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  valueInput = '';
  exibirModal = false;

  constructor(private router: Router) {}


  entrar() {
    if (this.valueInput.trim() === '') {
      this.exibirModal = true;
    } else {
      this.router.navigate(['/system']);
    }
  }

  fecharModal() {
    this.exibirModal = false;
  }

}
