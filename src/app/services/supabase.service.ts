import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // -------------------------
  // AUTH
  // -------------------------

  async signUp(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password
    });

    if (error) throw error;
    return data;
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    return data;
  }

  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
  }

  async getUser() {
    const { data } = await this.supabase.auth.getUser();
    return data.user;
  }

  onAuthStateChange(callback: Function) {
    this.supabase.auth.onAuthStateChange((event, session) => {
      callback(event, session);
    });
  }

  // -------------------------
  // TREINOS CRUD
  // -------------------------

  async getTreinos() {
    const { data, error } = await this.supabase
      .from('treinos')
      .select('*')
      .order('data', { ascending: false });

    if (error) throw error;
    return data;
  }

  async addTreino(treino: any) {
    const { data, error } = await this.supabase
      .from('treinos')
      .insert([treino])
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async updateTreino(treino: any) {
    const { data, error } = await this.supabase
      .from('treinos')
      .update(treino)
      .eq('id', treino.id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async deleteTreino(id: string) {
    const { error } = await this.supabase
      .from('treinos')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  }
}
