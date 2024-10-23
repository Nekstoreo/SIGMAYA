'use client'

import { useState } from 'react'
import Navbar from './navbar'
import NewsCard from './news-card'
import PersonalInfoCard from './personal-info-card'

const newsItems = [
  { id: 1, title: "Nuevo programa de becas anunciado", excerpt: "La universidad ha lanzado un nuevo programa de becas para estudiantes de ingeniería.", link: "#" },
  { id: 2, title: "Conferencia internacional próximamente", excerpt: "Destacados académicos de todo el mundo se reunirán en nuestro campus el próximo mes.", link: "#" },
  { id: 3, title: "Éxito en la feria de empleo anual", excerpt: "Más de 500 estudiantes consiguieron oportunidades de prácticas y empleo en el evento de este año.", link: "#" },
]

export default function MainPage() {
  const [userRoles] = useState<Array<'student' | 'teacher'>>(['student', 'teacher'])
  const [userName] = useState('María García')

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userRoles={userRoles} userName={userName} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Bienvenido/a, {userName}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <NewsCard newsItems={newsItems} />
            </div>
            <div>
              <PersonalInfoCard userName={userName} userRoles={userRoles} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}