import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Preetham Reddy — Data Scientist',
  description: 'Data Scientist specializing in ML pipelines, predictive modeling, time-series forecasting, and translating raw data into measurable business outcomes.',
  keywords: ['Data Scientist', 'Machine Learning', 'MLOps', 'Python', 'AWS SageMaker', 'NLP', 'Forecasting', 'HDBSCAN', 'UMAP'],
  authors: [{ name: 'Preetham Reddy Matta' }],
  openGraph: {
    title: 'Preetham Reddy — Data Scientist',
    description: 'Signal in. Decisions out.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
