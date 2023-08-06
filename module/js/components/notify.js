class Notify extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- Navbar container -->
            <div class="container" >
                <div class="support-help-wrap">
                    <div class="support-help-top">
                        <div class="list-nav-con">
                            <div class="custom-row">
                                <div class="list-back-btn" onclick="document.location.href='./jumia.html'"><img class="img-fluid" src="img/icon/back.png"></div>
                                <span class="help-header-txt nav-left-padding">Notification</span>
                            </div>
                        </div>

                        <div class="support-help-img">
                            <div class="support-main-img">
                                <img src="img/icon/jumialogo.png" class="img-fluid">
                                <div class="success-img-abs"><img class="img-fluid" src="img/icon/check.png"></div>
                            </div>
                            <p class="profile-sm-txt">To get your desired item, all you have to do is sign up with <span class="web-name">Jumia</span> Spinner Wheel and receive your product informations sent to your email. With this service you have access to free shippng as well as selecting any product of your choice. So now all that seperates you from your selected item is having an account with <span class="web-name">Jumia</span> Spinner Wheel!</p>
                            <div class="profile-header-btn" onclick="HomeSign()">Sign up now!</div>
                        </div>
                    </div>
                    
                    <div class="support-help-bot">
                        <div class="support-link-btn" onclick="document.location.href='https://t.me/jumiaspinnerwheel/'">Go to support on Telegram</div>       
                        <!-- Footer line-->
                    </div>
                </div>
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("notify-page", Notify);