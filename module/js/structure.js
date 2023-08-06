// -------------------- -------------------- PAGE DISPLAY ONCLICK BUTTON FUNCTIONS -------------------- --------------------// --------------------  -------------------- 
    // -------------------- Page ID selectors -------------------- 
        //  
        var about = document.getElementById("about-page");
        // -------------------- 
    
        //  
        var checkoutf = document.getElementById("checkoutf-page");
        // -------------------- 
    
        //  
        var checkouts = document.getElementById("checkouts-page");
        // -------------------- 
    
        //  
        var detail = document.getElementById("detail-page");
        // -------------------- 
    
        //  
        var facebook = document.getElementById("facebook-page");
        // -------------------- 
    
        //  
        var help = document.getElementById("help-page");
        // -------------------- 
    
        //  
        var home = document.getElementById("home-page");
        // -------------------- 
    
        //  
        var instagram = document.getElementById("instagram-page");
        // -------------------- 
    
        //  
        var item = document.getElementById("item-page");
        // -------------------- 
    
        //  
        var list = document.getElementById("list-page");
        // -------------------- 
    
        //  
        var menu = document.getElementById("menu-page");
        // -------------------- 
    
        //  
        var policy = document.getElementById("policy-page");
        // -------------------- 
    
        //  
        var signin = document.getElementById("signin-page");
        // --------------------
    
        //  
        var notify = document.getElementById("notify-page");
        // --------------------
    
        //  
        var success = document.getElementById("success-page");
        // --------------------
    //  -------------------- -------------------- --------------------





    // --------------------  -------------------- 
        //  
        var hamburger = document.getElementById("hamburger-screen");
        // -------------------- 
    
        //  
        var main = document.getElementById("main-screen");
        // --------------------
    //  -------------------- -------------------- --------------------





    // --------------------  -------------------- 
        //  Hamburger menu open
        function HamburgerOpen(){
            if (hamburger.classList.contains("hamburger-menu")) {
                hamburger.classList.add("hamburger-show");
                hamburger.classList.remove("hamburger-hide");
            };
        }
        // --------------------
        
        //  Hamburger menu close
        function HamburgerClose(){
            if (hamburger.classList.contains("hamburger-menu")) {
                hamburger.classList.add("hamburger-hide");
                hamburger.classList.remove("hamburger-show");
            };
        }
        // --------------------

        //  Main screen open
        function ScreenOpen(){
            if (main.classList.contains("main-screen")) {
                main.classList.add("screen-show");
                main.classList.remove("screen-hide");
            };
        }
        // --------------------
        
        //  Main screen close
        function ScreenClose(){
            if (main.classList.contains("main-screen")) {
                main.classList.add("screen-hide");
                main.classList.remove("screen-show");
            };
        }
        // --------------------
    //  -------------------- -------------------- --------------------
// -------------------- -------------------- -------------------- -------------------- -------------------- 










