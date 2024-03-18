import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.scss'
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      bio: [''],
      active: [false]
    });
  }

  submitForm() {
    if (this.profileForm.valid) {
      console.log('Form submitted successfully');
      console.log('Form data:', this.profileForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}