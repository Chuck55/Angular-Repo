import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'phone'},

  ]

  log(x: any){
    console.log(x)
  }

  submit(f) {
    console.log(f)
  }
}
