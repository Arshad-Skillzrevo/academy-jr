// import AuthorizedChannelPartners from "../components/AuthorisedChannelPartners.jsx";
import Contact from "./Contact.jsx";
export const metadata = {
  title: 'Contact Us - SkillzRevo',
  description:
    'For any questions, concerns, or assistance related to our services, policies, or the delivery of your certificate, please reach out to us using the following',
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  alternates: {
    canonical: 'https://academy.skillzrevo.com/contact-us/',
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    siteName: 'SkillzRevo',
    url: 'https://academy.skillzrevo.com/contact-us/',
    title: 'Contact Us - SkillzRevo',
    description:
      'For any questions, concerns, or assistance related to our services, policies, or the delivery of your certificate, please reach out to us using the following',
    images: [
      {
        url: 'https://academy.skillzrevo.com/partner3.jpg',
        width: 512,
        height: 512,
        alt: 'Contact Us',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - SkillzRevo',
    description:
      'For any questions, concerns, or assistance related to our services, policies, or the delivery of your certificate, please reach out to us using the following',
    images: [
      'https://academy.skillzrevo.com/partner3.jpg',
    ],
    label1: 'Time to read',
    data1: '1 minute',
  },
};

export default function Page(){
    return(
        <>
       <Contact/>
       {/* AuthorizedChannelPartners/> */}
       </>
    )
}