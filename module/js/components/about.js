class About extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- ABOUT STRUCTURE -->
            <div class="about-page-display">
                <!-- Navbar container -->
                <div class="container">
                    <div class="list-nav-con" >
                        <div class="custom-row">
                        	<div class="list-back-btn" id="about-back-btn"><img class="img-fluid" src="img/icon/back.png"></div>
                        	<span class="help-header-txt one-line nav-left-padding">About us</span>
                        </div>
                    </div>
                </div>

                <!-- Div container -->
                <div class="about-img-container">
                    <div class="col-12 col-md-9 col-lg-7 mx-auto"><div class="about-header-img-wrap"><img class="img-fluid mx-auto" src="img/icon/vision.jpg"></div></div>
                </div>

                <div class="about-us-con">
                    <div class="container">
                        <p class="about-lg-txt web-name">About us</p>
                        <div class="row">
                            <div class="col-6 col-md-5 col-lg-3 p-2 mx-auto">
                                <div class="vision-wrap">
                                    <div class="vision-img-wrap"><img src="img/icon/vision1.jpg" class="img-fluid"></div>
                                    <p class="vision-txt">Access 100% Genuine Products from Local & International Vendors</p>
                                </div>
                            </div>
                            <div class="col-6 col-md-5 col-lg-3 p-2 mx-auto">
                                <div class="vision-wrap">
                                    <div class="vision-img-wrap"><img src="img/icon/vision2.jpg" class="img-fluid"></div>
                                    <p class="vision-txt">Buy Anything You want online at the Best Prices</p>
                                </div>
                            </div>
                            <div class="col-6 col-md-5 col-lg-3 p-2 mx-auto">
                                <div class="vision-wrap">
                                    <div class="vision-img-wrap"><img src="img/icon/vision3.jpg" class="img-fluid"></div>
                                    <p class="vision-txt">Search, Order on all Platforms, Pay on Delivery</p>
                                </div>
                            </div>
                            <div class="col-6 col-md-5 col-lg-3 p-2 mx-auto">
                                <div class="vision-wrap">
                                    <div class="vision-img-wrap"><img src="img/icon/vision4.jpg" class="img-fluid"></div>
                                    <p class="vision-txt">Assisting Our Customers for the best Shopping Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="history-con">
                    <div class="container">
                        <p class="about-lg-txt web-name">Jumia Today</p>
                        <div class="col-12 col-md-11 col-10 mx-auto">
                            <div class="row">
                                <div class="col-6 col-md-6 col-lg-4 p-2 mx-auto">
                                    <div class="vision-wrap">
                                        <div class="vision-img-wrap"><img src="img/icon/today1.jpg" class="img-fluid"></div>
                                        <p class="vision-txt">Countless Free Products</p>
                                    </div>
                                </div>
                                <div class="col-6 col-md-6 col-lg-4 p-2 mx-auto">
                                    <div class="vision-wrap">
                                        <div class="vision-img-wrap"><img src="img/icon/today2.jpg" class="img-fluid"></div>
                                        <p class="vision-txt">Over 50,000 International & National Brands</p>
                                    </div>
                                </div>
                                <div class="col-6 col-md-6 col-lg-4 p-2 mx-auto">
                                    <div class="vision-wrap">
                                        <div class="vision-img-wrap"><img src="img/icon/today3.jpg" class="img-fluid"></div>
                                        <p class="vision-txt">13 Africans Countries</p>
                                    </div>
                                </div>
                                <div class="col-6 col-md-6 col-lg-4 p-2 mx-auto">
                                    <div class="vision-wrap">
                                        <div class="vision-img-wrap"><img src="img/icon/today4.jpg" class="img-fluid"></div>
                                        <p class="vision-txt">10 Commercial Events</p>
                                    </div>
                                </div>
                                <div class="col-6 col-md-6 col-lg-4 p-2 mx-auto">
                                    <div class="vision-wrap">
                                        <div class="vision-img-wrap"><img src="img/icon/today5.jpg" class="img-fluid"></div>
                                        <p class="vision-txt">#1 E-Commerce Company</p>
                                    </div>
                                </div>
                                <div class="col-6 col-md-6 col-lg-4 p-2 mx-auto">
                                    <div class="vision-wrap">
                                        <div class="vision-img-wrap"><img src="img/icon/today6.jpg" class="img-fluid"></div>
                                        <p class="vision-txt">Over 10,000 Acrive Vendors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="about-us-con">
                    <div class="container">
                        <p class="about-lg-txt web-name">Jumia History</p>
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-6 mx-auto">
                                <div class="vision-wrap">
                                    <ul>
                                        <li class="li-sm-txt">2012: Africa internet Group (AIG) launches Jumia in Nigeria, Morocco, South Africa and Egypt.</li>
                                        <li class="li-sm-txt">2014: Jumia introduces Black Friday in Nigeria
                                            <ul>
                                                <li class="li-sm-txt">Jumia launches Jumia Force an independent sales consultant program catering to populations that do not have access to internet.</li>
                                            </ul>
                                        </li>
                                        <li class="li-sm-txt">2015: Jumia Black Friday attracts 2.3 million visitors in Nigeria
                                            <ul>
                                                <li class="li-sm-txt">Jumia introduces Jumia Pay a secure payment gateway for people to shop on all Jumia services.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 mx-auto">
                                <div class="vision-wrap">
                                    <ul>
                                        <li class="li-sm-txt">2012: Africa internet Group (AIG) launches Jumia in Nigeria, Morocco, South Africa and Egypt.</li>
                                        <li class="li-sm-txt">2014: Jumia introduces Black Friday in Nigeria
                                            <ul>
                                                <li class="li-sm-txt">Jumia launches Jumia Force an independent sales consultant program catering to populations that do not have access to internet.</li>
                                            </ul>
                                        </li>
                                        <li class="li-sm-txt">2015: Jumia Black Friday attracts 2.3 million visitors in Nigeria
                                            <ul>
                                                <li class="li-sm-txt">Jumia introduces Jumia Pay a secure payment gateway for people to shop on all Jumia services.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-con">
                    <div class="container">
                        <p class="about-lg-txt web-name">Jumia Awards</p>
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-6 mx-auto">
                                <div class="vision-wrap">
                                    <ul>
                                        <li class="li-sm-txt">2013: Jumia Nigeria is the first African company to win the world retail awards in 2013 with the previous winners including ASOS and Zappos.com
                                            <ul>
                                                <li class="li-sm-txt">Leadership ICT company of the year 2013 - Jumia</li>
                                                <li class="li-sm-txt">Ecommerce website of the year (Beacon of ICT Award).</li>
                                                <li class="li-sm-txt">Success Digest - Innovative business of the year 2013.</li>
                                            </ul>
                                        </li>
                                        <li class="li-sm-txt">Success Digest - Innovative business of the year 2013.
                                            <ul>
                                                <li class="li-sm-txt">Orange Academy brand wall of Fame - Jumia Nigeria.</li>
                                                <li class="li-sm-txt">Rima Awards - Best use of Mobile App - Jumia App.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-6 mx-auto">
                                <div class="vision-wrap">
                                    <ul>
                                        <li class="li-sm-txt">2016: Jumia is ranked among the MIT 50 Smartest Companies globally.</li>
                                        <li class="li-sm-txt">2017: Jumia is ranked, for the second year in a row, in the MIT 50 Smartest Companies globally.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 p-2 mx-auto">
                            	<div class="about-foot-con">
                            		<img class="img-fluid" src="img/icon/footer1.jpg">
                            		<div class="about-foot-txt">Brand Journalists Association Awards BJAN (2013)</div>
                            	</div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 p-2 mx-auto">
                            	<div class="about-foot-con">
                            		<img class="img-fluid" src="img/icon/footer2.jpg">
                            		<div class="about-foot-txt">World Retail Awards 2013</div>
                            	</div>
                            </div>
                            <div class="col-12 col-md-12 col-lg-4 p-2 mx-auto">
                            	<div class="about-foot-con">
                            		<img class="img-fluid" src="img/icon/footer3.jpg">
                            		<div class="about-foot-txt">e-Commerce Website of the Year (Beacon of ICT Award)</div>
                            	</div>
                            </div>
                            <!-- Footer line-->
                            <div class="foot-line"></div>
                            
                            <!-- Footer bottom -->
                            <div class="foot-bot-wrap" >
                     	    	<div class="foot-bot-img"><img src="img/icon/jumialogo.png" class="img-fluid" ></div>
                            	<div class="foot-bot-txt" onclick="AboutPolicy()">Terms of use</div>
                            	<div class="foot-bot-img" onclick="AboutSupport()"><img src="img/icon/telegram.png"  class="img-fluid"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("about-page", About);