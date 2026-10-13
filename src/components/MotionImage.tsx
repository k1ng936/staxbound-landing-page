import { useEffect, useState } from 'react'

type MotionImageProps = {
  animatedSrc: string
  animatedWebpSrc: string
  stillSrc: string
  alt: string
  className?: string
  eager?: boolean
}

export function MotionImage({ animatedSrc, animatedWebpSrc, stillSrc, alt, className = '', eager = false }: MotionImageProps) {
  const getMotionPaused = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.localStorage.getItem('staxbound-motion') === 'paused'

  const [reduceMotion, setReduceMotion] = useState(getMotionPaused)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(getMotionPaused())
    update()
    media.addEventListener('change', update)
    window.addEventListener('staxbound-motion-change', update)
    return () => {
      media.removeEventListener('change', update)
      window.removeEventListener('staxbound-motion-change', update)
    }
  }, [])

  return (
    <picture className={`motion-picture ${className}`.trim()}>
      {!reduceMotion && <source srcSet={animatedWebpSrc} type="image/webp" />}
      <img
        src={reduceMotion ? stillSrc : animatedSrc}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        width={1280}
        height={720}
      />
    </picture>
  )
}
