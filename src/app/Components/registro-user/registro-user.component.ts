import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css']
})
export class RegistroUserComponent implements OnInit {
  singUpForm: FormGroup ; //permite indical las validaciones  que se crearan

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  validator(){
    // this.singUpForm = this.formBuilder.group()
  }

}
