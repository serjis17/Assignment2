import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators, FormGroup,
FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(private fb:FormBuilder)
 {
   


 }
 form:FormGroup
 items=['','Male','Female','Others']
 ngOnInit()
 {
  
this.form = this.fb.group({email:['',[Validators.required,Validators.pattern( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
 password:['',[Validators.required,Validators.pattern(
   /^(?=.*[a-zA-Z0-9])(?=.*[@#$%^&*()]).{8,}$/
 )]],
 confirmpassword:['',[Validators.required,this.passwordMatcher.bind(this)]],
 gender:['',[Validators.required]],
 accept:['',Validators.requiredTrue]
 })


 }
 private passwordMatcher(control: FormControl): { [s: string]: boolean } {
    if (
        this.form &&
        (control.value !== this.form.controls.password.value)
    ) {
        return { passwordNotMatch: true };
    }
    return null;
}


 isSubmitted:boolean=false;
 email:string;
 password:string;
 gender:string;

submit()
{

  this.isSubmitted=true;
  this.email=this.form.controls.email.value;
   this.password=this.form.controls.password.value;
    this.gender=this.form.controls.gender.value;


}



}
