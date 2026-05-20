// js/supabase-config.js

const supabaseUrl = "https://vfjpdcagugdazggdqiwl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmanBkY2FndWdkYXpnZ2RxaXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNjMzMzAsImV4cCI6MjA5NDgzOTMzMH0._lkeY1sitvY1bBPmKjsz0RTFzx8msm530kHDk3YbKUU";

// Inicializamos el cliente y lo guardamos en una variable global
const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);
