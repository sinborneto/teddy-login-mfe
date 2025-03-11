import { SharedModule } from './../../../../../host/src/app/shared/shared.module';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';
import { SharedService } from '../../../../../host/src/app/shared/shared.service';


@Component({
  selector: 'app-login',
  imports: [ButtonModule, InputTextModule,FloatLabelModule,FormsModule, DialogModule, SharedModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userName = '';
  exibirModal = false;

  constructor(private router: Router, private sharedService: SharedService) {}

  entrar() {
    if (this.userName.trim() === '') {
      this.exibirModal = true;
    } else {
      this.sharedService.setUser(this.userName);
      this.router.navigate(['/system', { name: this.userName }]);
    }
  }

  fecharModal() {
    this.exibirModal = false;
  }

}
