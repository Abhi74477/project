import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/LoginUser';
import swal from 'sweetalert2';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  loginForm!: FormGroup;
  
 
 constructor(private formBuilder:FormBuilder, private router:Router,private userService:UserServiceService,private dialogRef : MatDialog){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
         
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
  
       
      ])],
    });

    
  }
  openSignupDialog(){
    this.dialogRef.open(SignupComponent);
  }
  userLogin(){
    console.log(this.user);
    this.userService.userLogin(this.user).subscribe(
      (data) => {
        console.log(data);
       swal.fire('Success','User is successfully Login','success');
       this.router.navigate(["/home"]);
      
      },
      (error) => {
        console.log(error);
        
     
      }
        )    }
  }

    

