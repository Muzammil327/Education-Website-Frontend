import slugify from 'slugify'
import Link from 'next/link'

import { useFetchMcqs } from './api/page'

export default async function Page() {
  const uniqueBooks = useFetchMcqs()
  return (
    <>
      {uniqueBooks.length === 0 ? (
        <p>Loading...</p>
      ) : (
        uniqueBooks.map((data: any) => (
          <Link
            key={data._id}
            href={`/test/${slugify(data.title, {
              lower: true,
            })}`}
            className=" text-white bg-red-400 z-40 px-4 my-20 pt-9"
          >
            {data.title}
          </Link>
        ))
      )}
    </>
  )
}
