import React from 'react'

// contentful imports
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export const getStaticPaths = async () => {

  const res = await client.getEntries({
    content_type: 'work'
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'work',
    'fields.slug': params.slug
  })

  return {
    props: {
      work: items[0]
    }
  }
}


export default function ExperienceDetail({ work }) {
  console.log(work)
  return (
    <div>

    </div>
  )
}
