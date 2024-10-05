import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  formGroup= new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    age : new FormControl(0)
  });

  onSubmit(){
    console.log(this.formGroup.value);
  }

}
