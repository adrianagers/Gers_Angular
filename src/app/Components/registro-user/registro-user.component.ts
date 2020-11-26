import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { UserService } from '../../Services/user.service' ;
@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css']
})
export class RegistroUserComponent implements OnInit {
  singUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { this.validator(); }

  ngOnInit(): void {
  }
  validator(){
    this.singUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['User', Validators.required],
      phone: ['']

    });
  }
  saveUser(){
    if (this.singUpForm.valid){
      console.log(this.singUpForm.value);
      this.userService.createUser( this.singUpForm.value ).subscribe(
        (userCreated) => {
          console.log(userCreated);
          alert('Usuario creado correctamente');
        },
        (error) => {
          console.error('Tuvimos un error --> ', error);
        }
      );
    }else{
      alert('El formulario no es valido ');
    }
  }

}
