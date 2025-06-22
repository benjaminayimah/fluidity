
import { create } from 'zustand'

type Device = 'mobile' | 'tablet' | 'desktop' | ''

type UIStore = {
  device: Device
  computeWindow: (width: number) => void
}

export const useUIStore = create<UIStore>((set) => ({
    device: '',
    computeWindow: (width: number) => {
        const app = document.getElementById('app')
        if (width < 768) {
            app?.setAttribute('class', 'mobile')
            set({ device: 'mobile' })
        } else if (width > 1344) {
            app?.setAttribute('class', 'desktop')
            set({ device: 'desktop'})
        } else {
        app?.setAttribute('class', 'tablet')
            set({ device: 'tablet'})
        }
    },
}))
