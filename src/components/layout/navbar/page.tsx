'use client'
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../../elements/container/page'

type Slug = {
  name: string
  href: string
}

const navigation: Slug[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Quiz', href: '/quiz' },
  { name: 'Online Quiz', href: '/online-quiz' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'Blogs', href: '/blogs' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={`header ${scrolling ? 'header-scrolled' : ''}`}>
      <div className={`navbar ${scrolling ? 'navbar-fixed' : ''}`}>
        <Container>
          <nav aria-label="Global">
            <div className="logo">
              <Link href="/">
                <span>Your Company</span>
                <Image src="/logo.png" alt="Logo" height={99} width={210} />
              </Link>
            </div>
            <div className="menubutton">
              <button type="button" onClick={() => setMobileMenuOpen(true)}>
                <span>Open main menu</span>
                <Bars3Icon className="icon" aria-hidden="true" />
              </button>
            </div>
            <div className="menu">
              {navigation.map((item: Slug) => (
                <Link key={item.name} href={item.href}>
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </Container>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-2 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Muzammil</span>
                <Image src="/logo.png" alt="Logo" height={300} width={180} />
              </Link>
              <button
                type="button"
                className="-m-2.0 rounded-md p-3.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </section>
  )
}
