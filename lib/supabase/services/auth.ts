import { supabase } from '../client';

export interface AuthError {
  message: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials extends LoginCredentials {
  name: string;
}

export const authService = {
  async login({ email, password }: LoginCredentials): Promise<{ user: User | null; error: AuthError | null }> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      return {
        user: data.user ? {
          id: data.user.id,
          email: data.user.email!,
          name: data.user.user_metadata?.name,
        } : null,
        error: null,
      };
    } catch (error: any) {
      return {
        user: null,
        error: {
          message: error.message || 'Failed to login',
        },
      };
    }
  },

  async signUp({ email, password, name }: SignUpCredentials): Promise<{ user: User | null; error: AuthError | null }> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) throw error;

      return {
        user: data.user ? {
          id: data.user.id,
          email: data.user.email!,
          name: data.user.user_metadata?.name,
        } : null,
        error: null,
      };
    } catch (error: any) {
      return {
        user: null,
        error: {
          message: error.message || 'Failed to sign up',
        },
      };
    }
  },

  async logout(): Promise<{ error: AuthError | null }> {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      return {
        error: {
          message: error.message || 'Failed to logout',
        },
      };
    }
  },

  async checkAuthStatus(): Promise<User | null> {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) throw error;
      if (!session) return null;

      return {
        id: session.user.id,
        email: session.user.email!,
        name: session.user.user_metadata?.name,
      };
    } catch (error) {
      console.error('Error checking auth status:', error);
      return null;
    }
  },
}; 