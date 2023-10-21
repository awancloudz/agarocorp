import dynamic from "next/dynamic";
import Script from 'next/script';
const About = () => {
    return(
        <>
        <div id="twitter" class="padding-top text-center parallax-section">
            <div class="parallax-content">
                <div class="container">
                    <div class="text-center wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
                    <h1><a href="/">Home</a> / About</h1>
                    </div>
                </div>
            </div>
        </div>
        
        {/* <!-- About --> */}
        <div id="about-us" class="padding-top" style={{paddingBottom:"60px"}}>
            <div class="container text-center">
                <div class="section-title" style={{paddingBottom:"10px"}}>
                <h3 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">About Company</h3>
                <hr class="title-border"/>
                <h2 class="wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms">We Have a Proud Tradition of Service as Fuel Transporter Since 2012</h2>
                </div>
                <div class="row about-content text-center">
                <div class="col-sm-12 wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
                <p>Running sice 12+ years ago by young profesionals with experience in Energy Trading and Investment. The Knowledge they have gained from previous companies makes them full of good and bad experiences, and can achieve business targets with precision.</p>
                </div>
                </div>
            </div>
        </div>

        {/* <!-- Counter --> */}
        <div id="fun-fact" class="text-center parallax-section">
        <div class="parallax-content">
            <div class="container">
            <div class="row funs">
            <div class="col-md-3 wow zoomIn" data-wow-duration="700ms" data-wow-delay="500ms">
                <i class="fa fa-bookmark"></i>
                <h2>Project Success</h2>
                <h3 class="timer">753</h3>
            </div>
            <div class="col-md-3 wow zoomIn" data-wow-duration="700ms" data-wow-delay="500ms">
                <i class="fa fa-gears"></i>
                <h2>Our Equipments</h2>
                <h3 class="timer">579</h3>
            </div>
            <div class="col-md-3 wow zoomIn" data-wow-duration="700ms" data-wow-delay="500ms">
                <i class="fa fa-group"></i>
                <h3>Satisfied Clients</h3>
                <h3 class="timer">342</h3>
            </div>
            <div class="col-md-3 wow zoomIn" data-wow-duration="700ms" data-wow-delay="500ms">
                <i class="fa fa-globe"></i>
                <h3>Industry Expertise</h3>
                <h3 class="timer">231</h3>
            </div>
            </div>
            </div>
        </div>
        </div>

        <div id="about-us" class="padding-top" style={{paddingBottom:"60px"}}>
            <div class="container text-center">
                <div class="skills-section">
                <div class="container">
                <h2 class="text-center heading">This is Our Expertise</h2>
                <div class="row">
                <div class="col-md-3 col-6 skill wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
                <div class="skill-circle" id="circle-one" data-percent="100"><span class="skill-data">100%</span></div>
                <h4 class="heading">EQUIPEMENTS USED</h4>
                </div>
                <div class="col-md-3 col-6 skill wow zoomIn" data-wow-duration="700ms" data-wow-delay="400ms">
                <div class="skill-circle" id="circle-two" data-percent="100"><span class="skill-data">100%</span></div>
                <h4>FACTORIES PRODUCTION</h4>
                </div>
                <div class="col-md-3 col-6 skill wow zoomIn" data-wow-duration="700ms" data-wow-delay="500ms">
                <div class="skill-circle" id="circle-three" data-percent="100"><span class="skill-data">100%</span></div>
                <h4>MANAGEMENT & SERVICES</h4>
                </div>
                <div class="col-md-3 col-6 skill wow zoomIn" data-wow-duration="700ms" data-wow-delay="600ms">
                <div class="skill-circle" id="circle-four" data-percent="100"><span class="skill-data">100%</span></div>
                <h4>MODERN TECHNOLOGY</h4>
                </div>
                </div>
                </div>
                </div>
                <div class="our-team text-left wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
                <h2 class="text-center heading">Meet Our Team</h2>
                <div id="team-carousel" class="carousel slide" data-ride="carousel">
                <a class="team-carousel-left" href="#team-carousel" data-slide="prev"><i class="fa fa- fa-chevron-left"></i></a>
                <a class="team-carousel-right" href="#team-carousel" data-slide="next"><i class="fa fa- fa-chevron-right"></i></a>
                <div class="carousel-inner">
                <div class="item carousel-item active">
                <div class="row">
                <div class="col-md-6 col-lg-3">
                <div class="team-member">
                <div class="member-image">
                <img class="img-fluid" src="images/about-us/member1.jpg" alt="Team member"/>
                </div>
                <div class="overlay">
                <h4>Bruce Wayne</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Praesent faucibus</p>
                <ul class="social-icons">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3">
                <div class="team-member">
                <div class="member-image">
                <img class="img-fluid" src="images/about-us/member2.jpg" alt="Team member"/>
                </div>
                <div class="overlay">
                <h4>Bruce Wayne</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Praesent faucibus</p>
                <ul class="social-icons">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3">
                <div class="team-member">
                <div class="member-image">
                <img class="img-fluid" src="images/about-us/member3.jpg" alt="Team member"/>
                </div>
                <div class="overlay">
                <h4>Bruce Wayne</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Praesent faucibus</p>
                <ul class="social-icons">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3">
                <div class="team-member">
                <div class="member-image">
                <img class="img-fluid" src="images/about-us/member4.jpg" alt="Team member"/>
                </div>
                <div class="overlay">
                <h4>Bruce Wayne</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Praesent faucibus</p>
                <ul class="social-icons">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="item carousel-item">
                <div class="row">
                <div class="col-md-6 col-lg-3">
                <div class="team-member">
                <div class="member-image">
                <img class="img-fluid" src="images/about-us/member2.jpg" alt="Team member"/>
                </div>
                <div class="overlay">
                <h4>Bruce Wayne</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Praesent faucibus</p>
                <ul class="social-icons">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3">
                <div class="team-member">
                <div class="member-image">
                <img class="img-fluid" src="images/about-us/member1.jpg" alt="Team member"/>
                </div>
                <div class="overlay">
                <h4>Bruce Wayne</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Praesent faucibus</p>
                <ul class="social-icons">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3">
                <div class="team-member">
                <div class="member-image">
                <img class="img-fluid" src="images/about-us/member4.jpg" alt="Team member"/>
                </div>
                <div class="overlay">
                <h4>Bruce Wayne</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Praesent faucibus</p>
                <ul class="social-icons">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-3">
                <div class="team-member">
                <div class="member-image">
                <img class="img-fluid" src="images/about-us/member3.jpg" alt="Team member"/>
                </div>
                <div class="overlay">
                <h4>Bruce Wayne</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. Praesent faucibus</p>
                <ul class="social-icons">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
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

export default dynamic (() => Promise.resolve(About), {ssr: false})
