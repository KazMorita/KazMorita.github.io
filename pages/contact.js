import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

// const DEFAULT_LAYOUT = 'AuthorLayout'
// const DEFAULT_LAYOUT = 'SimpleMDX'
const DEFAULT_LAYOUT = 'ContactLayout'

export async function getStaticProps() {
  // const authorDetails = await getFileBySlug('authors', ['default'])
  const contactInfo = await getFileBySlug('contents', ['contact'])
  return { props: { contactInfo } }
}

export default function About({ contactInfo }) {
  const { mdxSource, frontMatter } = contactInfo

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
