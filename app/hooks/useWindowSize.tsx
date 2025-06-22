import { useEffect, useState } from 'react'
import { useUIStore } from '@/app/store'

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [isMobile, setIsMobile] = useState(false)

  const { computeWindow, device } = useUIStore()

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      setSize({ width, height })
      computeWindow(width) // <-- Call your store action here
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Run on mount too


    return () => window.removeEventListener('resize', handleResize)
  }, [computeWindow])

  useEffect(() => {
    setIsMobile(device === 'mobile')
  }, [device])

  return { height: size.height, width: size.width, isMobile}
}

export default useWindowSize
