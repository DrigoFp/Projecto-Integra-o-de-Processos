import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(
    private supabase: SupabaseService,
    private router: Router
  ) {}

  async logout() {
    try {
      await this.supabase.signOut();
      this.router.navigate(['/login']);
    } catch (e) {
      console.error('Erro ao fazer logout:', e);
    }
  }
}
