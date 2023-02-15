import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://lklsukldwhkvsifdjcrm.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrbHN1a2xkd2hrdnNpZmRqY3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNjQzNTksImV4cCI6MTk5MTk0MDM1OX0.p9qkx-O1QfHWqEa_EuQtVZLt0FWlZTYKjcIjVm75KG0';
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
export default supabase;
