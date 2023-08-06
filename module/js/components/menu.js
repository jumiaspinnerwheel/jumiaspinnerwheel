class Menu extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- MENU STRUCTURE -->
            <div class="menu-page-display">
                <!-- Parent container-->
                <div class="menu-parent-con">
                    <!-- Top container-->
                    <div class="menu-top-con">
                        
                        <!-- Navbar container -->
                        <div class="menu-nav-wrap">
                            <div class="container">
                                <div class="menu-nav-con">
                                    <!-- Web image-->
                                    <div class="menu-nav-web-img"><img class="img-fluid" src="img/icon/jumialogo.png"></div>
                                    <!-- Exit menu icon-->
                                    <div class="menu-nav-exit-img" onclick="Hammenuclose()"><img class="img-fluid" src="img/icon/exit.png"></div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Menu link container -->
                        <div class="menu-link-wrap">
                            
                            <!-- Menu link-->
                            <div class="menu-link-con" id="menu-link-con1" onclick="HomeToMobile()">
                                <div class="container">
                                    <div class="menu-link">
                                        <div class="menu-link-img"><img class="img-fluid" src="img/mobile/mobilecart.png"></div>
                                        <span class="menu-link-txt">Mobile Category</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Menu link-->
                            <div class="menu-link-con" id="menu-link-con2" onclick="HomeToTablet()">
                                <div class="container">
                                    <div class="menu-link">
                                        <div class="menu-link-img"><img class="img-fluid" src="img/tablet/tabletcart.png"></div>
                                        <span class="menu-link-txt">Tablet Category</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Menu link-->
                            <div class="menu-link-con" id="menu-link-con3" onclick="HomeToLaptop()">
                                <div class="container">
                                    <div class="menu-link">
                                        <div class="menu-link-img"><img class="img-fluid" src="img/laptop/laptopcart.png"></div>
                                        <span class="menu-link-txt">Laptop Category</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Menu link-->
                            <div class="menu-link-con" id="menu-link-con5" onclick="HomeToGames()">
                                <div class="container">
                                    <div class="menu-link">
                                        <div class="menu-link-img"><img class="img-fluid" src="img/game/gamecart.png"></div>
                                        <span class="menu-link-txt">Game Category</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Menu link-->
                            <div class="menu-link-con" id="menu-link-con4" onclick="HomeToHeadphone()">
                                <div class="container">
                                    <div class="menu-link">
                                        <div class="menu-link-img"><img class="img-fluid" src="img/headphone/headphonecart.png"></div>
                                        <span class="menu-link-txt">Headphone Category</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Menu link-->
                            <div class="menu-link-con" id="menu-link-con6" onclick="HomeToTV()">
                                <div class="container">
                                    <div class="menu-link">
                                        <div class="menu-link-img"><img class="img-fluid" src="img/tv/tvcart.png"></div>
                                        <span class="menu-link-txt">TV Category</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    
                    <div class="menu-link-line"></div>
                    
                    
                    <!-- Bottom container-->
                    <div class="menu-bot-con">
                        <!-- Menu link-->
                        <div class="menu-link-con" onclick="HomeContact()">
                            <div class="container">
                                <div class="menu-link">
                                    <div class="menu-bot-link-img"><img class="img-fluid" src="img/icon/question.png"></div>
                                    <span class="menu-link-txt">Contact us</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Menu link-->
                        <div class="menu-sign-abs" onclick="HomeSign()">
                            <div class="container">
                                <div class="menu-link">
                                    <div class="menu-bot-link-img"><img class="img-fluid" src="img/icon/user.png"></div>
                                    <span class="menu-link-txt">Create an account with us to receive a free product.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("menu-page", Menu);