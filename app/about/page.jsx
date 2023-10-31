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
                <p>Running since 12+ years ago in Asia Pacific by young professionals with experience in Energy Trading and Investment. The knowledge they have gained from previous companies makes them full of good and bad experiences and can achieve business targets with precision.</p>
                </div>
                </div>
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
        {/* <!-- Complete Deliveries --> */}
        <div id="deliveries" class="text-center parallax-section">
        <div class="parallax-content">
            <div class="container">
            <div class="row funs">
            <div class="col-md-12 wow zoomIn" data-wow-duration="700ms" data-wow-delay="500ms">
                <i class="fa fa-history"></i>
                <h2>Completed Deliveries</h2>
                <h3 class="timer">600</h3>
                <p>We use an integrated delivery system on our project to create a better environment for our employees and partners, <br/>and deliver better to our customers.</p>
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
                    <h4>ALLOCATION GUARANTEE</h4>
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

                <div class="our-team text-left">
                    <h2 class="text-center heading">Meet Our Team</h2><hr class="title-border"/>
                    <div id="team-carousel" class="carousel slide" data-ride="carousel">
                    {/* <a class="team-carousel-left" href="#team-carousel" data-slide="prev"><i class="fa fa- fa-chevron-left"></i></a>
                    <a class="team-carousel-right" href="#team-carousel" data-slide="next"><i class="fa fa- fa-chevron-right"></i></a> */}
                    
                    <div class="carousel-inner">
                        <div class="item carousel-item active">
                            <div className="row wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
                                <div class="col-md-6 col-lg-4">
                                    <div class="team-member">
                                        <div class="member-image" style={{width:"90%"}}>
                                        <img class="img-fluid" src="images/about-us/ronald.jpg" alt="Team member"/>
                                        </div>
                                        <div class="overlay" style={{width:"90%"}}>
                                        <h4>Mr. Ronald Rigen Tambunan<br/>FOUNDER & CEO</h4>
                                        <p></p>
                                        <ul class="social-icons">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col-md-6 col-lg-8">
                                    <h2><b>Mr. Ronald Rigen Tambunan</b><br/>FOUNDER & CEO</h2>
                                    <p class="text-justify">Mr. Ronald Rigen Tambunan, hailing from Indonesian-Dutch ancestry, was born in the city of Pekanbaru, Riau, Sumatra, Republic of Indonesia. He comes from a family with a rich heritage of dedicated service to an American Oil and Gas Company in Sumatra, Indonesia, formerly known as PT CALTEX PACIFIC INDONESIA, later rebranded as CHEVRON INDONESIA, where they held significant positions within the organization. This background afforded him invaluable insights into the Oil and Gas industry, spanning both production and trading. Mr. Tambunan&apos;s academic journey culminated in his attainment of a degree in Financial Business and e-commerce from Bina Nusantara University, Jakarta, Indonesia, in 2002. Following a brief internship at a multinational corporation, he ventured into international trade, establishing businesses in coal mining, nickel mining, gold mining, oil and gas, aviation, and real estate.</p>
                                </div>
                            </div>
                            <div className="row wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
                                <div class="col-md-6 col-lg-4">
                                    <div class="team-member">
                                        <div class="member-image" style={{width:"90%"}}>
                                        <img class="img-fluid" src="images/about-us/essaobaid.jpg" alt="Team member"/>
                                        </div>
                                        <div class="overlay" style={{width:"90%"}}>
                                        <h4>Mr. Essa Obaid Khalfan Alradah Al Suwaidi<br/>FOUNDER & COUNSELOR</h4>
                                        <p></p>
                                        <ul class="social-icons">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>  
                                <div className="col-md-6 col-lg-8">
                                    <h2><b>Mr. Essa Obaid Khalfan Alradah Al Suwaidi</b><br/>FOUNDER & COUNSELOR</h2>
                                    <p class="text-justify">Mr. Essa Obaid Khalfan Alradah Al Suwaidi (خلفان الرضه السويدى عيسى عبيد) was born in the city of Dubai, United Arab Emirates. As the founder of the Souvenir Group of companies since 1989, Mr. Essa Obaid is a distinguished Government Officer in the United Arab Emirates, with a notable background as a representative of the UAE football team from 1981 to 1985. Mr. Essa Obaid has accumulated a wealth of experience and has made significant contributions to various sectors, including Real Estate, Oil & Gas, Telecom, Electronics, Medical Health Centers, Management & Security Consultancy, and Manufacturing Industries.
</p>
                                </div>
                            </div>
                            <div className="row wow zoomIn" data-wow-duration="700ms" data-wow-delay="300ms">
                                <div class="col-md-6 col-lg-4">
                                    <div class="team-member">
                                        <div class="member-image" style={{width:"90%"}}>
                                        <img class="img-fluid" src="images/about-us/christine.jpg" alt="Team member"/>
                                        </div>
                                        <div class="overlay" style={{width:"90%"}}>
                                        <h4>Mrs. Christine Yuwono<br/>FOUNDER & CFO</h4>
                                        <p></p>
                                        <ul class="social-icons">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-8">
                                    <h2><b>Mrs. Christine Yuwono</b><br/>FOUNDER & CFO</h2>
                                    <p class="text-justify">Mrs. Christine Yuwono (余 氶 儀) was born in the city of Jakarta, Republic of Indonesia, into a reputable Chinese family with established business interests across Indonesia, China, and Australia. Her academic journey led to the completion of her studies in Finance and Accounting at Bina Nusantara University, Jakarta, Indonesia, in 2003. She embarked on her career in a multinational corporation and currently assumes financial oversight responsibilities for her family&apos;s enterprises. Mrs. Yuwono has cultivated a steadfast reputation for adeptly managing company finances, which is an integral facet of her daily routine.</p>
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
