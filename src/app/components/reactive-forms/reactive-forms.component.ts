import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  myForm!: FormGroup
  url = 'https://api.github.com/users'
  users: any = []
  isLoading: boolean = true

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        name: new FormControl('Tarun', Validators.required),
        emailAddress: new FormControl('Tarun@gmail', [Validators.required, Validators.email]),
        message: new FormControl('Tarun Kinguu')
      }
    )
    this.getUsers()
  }

  getUsers = () => {
    // this.isLoading = true
    this.http.get(this.url).subscribe((data: any) => {
      setTimeout(() => {
        this.users = data
      }, 3000)

      this.isLoading = false
    }, error => {
      this.isLoading = false
      console.log(error)
    }, () => {
      console.log('completed')
    }
    )

    this.http.get(this.url).pipe(
      tap((data: any) => {
        setTimeout(() => {
          this.users = data;
        }, 3000);
      })
    ).subscribe();
  }
  hi: string = 'happy pir'

  onSubmit = () => {
    console.log('coming here',this.myForm.value)
  }

  upDate = () => {
    //for specific field
    this.myForm.patchValue({
      name: 'Chakravarthi Tarun'
    })

    //for all fields
    this.myForm.setValue({
      name: 'Chakravarthi Tarun',
      emailAddress: 'Tarun1@gmail.com',
      message: 'updated'
    })
  }
}
