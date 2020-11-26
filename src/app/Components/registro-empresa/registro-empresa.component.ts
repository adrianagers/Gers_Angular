import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  singUpForm: FormGroup ; //permite indical las validaciones  que se crearan

  constructor(
    private formBuilder: FormBuilder
  ) { this.validator(); }

  ngOnInit(): void {
  }
  validator(){
    this.singUpForm = this.formBuilder.group({
      nameCompany: ['', Validators.required],
      nitCompany: ['', [ Validators.required, Validators.minLength(9)]],
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['Company', Validators.required],
      phoneCompany: ['', Validators.required],
      namepush: ['', Validators.required]

    });

  }
  saveCompany(){
    if (this.singUpForm.valid){
      alert('Se registro exitosamente');
    }else{
      alert('El formulario no es valido ');
    }
  }
}
