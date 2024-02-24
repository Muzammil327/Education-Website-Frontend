import type { Metadata } from 'next'
import SubHeader from '@/src/components/layout/header/subheader/page'
import Container from '@/src/components/elements/container/page'
import Card from '@/src/components/card/page'

const data = {
  title: 'Class 9 Sindh Board Books',
  description:
    'You can download the Sindh Board Class 9 book in PDF format, chapter-wise, and for free. Additionally, you can also view the book online.',
  canonical: '/class-9/book/sindh',
  index: true,
  follow: true,
  image: '/opengraph-image.jpg',
  url: 'https://www.mindbenderquiz.com/class-9/book/sindh',
  keywords: [
    'mindbender Class 9 Sindh Board Books',
    'Class 9 Sindh Board Books mindbender',
    'Mindbender Class 9 Sindh Board Books',
    'Class 9 Sindh Board Books Mindbender',
  ],
}

type ClassCardDataType = {
  id: number
  title: string
  description: string
  href: string
  image: string
}

const ClassCardData: ClassCardDataType[] = [
  {
    id: 1,
    title: 'Physics Books',
    href: '/class-9/book/sindh/punjab',
    description:
      'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
  {
    id: 2,
    title: 'Chemistry Books',
    href: '/class-9/book/sindh/chemistry',
    description:
      'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
  {
    id: 3,
    title: 'Biology Books',
    href: '/class-9/book/sindh/biology',
    description:
      'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    image: '/book/books-of-all-classes-and-professional-course.webp',
  },
]

export default function page() {
  return (
    <>
      <SubHeader title="Class 9 Sindh Board Books" />
      <Container>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 py-12 mb-12 md:gap-6">
          {ClassCardData.map((data: ClassCardDataType) => (
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
