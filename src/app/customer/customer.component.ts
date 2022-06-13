import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import {NgForm} from '@angular/forms';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  ngOnInit(): void {
    // typing animation script
    var typed = new Typed(".typing",{
      strings: ["Fast food", "Protein rich foods", "Baked Food"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2",{
      strings: ["Fast food", "Protein rich foods", "Baked Food"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
  }

  loginUser(messageForm: NgForm){
    console.log(messageForm);
    console.log("Username : ",messageForm.value.unameField);
    console.log("Email : ",messageForm.value.emailAddressField);
    console.log("Subject : ",messageForm.value.subjectField);
    console.log("Comment : ",messageForm.value.commentField);
  }
  constructor(){

  }

}
