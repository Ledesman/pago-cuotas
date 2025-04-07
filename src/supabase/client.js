import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://cejqlmmmyijriltxtrjf.supabase.co';

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlanFsbW1teWlqcmlsdHh0cmpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMjA4NjUsImV4cCI6MjA1Nzc5Njg2NX0.JiP1_zegjjpzPLy_yiL_BSmFCRfTz4oxTM4GZaeXf1g';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
   