import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  hidePassword = true; // Control for password visibility
  email = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(loginData).subscribe(
      (response) => {
        console.log('Login successful:', response);
        alert('Successfully logged in');
        this.router.navigate(['/home']);
        // Handle successful login (e.g., navigate to a new page)
      },
      (error) => {
        console.error('Login error:', error);
        alert('Invalid credentials');
      }
    );

    // Here you will add the logic to check the user against the database via a service
    // For now, we will use a dummy check
    // if (this.email === 'user@example.com' && this.password === 'password') {
    //   // Navigate to a success page or display success message
    //   alert('Successfully logged in');
    //   this.router.navigate(['/home']);
    // } else {
    //   alert('Incorrect details. Please try again.');
    // }
  }
}
