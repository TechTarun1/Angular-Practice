import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  @ViewChild('myForm', { static: true }) myForm: any

  onSubmit = (data: any) => {
    console.log('form data', data.value)
    //To reset form
    //this.myForm.reset()
  }
  handleSubmit=()=>{
    console.log('data',this.formData)
  }
}
