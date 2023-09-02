import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

// const DEFAULT_LAYOUT = 'AuthorLayout'
const DEFAULT_LAYOUT = 'SimpleMDX'

export async function getStaticProps() {
  // const authorDetails = await getFileBySlug('authors', ['default'])
  const publicationInfo = await getFileBySlug('contents', ['publications'])
  return { props: { publicationInfo } }
}

export default function About({ publicationInfo }) {
  const { mdxSource, frontMatter } = publicationInfo

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
