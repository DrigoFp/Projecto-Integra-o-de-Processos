import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { SupabaseService } from './services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('projecto-final');

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

let wee = 13