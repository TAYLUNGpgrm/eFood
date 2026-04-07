// O correto é tudo junto dentro de /query/react
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Importamos as interfaces que definimos antes
export interface Prato {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export interface Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    // Endpoint para pegar todos os restaurantes (Home)
    getRestaurantes: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    // Endpoint para pegar um restaurante específico (Perfil)
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantesQuery, useGetRestauranteQuery } = api
export default api
