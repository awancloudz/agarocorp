'use client'
import { useState, useEffect } from 'react'
import dynamic from "next/dynamic";
import Loading from '@/component/loading';
import Script from 'next/script';
const Home = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
      fetch('/api/oilprice/preview')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
  }, [])

  var textloading;
  if(isLoading){
      textloading = <Loading/>
  } 
  else{
      textloading = "";
  }

  return(
    <>
    {/* <!-- Carousel --> */}
    <div id="carousel-wrapper">
      <div id="home-carousel" class="carousel slide" data-ride="carousel">
        <div class="container">
          <div class="carousel-arrows">
          <a class="home-carousel-left" href="#home-carousel" data-slide="prev"><i class="fa fa-angle-left"></i></a>
          <a class="home-carousel-right" href="#home-carousel" data-slide="next"><i class="fa fa-angle-right"></i></a>
          </div>
        </div>
        <div class="carousel-inner">
          <div class="item carousel-item active" style={{backgroundImage:`url(images/slide/slide2_2.jpg)`}}>
          <div class="carousel-caption container">
          <h1 class="animated fadeInUpBig">WE TRADE & TRANSPORTING ENERGY </h1>
          <h2 class="animated zoomIn">Fueling The Future</h2>
          <p class="animated fadeInDownBig">We are ready to trade & transporting various types of fuel to ASWP (Any Safe World Port). We are here to bring energy to your place. Safety, punctuality and professionalism are at the heart of our work.</p>
          </div>
          </div>
          <div class="item carousel-item" style={{backgroundImage:`url(images/slide/slide1_2.jpg)`}}>
          <div class="carousel-caption container">
          <h1 class="animated fadeInUpBig">WE TRADE & TRANSPORTING ENERGY </h1>
          <h2 class="animated zoomIn">Fueling The Future</h2>
          <p class="animated fadeInDownBig">We are ready to trade & transporting various types of fuel to ASWP (Any Safe World Port). We are here to bring energy to your place. Safety, punctuality and professionalism are at the heart of our work.</p>
          </div>
          </div>
          <div class="item carousel-item" style={{backgroundImage:`url(images/slide/slide3_2.jpg)`}}>
          <div class="carousel-caption container">
          <h1 class="animated fadeInUpBig">WE TRADE & TRANSPORTING ENERGY </h1>
          <h2 class="animated zoomIn">Fueling The Future</h2>
          <p class="animated fadeInDownBig">We are ready to trade & transporting various types of fuel to ASWP (Any Safe World Port). We are here to bring energy to your place. Safety, punctuality and professionalism are at the heart of our work.</p>
          </div>
          </div>
        </div>
        <div class="brand-promotion">
          <div class="container">
            <div class="media row">
              {/* <div class="col-md-4">
                <div class="brand-content wow fadeIn" data-wow-duration="700ms" data-wow-delay="300ms">
                <img class="pull-left img-fluid" src="images/home/brand1.png" alt />
                <div class="media-body">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quam!</p>
                </div>
                </div>
              </div> */}
              <div class="col-md-6">
                <div class="brand-content wow fadeIn" data-wow-duration="700ms" data-wow-delay="400ms">
                <img class="pull-left img-fluid" src="images/home/brand2.png" alt />
                <div class="media-body">
                <h2>INTEGRITY</h2>
                <p>Create and grow sustainable value for our stakeholders through the application.</p>
                </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="brand-content wow fadeIn" data-wow-duration="700ms" data-wow-delay="500ms">
                <img class="pull-left img-fluid" src="images/home/brand3.png" alt />
                <div class="media-body">
                <h2>COMMITMENT</h2>
                <p>To be a recognized as the Oil & Gas Trader company focused on growing sustainable business.</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>

    {/* <!-- About --> */}
    <div id="about-us" class="padding-top">
      <div class="container text-center">
        <div class="section-title" style={{paddingBottom:"10px"}}>
        <h3 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">About Company</h3>
        <hr class="title-border"/>
        <h2 class="wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms">We Have a Proud Tradition of Service as Fuel Transporter Since 2012</h2>
        </div>
        <div class="row about-content text-center">
          <div class="col-sm-12 wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
          <p>Running since 12+ years ago in Asia Pacific by young professionals with experience in Energy Trading and Investment. The knowledge they have gained from previous companies makes them full of good and bad experiences and can achieve business targets with precision.</p>
          </div>
        </div>
        {/* <div class="skills-section">
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
        </div> */}
        {/* <div class="our-team text-left wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
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
        </div> */}
      </div>
    </div>

    {/* <!-- Counter --> */}
    {/* <div id="fun-fact" class="text-center parallax-section">
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
    </div> */}

    {/* <!-- Services --> */}
    <div id="service" class="padding-top padding-bottom">
      <div class="container text-center">
      <div class="section-title" style={{paddingBottom:"10px"}}>
      <h3 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">Our Services</h3>
      <hr class="title-border"/>
      <h1 class="wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms">We Provide Best Services</h1>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
        <div class="service-icon">
        <i class="fa fa-fire"></i>
        </div>
        <div class="service-text">
        <h3>OIL & GAS</h3>
        <p>Agarocorp Oil And Gas LLC engaging in oil and gas trade based in Dubai - United Arab Emirates. These region are the largest trading source for petroleum refine products such as Diesel, Gasoline, Jet A1, Crude, LPG, LNG and so on.</p>
        </div>
        </div>
        <div class="col-lg-6 col-md-6 wow zoomIn" data-wow-duration="700ms" data-wow-delay="400ms">
        <div class="service-icon">
        <i class="fa fa-shield"></i>
        </div>
        <div class="service-text">
        <h3>FUEL TRANSPORTING</h3>
        <p>Consisting of 2 aframax, we are ready to deliver your fuel needs to every port that can be reached by our fleet throughout ASWP (Any Safe World Port).</p>
        </div>
        </div>
      </div>
      </div>
    </div>

    {/* <!-- CEO Message --> */}
    <div id="promo-three" class="text-center parallax-section padding-bottom">
      <div class="parallax-content wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
      <div class="container">
        <div class="section-title" style={{paddingBottom:"10px"}}>
          <h1 class="wow fadeInDown text-white" data-wow-duration="700ms" data-wow-delay="300ms">CEO MESSAGE</h1>
          <hr class="title-border" style={{backgroundColor:"#fff"}}/>
          <h2 class="wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms">&#34;Talent wins games, but teamwork and intelligence wins championships.&#34;</h2><br/>
          <p><b>Ronald Tambunan, CEO of AGAROCORP OIL AND GAS LLC</b></p>
        </div>
      </div>
      </div>
    </div>

    {/* <!-- Complete Deliveries --> */}
    <div id="deliveries" class="text-center parallax-section">
      <div class="parallax-content">
        <div class="container">
        <div class="row funs">
          <div class="col-md-12 wow zoomIn" data-wow-duration="700ms" data-wow-delay="500ms">
            <i class="fa fa-history"></i>
            <h2>Completed Deliveries</h2>
            <h3 class="timer"></h3>
            <p>We use an integrated delivery system on our project to create a better environment for our employees and partners, <br/>and deliver better to our customers.</p>
          </div>
        </div>
        </div>
      </div>
    </div>

    {/* <!-- How we work --> */}
    <div id="service" class="padding-top padding-bottom">
      <div class="container text-center">
      <div class="section-title" style={{paddingBottom:"10px"}}>
      <h3 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">How We Work</h3>
      <hr class="title-border"/>
      <h1 class="wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms">We Constructed Secure Experience For You</h1>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
        <div class="service-icon">
        <i class="fa fa-fax"></i>
        </div>
        <div class="service-text">
        <h3>1.SELECT YOUR SERVICE</h3>
        <p>Please choose our service, we will provide an extraordinary experience for you</p>
        </div>
        </div>
        <div class="col-lg-6 col-md-6 wow zoomIn" data-wow-duration="700ms" data-wow-delay="400ms">
        <div class="service-icon">
        <i class="fa fa-calendar"></i>
        </div>
        <div class="service-text">
        <h3>2.MAKE APPOINTMENT</h3>
        <p>Schedule a meeting to discuss what you want to achieve in your business, we will provide the best solution.</p>
        </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
        <div class="service-icon">
        <i class="fa fa-check-square-o"></i>
        </div>
        <div class="service-text">
        <h3>3.COMPLETE YOUR DATA</h3>
        <p>After your service is selected, complete your company data.</p>
        </div>
        </div>
        <div class="col-lg-6 col-md-6 wow zoomIn" data-wow-duration="700ms" data-wow-delay="400ms">
        <div class="service-icon">
        <i class="fa fa-rocket"></i>
        </div>
        <div class="service-text">
        <h3>4.GET AMAZING SERVICES</h3>
        <p>Our professional services are ready to make your dreams come true.</p>
        </div>
        </div>
      </div>
      </div>
    </div>

    {/* <!-- Why choose us --> */}
    <div id="promo-two" class="text-center parallax-section">
    <div class="parallax-content wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
    <div class="container">
      <div class="section-title" style={{paddingBottom:"10px"}}>
        <h3 class="wow fadeInDown text-white" data-wow-duration="700ms" data-wow-delay="300ms">WHY CHOOSE US</h3>
        <hr class="title-border" style={{backgroundColor:"#fff"}}/>
        <h2 class="wow fadeInUp" data-wow-duration="700ms" data-wow-delay="300ms">Experience Work With Global Industries</h2>
        <p>ARE ALWAYS READY TO SERVE</p>
      </div>
      <div class="row">
        <div class="col-md-6">            
          <a class="btn btn-default" href="/contact">Contact Us</a>
        </div>
        <div class="col-md-6" align="left"><br/>
          <p><i class="fa fa-check"></i> We Have Professional Workers</p>
          <p><i class="fa fa-check"></i> On Time In Progress</p>
          <p><i class="fa fa-check"></i> Friendly To Serve Customers</p>
          <p><i class="fa fa-check"></i> Give The Best & Fair</p>
        </div>
      </div>
    </div>
    </div>
    </div>

    {/* <!--Contact us --> */}
    <div id="contact-us" class="padding-top">
      <div class="container text-center">
        <div class="section-title">
        <h3 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">Get In Touch</h3>
        <hr class="title-border"/>
        <h1 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">Do Not Hesitate To Contact Us</h1>
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
            P.O Box 35644<br/>
            21 Century Building Suite 306<br/>
            Abu Baker Al Siddique Rd - Deira<br/>
            Dubai - United Arab Emirates</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Partnership --> */}
    <div id="clients" class="padding-top">
      <div class="container text-center">
        <div class="row section-title">
        <h3 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">In Collaboration With</h3>
        <hr class="title-border"/>
        </div>
        <div id="clients-carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
        <div class="item carousel-item active">
        <ul>
        <li><a class="img-fluid" href="https://www.emiratesnbd.com/" target='_blank'><img src="images/partner/emiratenbdsmall.png" alt /></a></li>
        <li><a class="img-fluid" href="https://socar.az/" target='_blank'><img src="images/partner/socarlogosmall.png" alt /></a></li>
        <li><a class="img-fluid" href="https://www.pertamina.com/" target='_blank'><img src="images/partner/pertamina_logo.png" alt /></a></li>
        <li><a class="img-fluid" href="https://www.petronas.com/" target='_blank'><img src="images/partner/petronas_logo.png" alt /></a></li>
        </ul>
        </div>
        <div class="item carousel-item">
        <ul>
        <li><a class="img-fluid" href="https://cidatainvestama.com/ " target='_blank'><img src="images/partner/cidata.jpg" alt /></a></li>
        <li><a class="img-fluid" href="https://spmtrading.id/" target='_blank'><img src="images/partner/spm.png" alt /></a></li>
        <li><a class="img-fluid" href="https://www.pertamina.com/" target='_blank'><img src="images/partner/pertamina_logo.png" alt /></a></li>
        <li><a class="img-fluid" href="https://www.petronas.com/" target='_blank'><img src="images/partner/petronas_logo.png" alt /></a></li>
        </ul>
        </div>
        </div>
        <a class="client-left" href="#clients-carousel" data-slide="prev"><i class="fa fa-angle-left"></i></a>
        <a class="client-right" href="#clients-carousel" data-slide="next"><i class="fa fa-angle-right"></i></a>
        </div>
      </div>
    </div>

    {/* <!-- Group of Company --> */}
    <div id="blog" class="padding-top">
      <div class="container text-center">
        <div class="section-title" style={{paddingBottom:0}}>
          <h3 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">Our Clients</h3>
          <hr class="title-border"/>
        </div>
        <div id="clients-carousel2" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
            <div class="item carousel-item active">
              <ul>
                <li><a class="img-fluid" href="#" target='_blank' style={{color:"#000"}}><img src="images/client/kristalin.png" width={150}/><br/><b>GOLD MINING COMPANY</b></a></li>
                <li><a class="img-fluid" href="#" target='_blank' style={{color:"#000"}}><img src="images/client/agaro.png" width={150}/><br/><b>AGARO TRI ENERGI <br/>OIL AND GAS TRADING</b></a></li>
                <li><a class="img-fluid" href="#" target='_blank' style={{color:"#000"}}><img src="images/client/atami.png" width={150}/><br/><b>AGARO TAMBANG MINERAL<br/>MINING CONTRACTOR</b></a></li>
                <li><a class="img-fluid" href="#" target='_blank' style={{color:"#000"}}><img src="images/client/atrina.png" width={150}/><br/><b>AGARO TRI NIAGA<br/>MINING TRADE</b></a></li>
              </ul>
            </div>
            <div class="item carousel-item">
              <ul>                
                <li><a class="img-fluid" href="#" target='_blank' style={{color:"#000"}}><img src="images/client/atrilog.png" width={150} alt /><br/><b>AGARO TRI LOGISTINDO<br/>SHIPPING AND LOGISTICS</b></a></li>
                <li><a class="img-fluid" href="#" target='_blank' style={{color:"#000"}}><img src="images/client/somerfield.png" width={150} alt /><br/><b>INDONESIA & SINGAPORE</b></a></li>
              </ul>
            </div>
          </div>
          <a class="client-left" href="#clients-carousel2" data-slide="prev"><i class="fa fa-angle-left"></i></a>
          <a class="client-right" href="#clients-carousel2" data-slide="next"><i class="fa fa-angle-right"></i></a>
        </div>
      </div>
    </div>

    {/* <!-- Oil Price --> */}
    <div id="pricing-tables" class="padding-top padding-bottom">d
      <div class="container text-center">
        <div class="section-title">
          <h3 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">Global Oil Price</h3>
          <hr class="title-border"/>
          <h1 class="wow fadeInDown" data-wow-duration="700ms" data-wow-delay="300ms">Daily / Weekly Oil Price Information</h1>
        </div>
        <div class="pricing-table text-left">
          <div class="row">
            <div class="col-md-6 col-lg-6" align="center">
            <img src="images/refinery.png" width={"85%"}/>
            </div>
            <div class="col-md-6 col-lg-6">
              <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Futures & Indexes</th><th>Last</th><th>Change</th><th>% Change</th>
                    </tr>
                </thead>
                <tbody>
                {data && data.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{Number.parseFloat(item.last_price).toFixed(2)}</td>
                            <td>{Number.parseFloat(item.change).toFixed(2)}</td>
                            <td>{Number.parseFloat(item.change_percent).toFixed(2)}</td>
                        </tr>                                         
                    )
                })}
                </tbody>
              </table>
              {textloading}
              <a class="btn btn-default" href="/oilprice"><i class="fa fa-arrow-right"></i> Show More</a>
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

export default dynamic (() => Promise.resolve(Home), {ssr: false})

