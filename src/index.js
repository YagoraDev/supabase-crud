import express from 'express'
import cors from 'cors'
import { supabase } from './supabaseClient.js'
import 'dotenv/config';

const app = express()
app.use(cors())
app.use(express.json())

// CREATE - CRIAÇÃO DE UM NOVO CLIENTE
app.post('/clientes', async (req, res) => {
  const { nome, email, cpf } = req.body
  if (!nome || !email || !cpf) {
    return res.status(400).json({ error: 'nome, email e cpf são obrigatórios' })
  }
  const { data, error } = await supabase.from('clientes').insert([{ nome, email, cpf }])
  if (error) return res.status(400).json(error)
  res.json({ message: 'Cliente adicionado com sucesso' })
})

// READ - LISTA TODOS OS CLIENTES
app.get('/clientes', async (req, res) => {
  const { data, error } = await supabase.from('clientes').select().order('id', { ascending: true })
  if (error) return res.status(400).json(error)
  res.json(data)
})

// UPDATE - ATUALIZA CLIENTE PELO ID
app.put('/clientes/:id', async (req, res) => {
  const { id } = req.params
  const { nome, email, cpf } = req.body

  if (!nome && !email && !cpf) {
    return res.status(400).json({ error: 'Informe ao menos um campo para atualizar' })
  }

  const { data: existing, error: selectError } = await supabase
    .from('clientes')
    .select()
    .eq('id', id)

  if (selectError) {
    return res.status(400).json(selectError)
  }

  if (!existing || existing.length === 0) {
    return res.status(404).json({ error: 'Cliente não encontrado' })
  }

  const updateData = {}
  if (nome) updateData.nome = nome
  if (email) updateData.email = email
  if (cpf) updateData.cpf = cpf

  const { error } = await supabase
    .from('clientes')
    .update(updateData)
    .eq('id', id)

  if (error) return res.status(400).json(error)

  res.json({ message: 'Cliente atualizado com sucesso' })
})


// DELETE - DELETA O CLIENTE PELO ID
app.delete('/clientes/:id', async (req, res) => {
  const { id } = req.params
  const { data, error } = await supabase.from('clientes').delete().eq('id', id)

  if (error) return res.status(400).json(error)
    
  res.json({ message: 'Cliente deletado com sucesso' })
})

// VERIFICAÇÃO DA CONEXÃO DA PORTA
app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
