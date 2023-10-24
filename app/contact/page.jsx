import dynamic from "next/dynamic";
import Script from 'next/script';
const Contact = () => {
    return(
    <>
    <div id="twitter2" class="padding-top text-center parallax-section">
        <div class="parallax-content">
            <div class="container">
                <div class="text-center wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
                <h1><a href="/">Home</a> / Contact</h1>
                </div>
            </div>
        </div>
    </div>

    {/* <!--Contact us --> */}
    <div id="contact-us" class="padding-top" style={{paddingBottom:"30px"}}>
      <div class="container text-center">
        <div class="section-title">
        <h3 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">Get In Touch</h3>
        <hr class="title-border"/>
        <h1 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">Do not Hesitate To Contact Us</h1>
        </div>
        <div class="contact-content text-left">
          <div class="row">
            <div class="col-md-4 wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
            <h2>Phone</h2>
            <h3><i class="fa fa-phone"></i> +971 4 239 4244</h3>
            <h3><i></i><i></i><i></i><i></i><i></i> +971 4 882 1166</h3><br/>
            </div>
            <div class="col-md-4 wow zoomIn" data-wow-duration="700ms" data-wow-delay="400ms">
            <h2>Email</h2>
            <h3><i class="fa fa-envelope"></i> info@agarocorp.com</h3><br/>
            </div>
            <div class="col-md-4 wow zoomIn" data-wow-duration="700ms" data-wow-delay="500ms">
            <h2>Address</h2>
            <h3><i class="fa fa-map-marker"></i> AGAROCORP OIL AND GAS LLC<br/>
            P.O Box 35644 21 Century Building Suite 306<br/>
            Abu Baker Al Siddique Rd - Deira<br/>
            Dubai - United Arab Emirates</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="google-map-section" class="padding-bottom">
        <iframe style={{width:"100%", height:"400px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14432.592634025152!2d55.3299738!3d25.265601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f431cecb970dd%3A0xdec7836113da2f7c!2sAGAROCORP%20OIL%20AND%20GAS%20LLC!5e0!3m2!1sid!2sid!4v1697007878515!5m2!1sid!2sid" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <Script src="cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"/>
    <Script src="js/jquery.prettyPhoto.js"/>
    <Script src="js/jquery.parallax.js"/>
    <Script src="js/jquery.isotope.min.js"/>
    <Script src="js/jquery.easypiechart.min.js"/>
    <Script src="js/jquery.appear.js"/>
    <Script src="js/jquery.inview.min.js"/>
    <Script src="js/wow.min.js"/>
    <Script src="js/jquery.countTo.js"/>
    <Script src="js/smooth-scroll.js"/>
    <Script src="js/canvas.js"/>
    {/* <Script src="js/preloader.js"/> */}
    <Script src="js/jquery.nav.js"/>
    <Script src="js/switcher.js"/>
    <Script src="js/main.js"/>
    <Script src="js/analytics.js"/>
    <Script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"/>
    <Script src="js/iframe.js"/>
    </>
    )
}

export default dynamic (() => Promise.resolve(Contact), {ssr: false})