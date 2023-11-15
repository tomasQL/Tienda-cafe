import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://cxwwtwzvyfeucepifgvx.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4d3d0d3p2eWZldWNlcGlmZ3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0MTEzNTIsImV4cCI6MjAxNDk4NzM1Mn0.J57ZH0dP0yX14e-p-yyQDC_nJP4ZwhO7_yUvAZ4CrZs'
)