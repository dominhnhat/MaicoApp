import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://wjlegcclzduuotsrxsan.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqbGVnY2NsemR1dW90c3J4c2FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1MDYwNTYsImV4cCI6MTk4OTA4MjA1Nn0.wXc_TMxFtpesgUDLwLJd19NMCzjv71PHpIJ7ROgej3I';
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
export default supabase;
