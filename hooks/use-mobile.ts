import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Check if window is defined to avoid errors on server side rendering
    if (typeof window !== 'undefined') {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      const onChange = () => {
        setIsMobile(mql.matches)
      }

      // Initial check
      onChange()

      // Listen for changes
      mql.addEventListener('change', onChange)

      // Clean up event listener
      return () => mql.removeEventListener('change', onChange)
    }
  }, [])

  return isMobile
}
