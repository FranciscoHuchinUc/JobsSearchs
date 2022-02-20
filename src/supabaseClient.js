const { createClient } = require('@supabase/supabase-js')

const API = {
  base: 'https://jvdiaclesuxyipleqbqk.supabase.co',
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2ZGlhY2xlc3V4eWlwbGVxYnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ5NjY3MjYsImV4cCI6MTk2MDU0MjcyNn0.9O4Ba_q2JHxFGfpR2Lk2TzhJ6FI0xTGfD34kb4_54s8'
}

const supabase = createClient(API.base, API.key)

module.exports = supabase;