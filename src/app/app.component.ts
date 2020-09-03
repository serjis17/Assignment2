import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators, FormGroup,
FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  form:FormGroup
   constructor(private fb:FormBuilder)
 {
   


 }
 ngOnInit()
 {
   this.form = this.fb.group({email:['',[Validators.required,Validators.pattern( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
 password:['',[Validators.required,Validators.pattern(
   /^(?=.*[a-zA-Z0-9])(?=.*[@#$%^&*()]).{8,}$/
 )]],
 confirmpassword:['',[Validators.required,this.passwordMatcher.bind(this)]],
 gender:['',Validators.required],
 accept:['',Validators.required]


 });
 }

 //form:FormBuilder;


 
// confirm new password validator
 passwordMatcher(control: FormControl): { [s: string]: boolean } {
    if (
       
        (control.value !== this.form.controls.value)
    ) {
        return { passwordNotMatch: true };
    }
    return null;
}
}
