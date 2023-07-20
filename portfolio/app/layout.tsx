import "./global.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { aboutMeData, pages, contactMeLinks } from "./data/data";


// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header name={aboutMeData.name} pages={pages} />
      {children}
      <Footer contactMeLinks={contactMeLinks}/>
      </body>
    </html>
  )
}
