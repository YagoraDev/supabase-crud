import { createClient } from '@supabase/supabase-js'

// PEGUE ESSES VALORES DO SEU PROJETO NO SUPABASE
const supabaseUrl = 'https://SEU-PROJETO.supabase.co'
const supabaseKey = 'SUA_CHAVE_ANONIMA_AQUI'

// PORTA DO PROJETO: 3000

export const supabase = createClient(supabaseUrl, supabaseKey)
