class Signin extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- SIGN IN STRUCTURE -->
            <div class="signin-page-display">
                
                <!-- Parent container-->
                <div class="sign-parent-con">

                    <!-- Header container -->
                    <div class="detail-header-wrap">
                        <div class="container">
                            <div class="col-12 col-md-11 col-lg-12 mx-auto">
                                <div class="sign-main-wrap">
                                    <div class="sign-top-wrap">
                                        <!-- Navbar container-->
                                        <div class="list-nav-con" >
                                            <div class="list-back-btn" id="sign-back-btn" onclick="ListToHome()"><img class="img-fluid" src="img/icon/back.png"></div>
                                            <div class="sign-nav-txt">Sign-Up</div>
                                        </div>
                                
                                        <div class="signup-con">
                                            <div class="sign-jumia-logo"><img src="img/icon/jumialogo.png" class="img-fluid"></div>
                                            <p class="line-height sign-img-lg-txt">Welcome to Jumia</p>
                                            <p class="line-height sign-img-sm-txt">To access Jumia store and purchase any item, you must create an account. The process is fast and only takes a few seconds. Sign up now!</p>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-12 col-md-10 col-lg-6 mx-auto p-2">
                                                <!-- Facebook Button-->
                                                <div class="sign-social-btn" id="facebook-btn" onclick="ToFacebook()">
                                                    <div class="sign-social-img"><img src="img/icon/facebook.png" class="img-fluid"></div>
                                                    <div class="sign-social-txt">Log in using Facebook</div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-10 col-lg-6 mx-auto p-2">
                                                <!-- Facebook Button-->
                                                <div class="sign-social-btn" id="instagram-btn" onclick="ToInstagram()">
                                                    <div class="sign-social-img"><img src="img/icon/instagram.png" class="img-fluid"></div>
                                                    <div class="sign-social-txt">Log in using Instagram</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="sign-bottom-wrap">
                                        <p class="sign-img-sm-txt">For further support, you may visit the Help Center or contact our customer service team.</p>
                                        <div class="sign-jumia-logo mx-auto"><img src="img/icon/jumianame.png" class="img-fluid"></div>		
                                    </div>
                                    
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

customElements.define("signin-page", Signin);