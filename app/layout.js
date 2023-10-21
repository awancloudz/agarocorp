import './css/bootstrap.min.css'
import './css/animate.css'
import './css/font-awesome.min.css'
import './css/font.css'
import './css/prettyPhoto.css'
import './css/main.css'
import './css/presets/preset2.css'
import './css/responsive.css'
import './css/skeleton.scss'
import Navbar from '@/component/navbar'
import Footer from '@/component/footer'
import Script from 'next/script'

export const metadata = {
  title: 'AGAROCORP OIL & GAS LLC',
  description: 'We Trade & Transporting Energy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>
      </head>
      <body>
        {/* <div class="preloader">
          <div id="loaderImage"></div>
        </div> */}
        <Navbar/>
        {children}
        <Footer/>
        <Script src="js/jquery.js"/>
        <Script src="js/popper.min.js"/>
        <Script src="js/bootstrap.min.js"/>
      </body>
    </html>
  )
}
