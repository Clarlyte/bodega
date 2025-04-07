import { supabase } from '../client';

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export const authService = {
  async signUp({ email, password }: AuthCredentials) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  async signIn({ email, password }: AuthCredentials) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getSession() {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data;
  },

  async getUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data;
  },
};

export async function checkAuthStatus(): Promise<User | null> {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) throw error;
    if (!session) return null;

    return {
      id: session.user.id,
      email: session.user.email || '',
      name: session.user.user_metadata?.name || '',
    };
  } catch (error) {
    console.error('Error checking auth status:', error);
    return null;
  }
} 