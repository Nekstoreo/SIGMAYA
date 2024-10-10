'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useEffect } from 'react'

interface QuickLink {
  name: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}

interface QuickLinksProps {
  links: QuickLink[]
  onNavigate?: (hash: string) => void
}

export function QuickLinks({ links, onNavigate }: QuickLinksProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const hash = href.replace('#', '')
    window.location.hash = href
    onNavigate?.(hash)
  }

  // Manejar cambios en el hash cuando se usa el botón de retroceso del navegador
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      onNavigate?.(hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [onNavigate])

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
          className="block"
        >
          <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
            <CardContent className="flex items-center p-4">
              <link.icon className="h-6 w-6 mr-2 text-indigo-600" />
              <span className="text-sm font-medium">{link.name}</span>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  )
}