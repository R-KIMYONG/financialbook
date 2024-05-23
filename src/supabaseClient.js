import { createClient } from "@supabase/supabase-js";

const SUPABASE_PROJECT_URL = 'https://amzeonniyjycxmzvwkqq.supabase.co'
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtemVvbm5peWp5Y3htenZ3a3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY0NDMzNTMsImV4cCI6MjAzMjAxOTM1M30.UeS_eqQDJz-Q-AHedW_dVJlwQl5JvlTI6iLPpFekxXw";

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

export default supabase;