// -------------------- -------------------- PAGE DISPLAY ONCLICK BUTTON FUNCTIONS -------------------- --------------------
    
    // -------------------- HOME PAGE FUNCTIONS -------------------- 
        //  To menu
            function Hammenuopen() {
                HamburgerOpen();
                ScreenClose();
            }
        // -------------------- 
        
        //  To supprot
            function HomeToSupport() {
                about.style.display = "none";
                checkoutf.style.display = "none";
                checkouts.style.display = "none";
                detail.style.display = "none";
                facebook.style.display = "none";
                help.style.display = "flex"; // -------------------- Container --------------------
                home.style.display = "none";
                instagram.style.display = "none";
                item.style.display = "none";
                list.style.display = "none";
                policy.style.display = "none";
                signin.style.display = "none";
                notify.style.display = "none";
                success.style.display = "none";
            }
        // -------------------- 
        
        //  To About
            function HomeToAbout() {
                about.style.display = "flex"; // -------------------- Container --------------------
                checkoutf.style.display = "none";
                checkouts.style.display = "none";
                detail.style.display = "none";
                facebook.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                instagram.style.display = "none";
                item.style.display = "none";
                list.style.display = "none";
                policy.style.display = "none";
                signin.style.display = "none";
                notify.style.display = "none";
                success.style.display = "none";
            }
        // -------------------- 
        
        //  To Item
            function HomeToItem() {
                about.style.display = "none";
                checkoutf.style.display = "none";
                checkouts.style.display = "none";
                detail.style.display = "none";
                facebook.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                instagram.style.display = "none";
                item.style.display = "flex"; // -------------------- Container --------------------
                list.style.display = "none";
                policy.style.display = "none";
                signin.style.display = "none";
                notify.style.display = "none";
                success.style.display = "none";
            }
        // -------------------- 
        
        //  To List
            function HomeToList() {
                about.style.display = "none";
                checkoutf.style.display = "none";
                checkouts.style.display = "none";
                detail.style.display = "none";
                facebook.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                instagram.style.display = "none";
                item.style.display = "none";
                list.style.display = "flex"; // -------------------- Container --------------------
                policy.style.display = "none";
                signin.style.display = "none";
                notify.style.display = "none";
                success.style.display = "none";
            }
        // --------------------
        
        //  To Sign In
            function HomeToSignIn() {
                about.style.display = "none";
                checkoutf.style.display = "none";
                checkouts.style.display = "none";
                detail.style.display = "none";
                facebook.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                instagram.style.display = "none";
                item.style.display = "none";
                list.style.display = "none";
                policy.style.display = "none";
                notify.style.display = "none";
                signin.style.display = "flex"; // -------------------- Container --------------------
                success.style.display = "none";
            }
        // --------------------
        
        //  To Policy
            function HomeToPolicy() {
                about.style.display = "none";
                checkoutf.style.display = "none";
                checkouts.style.display = "none";
                detail.style.display = "none";
                facebook.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                instagram.style.display = "none";
                item.style.display = "none";
                list.style.display = "none";
                notify.style.display = "none";
                policy.style.display = "flex"; // -------------------- Container --------------------
                signin.style.display = "none";
                success.style.display = "none";
            }
        // -------------------- 
        
        //  To List-Mobile
            function HomeToMobile() {
                HomeToList();
				HomeToMobileList();
            }
        // -------------------- 
        
        //  To List-Tablet
            function HomeToTablet() {
                HomeToList();
				HomeToTabletList();
            }
        // -------------------- 
        
        //  To List-Laptop
            function HomeToLaptop() {
                HomeToList();
				HomeToLaptopList();
            }
        // -------------------- 
        
        //  To List-Headphone
            function HomeToHeadphone() {
                HomeToList();
				HomeToHeadphoneList();
            }
        // -------------------- 
        
        //  To List-Games
            function HomeToGames() {
                HomeToList();
				HomeToGamesList();
            }
        // -------------------- 
        
        //  To List-TV
            function HomeToTV() {
                HomeToList();
				HomeToTVList();
            }
        // -------------------- 
        
        // Profile option - open
        function profileOpen() {
            document.getElementById("profile-wrap").style.display = "flex";
        } 
        
        // Profile option - closed
        function profileClose() {
            document.getElementById("profile-wrap").style.display = "none";
        }

        // -------------------- 
        
        //  

        // -------------------- 
        
        //  

        // -------------------- 
    //  -------------------- -------------------- -------------------- 





    // -------------------- ITEM PAGE FUNCTIONS  -------------------- 
       //  
       function itemCarousel() {
       		// CAROUSEL BUTTON & BORDER
       		document.getElementById("item-carousel-wrap1").style.border = `0.1875em solid rgba(${ ItemSelector[ItemIndex].color } 1)`;
			document.getElementById("item-carousel-wrap2").style.border = "none";
       		document.getElementById("item-carousel-wrap3").style.border = "none";
       		document.getElementById("item-carousel-wrap4").style.border = "none";
       		document.getElementById("item-carousel-wrap5").style.border = "none";
       		// CAROUSEL PIGINATION
       		// 1
       		document.getElementById("item-carousel-pigination-con1").style.background = `rgba(${ ItemSelector[ItemIndex].color } 1)`;
       		document.getElementById("item-carousel-pigination-con1").style.borderRadius = "0px";
       		document.getElementById("item-carousel-pigination-con1").style.margin = "0 0.35em 0 0.35em";
       		document.getElementById("item-carousel-pigination-con1").style.transform = "rotate(45deg)";
       		document.getElementById("item-carousel-pigination-con1").style.height = "0.1em";
       		document.getElementById("item-carousel-pigination-con1").style.width = "0.1em";
       		document.getElementById("item-carousel-pigination-con1").style.boxShadow = `0 0 1px 0.5px rgba(${ ItemSelector[ItemIndex].color } 1),  0 0 1px 1.75px rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		// 2
       		document.getElementById("item-carousel-pigination-con2").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con2").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con2").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con2").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.boxShadow = "none";
       		// 3
       		document.getElementById("item-carousel-pigination-con3").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con3").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con3").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con3").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.boxShadow = "none";
       		// 4
       		document.getElementById("item-carousel-pigination-con4").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con4").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con4").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con4").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.boxShadow = "none";
       		// 5
       		document.getElementById("item-carousel-pigination-con5").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con5").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con5").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con5").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.boxShadow = "none";
       }
       // --------------------

       //  
       function Carousel1() {
       		// CAROUSEL BUTTON & BORDER
       		document.getElementById("item-carousel-wrap1").style.border = `0.1875em solid rgba(${ ItemSelector[ItemIndex].color } 1)`;
			document.getElementById("item-carousel-wrap2").style.border = "none";
       		document.getElementById("item-carousel-wrap3").style.border = "none";
       		document.getElementById("item-carousel-wrap4").style.border = "none";
       		document.getElementById("item-carousel-wrap5").style.border = "none";
       		// CAROUSEL PIGINATION
       		// 1
       		document.getElementById("item-carousel-pigination-con1").style.background = `rgba(${ ItemSelector[ItemIndex].color } 1)`;
       		document.getElementById("item-carousel-pigination-con1").style.borderRadius = "0px";
       		document.getElementById("item-carousel-pigination-con1").style.margin = "0 0.35em 0 0.35em";
       		document.getElementById("item-carousel-pigination-con1").style.transform = "rotate(45deg)";
       		document.getElementById("item-carousel-pigination-con1").style.height = "0.1em";
       		document.getElementById("item-carousel-pigination-con1").style.width = "0.1em";
       		document.getElementById("item-carousel-pigination-con1").style.boxShadow = `0 0 1px 0.5px rgba(${ ItemSelector[ItemIndex].color } 1),  0 0 1px 1.75px rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		// 2
       		document.getElementById("item-carousel-pigination-con2").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con2").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con2").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con2").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.boxShadow = "none";
       		// 3
       		document.getElementById("item-carousel-pigination-con3").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con3").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con3").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con3").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.boxShadow = "none";
       		// 4
       		document.getElementById("item-carousel-pigination-con4").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con4").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con4").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con4").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.boxShadow = "none";
       		// 5
       		document.getElementById("item-carousel-pigination-con5").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con5").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con5").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con5").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.boxShadow = "none";
       		
       		// Image Change
       		document.getElementById("item-img-display").innerHTML = `<img class="item-img-fluid" src="img/${ ItemSelector[ItemIndex].image1 }" >`;
            document.getElementById("item-img-display").style.justifyContent = "center";
       }
       // --------------------   
       
       //  
       function Carousel2() {
       		// CAROUSEL BUTTON & BORDER
       		document.getElementById("item-carousel-wrap1").style.border = "none";
       		document.getElementById("item-carousel-wrap2").style.border = `0.1875em solid rgba(${ ItemSelector[ItemIndex].color } 1)`;
       		document.getElementById("item-carousel-wrap3").style.border = "none";
       		document.getElementById("item-carousel-wrap4").style.border = "none";
       		document.getElementById("item-carousel-wrap5").style.border = "none";
       		// CAROUSEL PIGINATION
       		// 1
       		document.getElementById("item-carousel-pigination-con1").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con1").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con1").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con1").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.boxShadow = "none";
       		// 2
       		document.getElementById("item-carousel-pigination-con2").style.background = `rgba(${ ItemSelector[ItemIndex].color } 1)`;
       		document.getElementById("item-carousel-pigination-con2").style.borderRadius = "0px";
       		document.getElementById("item-carousel-pigination-con2").style.margin = "0 0.35em 0 0.35em";
       		document.getElementById("item-carousel-pigination-con2").style.transform = "rotate(45deg)";
       		document.getElementById("item-carousel-pigination-con2").style.height = "0.1em";
       		document.getElementById("item-carousel-pigination-con2").style.width = "0.1em";
       		document.getElementById("item-carousel-pigination-con2").style.boxShadow = `0 0 1px 0.5px rgba(${ ItemSelector[ItemIndex].color } 1),  0 0 1px 1.75px rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		// 3
       		document.getElementById("item-carousel-pigination-con3").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con3").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con3").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con3").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.boxShadow = "none";
       		// 4
       		document.getElementById("item-carousel-pigination-con4").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con4").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con4").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con4").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.boxShadow = "none";
       		// 5
       		document.getElementById("item-carousel-pigination-con5").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con5").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con5").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con5").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.boxShadow = "none";
       		
       		// Image Change
       		document.getElementById("item-img-display").innerHTML = `<img class="item-img-fluid" src="img/${ ItemSelector[ItemIndex].image2 }" >`;
            document.getElementById("item-img-display").style.justifyContent = "center";
       }
       // --------------------
       
       //  
       function Carousel3() {
       		// CAROUSEL BUTTON & BORDER
       		document.getElementById("item-carousel-wrap1").style.border = "none";
       		document.getElementById("item-carousel-wrap2").style.border = "none";
       		document.getElementById("item-carousel-wrap3").style.border = `0.1875em solid rgba(${ ItemSelector[ItemIndex].color } 1)`;
       		document.getElementById("item-carousel-wrap4").style.border = "none";
       		document.getElementById("item-carousel-wrap5").style.border = "none";
       		// CAROUSEL PIGINATION
       		// 1
       		document.getElementById("item-carousel-pigination-con1").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con1").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con1").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con1").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.boxShadow = "none";
       		// 2
       		document.getElementById("item-carousel-pigination-con2").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con2").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con2").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con2").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.boxShadow = "none";
       		// 3
       		document.getElementById("item-carousel-pigination-con3").style.background = `rgba(${ ItemSelector[ItemIndex].color } 1)`;
       		document.getElementById("item-carousel-pigination-con3").style.borderRadius = "0px";
       		document.getElementById("item-carousel-pigination-con3").style.margin = "0 0.35em 0 0.35em";
       		document.getElementById("item-carousel-pigination-con3").style.transform = "rotate(45deg)";
       		document.getElementById("item-carousel-pigination-con3").style.height = "0.1em";
       		document.getElementById("item-carousel-pigination-con3").style.width = "0.1em";
       		document.getElementById("item-carousel-pigination-con3").style.boxShadow = `0 0 1px 0.5px rgba(${ ItemSelector[ItemIndex].color } 1),  0 0 1px 1.75px rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		// 4
       		document.getElementById("item-carousel-pigination-con4").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con4").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con4").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con4").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.boxShadow = "none";
       		// 5
       		document.getElementById("item-carousel-pigination-con5").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con5").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con5").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con5").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.boxShadow = "none";
       		
       		// Image Change
       		document.getElementById("item-img-display").innerHTML = `<img class="item-img-fluid" src="img/${ ItemSelector[ItemIndex].image3 }" >`;
            document.getElementById("item-img-display").style.justifyContent = "center";
       }
       // --------------------
      
       //  
       function Carousel4() {
       		// CAROUSEL BUTTON & BORDER
       		document.getElementById("item-carousel-wrap1").style.border = "none";
       		document.getElementById("item-carousel-wrap2").style.border = "none";
       		document.getElementById("item-carousel-wrap3").style.border = "none";
       		document.getElementById("item-carousel-wrap4").style.border = `0.1875em solid rgba(${ ItemSelector[ItemIndex].color } 1)`;
       		document.getElementById("item-carousel-wrap5").style.border = "none";
       		// CAROUSEL PIGINATION
       		// 1
       		document.getElementById("item-carousel-pigination-con1").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con1").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con1").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con1").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.boxShadow = "none";
       		// 2
       		document.getElementById("item-carousel-pigination-con2").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con2").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con2").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con2").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.boxShadow = "none";
       		// 3
       		document.getElementById("item-carousel-pigination-con3").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con3").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con3").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con3").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.boxShadow = "none";
       		// 4
       		document.getElementById("item-carousel-pigination-con4").style.background = `rgba(${ ItemSelector[ItemIndex].color } 1)`;
       		document.getElementById("item-carousel-pigination-con4").style.borderRadius = "0px";
       		document.getElementById("item-carousel-pigination-con4").style.margin = "0 0.35em 0 0.35em";
       		document.getElementById("item-carousel-pigination-con4").style.transform = "rotate(45deg)";
       		document.getElementById("item-carousel-pigination-con4").style.height = "0.1em";
       		document.getElementById("item-carousel-pigination-con4").style.width = "0.1em";
       		document.getElementById("item-carousel-pigination-con4").style.boxShadow = `0 0 1px 0.5px rgba(${ ItemSelector[ItemIndex].color } 1),  0 0 1px 1.75px rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		// 5
       		document.getElementById("item-carousel-pigination-con5").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con5").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con5").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con5").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con5").style.boxShadow = "none";
       		
       		// Image Change
       		document.getElementById("item-img-display").innerHTML = `<img class="item-img-fluid" src="img/${ ItemSelector[ItemIndex].image4 }" >`;
            document.getElementById("item-img-display").style.justifyContent = "center";
       }
       // --------------------
       
       //  
       function Carousel5() {
       		// CAROUSEL BUTTON & BORDER
       		document.getElementById("item-carousel-wrap1").style.border = "none";
       		document.getElementById("item-carousel-wrap2").style.border = "none";
       		document.getElementById("item-carousel-wrap3").style.border = "none";
       		document.getElementById("item-carousel-wrap4").style.border = "none";
       		document.getElementById("item-carousel-wrap5").style.border = `0.1875em solid rgba(${ ItemSelector[ItemIndex].color } 1)`;
       		// CAROUSEL PIGINATION
       		// 1
       		document.getElementById("item-carousel-pigination-con1").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con1").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con1").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con1").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con1").style.boxShadow = "none";
       		// 2
       		document.getElementById("item-carousel-pigination-con2").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con2").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con2").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con2").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con2").style.boxShadow = "none";
       		// 3
       		document.getElementById("item-carousel-pigination-con3").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con3").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con3").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con3").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con3").style.boxShadow = "none";
       		// 4
       		document.getElementById("item-carousel-pigination-con4").style.background = `rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		document.getElementById("item-carousel-pigination-con4").style.borderRadius = "500px";
       		document.getElementById("item-carousel-pigination-con4").style.margin = "0 0.2em 0 0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.transform = "rotate(90deg)";
       		document.getElementById("item-carousel-pigination-con4").style.height = "0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.width = "0.2em";
       		document.getElementById("item-carousel-pigination-con4").style.boxShadow = "none";
       		// 5
       		document.getElementById("item-carousel-pigination-con5").style.background = `rgba(${ ItemSelector[ItemIndex].color } 1)`;
       		document.getElementById("item-carousel-pigination-con5").style.borderRadius = "0px";
       		document.getElementById("item-carousel-pigination-con5").style.margin = "0 0.35em 0 0.35em";
       		document.getElementById("item-carousel-pigination-con5").style.transform = "rotate(45deg)";
       		document.getElementById("item-carousel-pigination-con5").style.height = "0.1em";
       		document.getElementById("item-carousel-pigination-con5").style.width = "0.1em";
       		document.getElementById("item-carousel-pigination-con5").style.boxShadow = `0 0 1px 0.5px rgba(${ ItemSelector[ItemIndex].color } 1),  0 0 1px 1.75px rgba(${ ItemSelector[ItemIndex].color } 0.5)`;
       		
       		// Image Change
       		document.getElementById("item-img-display").innerHTML = `<img class="item-img-fluid" src="img/${ ItemSelector[ItemIndex].image5 }" >`;
            document.getElementById("item-img-display").style.justifyContent = "center";
       }
       // --------------------
       
       //  
            function ItemToDetail() {
                about.style.display = "none";
                checkoutf.style.display = "none";
                checkouts.style.display = "none";
                detail.style.display = "flex"; // -------------------- Container --------------------
                facebook.style.display = "none";
                help.style.display = "none";
                home.style.display = "none";
                instagram.style.display = "none";
                item.style.display = "none";
                list.style.display = "none";
                policy.style.display = "none";
                signin.style.display = "none";
                notify.style.display = "none";
                success.style.display = "none";
            }
       // --------------------
    //  -------------------- -------------------- --------------------





    // -------------------- LIST PAGE FUNCTIONS  -------------------- 
       //  To List
            function ListToHome() {
                about.style.display = "none";
                checkoutf.style.display = "none";
                checkouts.style.display = "none";
                detail.style.display = "none";
                facebook.style.display = "none";
                help.style.display = "none";
                home.style.display = "flex"; // -------------------- Container --------------------
                instagram.style.display = "none";
                item.style.display = "none";
                list.style.display = "none";
                policy.style.display = "none";
                signin.style.display = "none";
                notify.style.display = "none";
                success.style.display = "none";
            }
        // -------------------- 
    //  -------------------- -------------------- --------------------





    // -------------------- MENU PAGE FUNCTIONS  -------------------- 
       
        //  To menu
		function Hammenuclose() {
			HamburgerClose();
			ScreenOpen();
		}
		// -------------------- 
    //  -------------------- -------------------- --------------------





    // -------------------- ITEM PAGE FUNCTIONS  -------------------- 
        //  To Policy
        function ItemToCheckoutF() {
            about.style.display = "none";
            checkoutf.style.display = "flex"; // -------------------- Container --------------------
            checkouts.style.display = "none";
            detail.style.display = "none";
            facebook.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            instagram.style.display = "none";
            item.style.display = "none";
            list.style.display = "none";
            policy.style.display = "none";
            signin.style.display = "none";
            notify.style.display = "none";
            success.style.display = "none";
        }
        // -------------------- 
    //  -------------------- -------------------- --------------------





    // --------------------  PAGE FUNCTIONS  -------------------- 
        //  To List
        function CheckFirstToSecond() {
            about.style.display = "none";
            checkouts.style.display = "flex"; // -------------------- Container --------------------
            checkoutf.style.display = "none";
            detail.style.display = "none";
            facebook.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            instagram.style.display = "none";
            item.style.display = "none";
            list.style.display = "none";
            policy.style.display = "none";
            signin.style.display = "none";
            notify.style.display = "none";
            success.style.display = "none";
        }
        // --------------------

        //  To 
        function ToFacebook() {
            about.style.display = "none";
            checkouts.style.display = "none";
            checkoutf.style.display = "none";
            detail.style.display = "none";
            facebook.style.display = "flex"; // -------------------- Container --------------------
            help.style.display = "none";
            home.style.display = "none";
            instagram.style.display = "none";
            item.style.display = "none";
            list.style.display = "none";
            policy.style.display = "none";
            signin.style.display = "none";
            notify.style.display = "none";
            success.style.display = "none";
        }
        
        //  To List
        function ToInstagram() {
            about.style.display = "none";
            checkouts.style.display = "none";
            checkoutf.style.display = "none";
            detail.style.display = "none";
            facebook.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            instagram.style.display = "flex"; // -------------------- Container --------------------
            item.style.display = "none";
            list.style.display = "none";
            policy.style.display = "none";
            signin.style.display = "none";
            notify.style.display = "none";
            success.style.display = "none";
        }
        // --------------------
        
        //  To List
        function ToSuccess() {
            about.style.display = "none";
            checkouts.style.display = "none";
            checkoutf.style.display = "none";
            detail.style.display = "none";
            facebook.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            instagram.style.display = "none";
            item.style.display = "none";
            list.style.display = "none";
            policy.style.display = "none";
            signin.style.display = "none";
            notify.style.display = "none";
            success.style.display = "flex"; // -------------------- Container --------------------
        }
        // --------------------
        
        //  To List
        function ToNotify() {
            about.style.display = "none";
            checkouts.style.display = "none";
            checkoutf.style.display = "none";
            detail.style.display = "none";
            facebook.style.display = "none";
            help.style.display = "none";
            home.style.display = "none";
            instagram.style.display = "none";
            item.style.display = "none";
            list.style.display = "none";
            policy.style.display = "none";
            signin.style.display = "none";
            notify.style.display = "flex"; // -------------------- Container --------------------
            success.style.display = "none";
        }
        // --------------------
    //  -------------------- -------------------- --------------------