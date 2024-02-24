import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container/page'
import Card from '@/src/components/card/page'
import { CardDataType } from '@/src/types/card/page'
import { Class9CardData } from '@/src/app/class/class-9/data'

const data = {
  title: 'Class 9 | MindBender',
  description:
    'Explore essential resources for Class 9 students in Pakistan: Date Sheets, Past Papers, Results, Study Tools, and more available here!',
  canonical: '/class-9',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class-9',
  keywords: [
    'mindbender class 9',
    'mindbender class 9th',
    'class 9th mindbender',
    'class 9 mindbender',
    'class 9 books',
    'class 9 notes',
    'class 9 past paper',
    'class 9 pairing scheme',
  ],
}

export default function Page() {
  return (
    <>
      <SubHeader title="Class 9" />
      <Container>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-12 mb-12 md:gap-6">
          {Class9CardData.map((data: CardDataType) => (
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
              href={data.href}
              image={data.image}
            />
          ))}
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
        alt: data.title,
      },
    ],
  },
  alternates: {
    canonical: data.canonical,
  },
  robots: {
    index: data.index,
    follow: data.follow,
    googleBot: {
      index: data.index,
      follow: data.follow,
    },
  },
  twitter: {
    title: data.title,
    description: data.description,
    images: {
      url: data.image,
      alt: data.title,
    },
  },
}