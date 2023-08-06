class Help extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- HELP STRUCTURE -->
            <div class="help-page-display">
                <!-- Navbar container -->
                <div class="list-nav-wrap">
                    <div class="container" >
                        <div class="support-help-wrap">
                            <div class="support-help-top">
                                <div class="list-nav-con">
                                    <div class="custom-row">
                                        <div class="list-back-btn" id="contact-back-btn"><img class="img-fluid" src="img/icon/back.png"></div>
                                        <span class="help-header-txt one-line nav-left-padding">Support</span>
                                    </div>
                                </div>

                                <div class="support-help-img">
                                    <div class="support-main-img">
                                        <img src="img/icon/jumialogo.png" class="img-fluid">
                                    </div>
                                    <p class="profile-sm-txt">Create an account with us to receive a free product. And if you would like to enquire more about promo, contact us on Jumia.</p>
                                    <div class="profile-header-btn" onclick="SupportSign()">Sign up</div>
                                </div>
                            </div>
                            
                            <div class="support-help-bot">
                                <div class="support-link-btn" onclick="document.location.href='https://t.me/jumiaspinnerwheel/'">Go to support on Telegram</div>       
                                <!-- Footer line-->
                                <div class="foot-line"></div>
                                
                                <!-- Footer bottom -->
                                <div class="foot-bot-wrap" >
                                    <div class="foot-bot-img"><img src="img/icon/jumialogo.png" class="img-fluid" ></div>
                                    <div class="foot-bot-txt" onclick="SupportPolicy()">Terms of use</div>
                                    <div class="foot-bot-img"><img src="img/icon/telegram.png" class="img-fluid"></div>
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

customElements.define("help-page", Help);