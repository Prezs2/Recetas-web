import { useState } from 'react'
export default function RecipeImage({ src, alt, ...props }) {
  const [failedSource, setFailedSource] = useState(null)
  return <img {...props} src={failedSource === src ? '/images/recipe-fallback.svg' : src} alt={alt} onError={() => setFailedSource(src)} />
}
