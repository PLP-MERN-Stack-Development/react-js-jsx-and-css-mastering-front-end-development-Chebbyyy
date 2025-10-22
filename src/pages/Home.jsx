// src/pages/Home.jsx
import React from 'react'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <h2 className="text-lg font-semibold">Home</h2>
        <p className="mt-2 text-sm">Welcome — use the navigation to view the API page.</p>
      </Card>
    </div>
  )
}
