import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  firstName = '';
  lastName = '';
  birthday = '';
  gender = '';
  password = '';
  confirmPassword = '';
  email: any;
  phoneNumber: any;
  hidePassword = true; // Control for password visibility
  hideConfirmPassword = true; // Control for confirm password visibility

  constructor(private router: Router, private authService: AuthService) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthday: this.birthday,
      gender: this.gender,
      email: this.email,
      password: this.password,
    };

    this.authService.register(userData).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        alert('Registration successful!');
        this.router.navigate(['/signup']);
        // Handle successful registration (e.g., navigate to the signup page)
      },
      (error) => {
        console.error('Registration error:', error);
        alert('Registration failed');
      }
    );

    // Here you will add the logic to send the registration data to the backend via a service
    // After a successful registration, navigate to the signup page
    // alert('Registration successful!');
    // this.router.navigate(['/signup']);
  }
}
