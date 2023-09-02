import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import MailHander from '@/components/MailHander'

export default function AuthorLayout({ children, frontMatter }) {
  // const { name, avatar, occupation, company, email, twitter, linkedin, github, googlescholar } = frontMatter
  const { name } = frontMatter

  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.author}`}
        description={`About - ${siteMetadata.author}`}
      />
      <div className="flex flex-col items-center pt-8">
        <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">About</h3>
        <div className="flex space-x-3 pt-6">
          {/* <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} /> */}
          {/* <SocialIcon kind="mail" href={`mailto:aaa@` + 'aaa.com'} /> */}
          {/* <SocialIcon kind="mail" href={'mailto:aaa@' + <>&sup3;</> + 'aaa.com'} /> */}
          <MailHander />
          <SocialIcon kind="github" href={siteMetadata.github} />
          <SocialIcon kind="googlescholar" href={siteMetadata.googlescholar} />
        </div>
      </div>
      <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
    </>
  )
}
