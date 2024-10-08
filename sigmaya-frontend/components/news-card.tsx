import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface NewsItem {
  id: number
  title: string
  excerpt: string
  link: string
}

interface NewsCardProps {
  newsItems: NewsItem[]
}

export default function NewsCard({ newsItems }: NewsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Noticias de la Universidad</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsItems.map((item) => (
            <div key={item.id} className="border-b pb-4 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.excerpt}</p>
              <Link href={item.link} className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-2 inline-flex items-center">
                Leer más <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}