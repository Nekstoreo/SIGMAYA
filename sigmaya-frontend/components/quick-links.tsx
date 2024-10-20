import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

interface QuickLink {
  name: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}

interface QuickLinksProps {
  links: QuickLink[]
}

export default function QuickLinks({ links }: QuickLinksProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      {links.map((link, index) => (
        <Link key={index} href={link.href}>
          <Card className="hover:bg-gray-50 transition-colors">
            <CardContent className="flex items-center p-4">
              <link.icon className="h-6 w-6 mr-2 text-indigo-600" />
              <span className="text-sm font-medium">{link.name}</span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}