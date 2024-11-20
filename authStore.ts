import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | {
    id: string;
    email: string;
    name: string;
    subscription: string;
  };
  error: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
  clearError: () => void;
}

// Simulated user data for development
const MOCK_USER = {
  id: '1',
  email: 'demo@example.com',
  name: 'Demo User',
  subscription: 'free'
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
  login: async (email, password) => {
    try {
      set({ loading: true, error: null });
      
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (email === 'demo@example.com' && password === 'password') {
        set({ isAuthenticated: true, user: MOCK_USER, loading: false });
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'An error occurred during login',
        loading: false 
      });
      throw error;
    }
  },
  logout: () => {
    set({ isAuthenticated: false, user: null, error: null });
  },
  signup: async (email, password, name) => {
    try {
      set({ loading: true, error: null });
      
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({ 
        isAuthenticated: true, 
        user: { ...MOCK_USER, email, name },
        loading: false 
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'An error occurred during signup',
        loading: false 
      });
      throw error;
    }
  },
  clearError: () => set({ error: null })
}));