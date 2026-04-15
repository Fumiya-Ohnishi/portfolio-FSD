import { useEffect } from 'react'

interface MetaOptions {
  title: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

export const useMeta = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
}: MetaOptions) => {
  useEffect(() => {
    const baseTitle = 'Fumiya Ohnishi | Frontend Engineer'
    document.title = title ? `${title} | ${baseTitle}` : baseTitle

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let el = document.querySelector<HTMLMetaElement>(selector)
      if (!el) {
        el = document.createElement('meta')
        if (property) el.setAttribute('property', name)
        else el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.content = content
    }

    if (description) setMeta('description', description)
    if (ogTitle || title) setMeta('og:title', ogTitle || title, true)
    if (ogDescription || description)
      setMeta('og:description', ogDescription || description || '', true)
    if (ogImage) setMeta('og:image', ogImage, true)
  }, [title, description, ogTitle, ogDescription, ogImage])
}
