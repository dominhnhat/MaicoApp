import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://vubysetthyxwlyyueywi.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1YnlzZXR0aHl4d2x5eXVleXdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1Mzk1ODAsImV4cCI6MTk5MjExNTU4MH0.Orllex2p_PE67ezxWGuT3bL0hCnNiyXe5ZksqIzibeY';
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
export default supabase;
