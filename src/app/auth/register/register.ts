import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  erro: string = '';

  constructor(
    private supabase: SupabaseService,
    private router: Router
  ) {}

  async register() {
    this.erro = '';

    try {
      const email = this.form.get('email')?.value!;
      const password = this.form.get('password')?.value!;

      await this.supabase.signUp(email, password);

      this.router.navigate(['/login']);
    } catch (e: any) {
      this.erro = e.message;
    }
  }
}
