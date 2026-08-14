import { useState } from 'react'
import { photo, photoSrcSet } from '../lib/image'

/**
 * Image with a navy gradient underlay, so a slow or failed network still
 * leaves a deliberate-looking block rather than a broken-image icon.
 */
export default function Photo({
  id,
  alt = '',
  className = '',
  imgClassName = '',
  width = 1200,
  sizes = '100vw',
  loading = 'lazy',
  overlay = null,
  children,
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  // Callers often pass `absolute inset-0` to use a photo as a backdrop. Two
  // position utilities on one element is a coin toss decided by stylesheet
  // order, so only add `relative` when the caller hasn't positioned it.
  const positioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className)

  return (
    <div className={`${positioned ? '' : 'relative'} overflow-hidden bg-navy-900 ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,var(--color-navy-700),var(--color-navy-950))]"
      />
      {!failed && (
        <img
          src={photo(id, { w: width })}
          srcSet={photoSrcSet(id)}
          sizes={sizes}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`relative h-full w-full object-cover transition-opacity duration-[900ms] ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
      {overlay}
      {children}
    </div>
  )
}
