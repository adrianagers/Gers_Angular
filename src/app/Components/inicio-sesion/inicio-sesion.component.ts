import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { StorageService } from '../../Services/storage.service';
import { Router } from '@angular/router';    
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private userService: UserService,
    private storageService: StorageService,
    private router: Router

  ) {
    this.validator()
  }

  ngOnInit(): void {
  }
  
  validator() {
    this.loginForm = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  login() {
 
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(
        (dataUser) => {
          this.storageService.saveToken(dataUser['token'])
          const infoUser = this.storageService.dataUser()
          if (infoUser.role == 'Company') {
            this.router.navigate(['/perfil/Company'])
          }else{
            this.router.navigate(['/perfil/User'])
          }
        },
        (error) => {
          console.error('Error ->', error)
        }
      )
    } else {
      alert('Debes llenar todos los campos ')
    } 
  }/* 
  loginCompany() {
 
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(
        (dataUser) => {
          this.storageService.saveToken(dataUser['token'])
          const infoUser = this.storageService.dataUser()
          if (infoUser.role == 'Company') {
            this.router.navigate(['/perfil/Company'])
          }else{
            this.router.navigate(['/perfil/User'])
          }
        },
        (error) => {
          console.error('Error ->', error)
        }
      )
    } else {
      alert('Debes llenar todos los campos ')
    }
  } */
}
