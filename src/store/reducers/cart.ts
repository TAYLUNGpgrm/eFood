import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../services/api'

type CartState = {
  items: Prato[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const item = state.items.find((p) => p.id === action.payload.id)
      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('Este item já está no carrinho')
      }
    },
    // Remove o item filtrando pelo ID
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    // Controla a visibilidade da Sidebar
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
