import {
  BookOpenIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { FaPeopleArrows, FaReadme } from 'react-icons/fa6'

export default function Footer() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 outline-none flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button type="submit" className="btn1">
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 md:gap-y-6 gap-y-10 lg:pt-2">
            <div className="flex items-center">
              <div className="rounded-md bg-white/5 p-2 mr-5 ring-1 ring-indigo-600">
                <QuestionMarkCircleIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </div>
              <Link href="/quiz">
                <dt className="font-semibold text-white">Quiz</dt>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="rounded-md bg-white/5 p-2 mr-5 ring-1 ring-indigo-600">
                <QuestionMarkCircleIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </div>
              <Link href="/online-quiz">
                <dt className="font-semibold text-white">Online Quiz</dt>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="rounded-md bg-white/5 p-2 mr-5 ring-1 ring-indigo-600">
                <BookOpenIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </div>
              <Link href="/class">
                <dt className="font-semibold text-white">Classes</dt>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="rounded-md bg-white/5 p-2 ring-1 mr-5 ring-indigo-600">
                <FaReadme className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <Link href="/tutorials">
                <dt className="font-semibold text-white">Tutorials</dt>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="rounded-md bg-white/5 p-2 ring-1 mr-5 ring-indigo-600">
                <FaReadme className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <Link href="/blogs">
                <dt className="font-semibold text-white">Blogs</dt>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="rounded-md bg-white/5 p-2 ring-1 mr-5 ring-indigo-600">
                <FaPeopleArrows
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </div>
              <Link href="/team">
                <dt className="font-semibold text-white">Team</dt>
              </Link>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}
