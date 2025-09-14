import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface ICounterStore {
  counter: number
  incress: () => void
  decress: () => void
}

export const useCounterStore = create<ICounterStore>()(
  devtools(
    persist<ICounterStore>(
      (set,get) => ({
        counter: 0,
        incress: () => {
          set({ counter: (get().counter + 1) })
        },
        decress: () => {
          const counter = useCounterStore.getState().counter
          if (counter > 0) {
            set({ counter: counter - 1 })
          }
        },
      }),
      {
        name: 'counter-storage',
      },
    ),
  ),
)
