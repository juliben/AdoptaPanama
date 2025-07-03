import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ibeddmnfzpvqyxmpuffa.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliZWRkbW5menB2cXl4bXB1ZmZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMjczNjgsImV4cCI6MjA1OTcwMzM2OH0.JVTDQTOtCo33nH4vt_uC34hzRpuxG9QVLP1eqIO6iKQ'
const supabase = createClient(supabaseUrl, supabaseKey!);

export default supabase;
