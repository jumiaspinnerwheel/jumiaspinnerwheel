class Item extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- ITEM STRUCTURE -->
            <div class="item-page-display">
                <!-- Parent container-->
                <div class="item-parent-con" id="item-parent-con">
                    
                </div> 

                
                    
                <!-- Footer container -->
                <div class="footer-wrap">
                    <div class="container" >
                        <p class="category-lg-txt line-height two-line">Shop with confidence on the <span class="web-name">Jumia</span> spinner wheel.</p>
                        <div class="foot-header-btn" onclick="ItemSign()">Sign in</div>
                        
                        <!-- Scrollable popular items section-->
                        <div class="foot-scroll-wrap">
                            <div id="item-foot-scroll-con" class="foot-scroll-con scrollbar-padding-right">
                                <!-- Scrollbar-->
                                <div class="col-9 col-md-6 col-lg-5 m-3">
                                    <div class="foot-detail-wrap" onclick="HomeToSignIn()">
                                        <div class="foot-detail-img"><img src="img/icon/box.png" class="img-fluid"></div>
                                        <p class="foot-detail-txt">Free shipping.</p>
                                        <div class="foot-header-btn" onclick="ItemSign()">Sign in</div>
                                    </div>
                                </div>
                                <div class="col-9 col-md-6 col-lg-5 m-3">
                                    <div class="foot-detail-wrap" onclick="HomeToAbout()">
                                        <div class="foot-detail-img"><img src="img/icon/tag.png" class="img-fluid"></div>
                                        <p class="foot-detail-txt">Be a lucky spinner.</p>
                                        <div class="foot-header-btn" onclick="ItemAbout()">About us</div>
                                    </div>
                                </div>
                                <div class="col-9 col-md-6 col-lg-5 m-3">
                                    <div class="foot-detail-wrap" onclick="HomeToSupport()">
                                        <div class="foot-detail-img"><img src="img/icon/calendar.png" class="img-fluid"></div>
                                        <p class="foot-detail-txt">Free and easy returns.</p>
                                        <div class="foot-header-btn one-lin">Contact us</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Footer line-->
                        <div class="foot-line"></div>
                        
                        <!-- Footer bottom -->
                        <div class="foot-bot-wrap" >
                            <div class="foot-bot-img"><img src="img/icon/jumialogo.png" class="img-fluid" ></div>
                            <div class="foot-bot-txt" onclick="ItemPolicy()">Terms of use</div>
                            <div class="foot-bot-img" onclick="ItemContact()"><img src="img/icon/telegram.png"  class="img-fluid"></div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("item-page", Item);




// --------------------  ITEM CHANGER FUNCTIONS  -------------------- 
    //  
    function ItemChanger(){
        document.getElementById("item-parent-con").innerHTML = `
            <!-- Fixed container -->
            <div class="item-fixed-wrap" id="item-fixed-wrap">
                <div class="container">
                    <div class="item-fixed-con">
                        <div><span class="item-fixed-price"><strike><span class="green-font">&#8358;</span>${ ItemSelector[ItemIndex].price.toLocaleString() }</strike></span><span class="item-fixed-txt">Free to spin winner</span></div>
                        <div class="item-fixed-btn white-font" onclick="ItemCheckout()">Collect</div>
                    </div>
                </div>
            </div>
            
            
            <!-- Header container -->
            <div class="item-header-wrap">
                <div class="container" >
                    
                    <!-- Navbar container-->
                    <div class="list-nav-con" >
                        <div class="list-back-btn" id="list-back-btn" onclick="HomeToList()"><img class="img-fluid" src="img/icon/back.png"></div>
                        <div class="item-detail-btn white-font" onclick="ItemToDetail()">Device details</div>
                    </div>
                    
                    <!-- Image container -->
                    <div class="item-img-display" id="item-img-display">
                        <img class="item-img-fluid" src="img/${ ItemSelector[ItemIndex].image1 }" >
                        <img class="item-img-fluid" src="img/${ ItemSelector[ItemIndex].image2 }" >
                        <img class="item-img-fluid" src="img/${ ItemSelector[ItemIndex].image3 }" >
                        <img class="item-img-fluid" src="img/${ ItemSelector[ItemIndex].image4 }" >
                        <img class="item-img-fluid" src="img/${ ItemSelector[ItemIndex].image5 }" >
                    </div>
                    
                    <!-- Carousel count -->
                    <div class="item-carousel-pigination-wrap">
                        <div class="item-carousel-pigination-con" id="item-carousel-pigination-con1" onclick="Carousel1()"></div>
                        <div class="item-carousel-pigination-con" id="item-carousel-pigination-con2" onclick="Carousel2()"></div>
                        <div class="item-carousel-pigination-con" id="item-carousel-pigination-con3" onclick="Carousel3()"></div>
                        <div class="item-carousel-pigination-con" id="item-carousel-pigination-con4" onclick="Carousel4()"></div>
                        <div class="item-carousel-pigination-con" id="item-carousel-pigination-con5" onclick="Carousel5()"></div>
                    </div>
                </div>
                
                
                <!-- Item section -->
                <div class="popular-section-wrap">
                    <div class="container">
                        <div class="home-popular-wrap">
                
                            <!-- Scrollable popular items section-->
                            <div class="item-section-con" style="padding-bottom:1.75em;" >
                                <div class="col-4 col-md-3 col-lg-2 p-2 ml-5">
                                    <div class="item-carousel-wrap" id="item-carousel-wrap1" onclick="Carousel1()">
                                        <div class="item-carousel-con">
                                            <div class="item-carousel"><img class="carousel-img-fluid" src="img/${ ItemSelector[ItemIndex].image1 }" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 col-md-3 col-lg-2 p-2">
                                    <div class="item-carousel-wrap" id="item-carousel-wrap2" onclick="Carousel2()">
                                        <div class="item-carousel-con">
                                            <div class="item-carousel"><img class="carousel-img-fluid" src="img/${ ItemSelector[ItemIndex].image2 }" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 col-md-3 col-lg-2 p-2">
                                    <div class="item-carousel-wrap" id="item-carousel-wrap3" onclick="Carousel3()">
                                        <div class="item-carousel-con">
                                            <div class="item-carousel"><img class="carousel-img-fluid" src="img/${ ItemSelector[ItemIndex].image3 }" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 col-md-3 col-lg-2 p-2">
                                    <div class="item-carousel-wrap" id="item-carousel-wrap4" onclick="Carousel4()">
                                        <div class="item-carousel-con">
                                            <div class="item-carousel"><img class="carousel-img-fluid" src="img/${ ItemSelector[ItemIndex].image4 }" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 col-md-3 col-lg-2 p-2">
                                    <div class="item-carousel-wrap" id="item-carousel-wrap5" onclick="Carousel5()">
                                        <div class="item-carousel-con">
                                            <div class="item-carousel"><img class="carousel-img-fluid" src="img/${ ItemSelector[ItemIndex].image5 }"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
            
            
            <!---->
            <div class="container">
                <div class="col-12 col-md-11 col-lg-11 mx-auto">
                    <p class="item-name line-height">${ ItemSelector[ItemIndex].name }</p>
                    <div class="item-layer">
                        <!-- Product price -->
                        <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ ItemSelector[ItemIndex].price.toLocaleString() }</strike></div>
                        <!-- Product rating -->
                        <div class="item-rating">${ ItemSelector[ItemIndex].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                    </div>
                    
                    <p class="detail-lg-txt line-height">Product details</p>
                    
                    <div class="item-table"> 
                        <table class="item-table table">
                            ${ ItemSelector[ItemIndex].productDetail }
                        </table>
                    </div>
                    
                    <!-- Full details container -->
                    <div class="fulldetails-wrap">
                        <div class="fulldetails-btn white-font" onclick="ItemToDetail()">Full details</div>
                        <div class="item-btn-line"></div>
                    </div>
                </div>
            </div>
        `;
    };
    // --------------------

    
    
    // [Foot Item] - Horizontal mouse wheel
    const itemfootContainer = document.getElementById("item-foot-scroll-con");
    itemfootContainer.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) {
                itemfootContainer.scrollLeft += 100;
            e.preventDefault();
        }
        else {
            itemfootContainer.scrollLeft -= 100;
            e.preventDefault();
        }
    });
    // That will work perfectly


    
    // [Popular Item] - Horizontal mouse wheel
    const itemImgDisplay = document.getElementById("item-img-display");
    itemImgDisplay.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) {
                itemImgDisplay.scrollLeft += 100;
            e.preventDefault();
            // prevenDefault() will help avoid worrisome 
            // inclusion of vertical scroll 
        }
        else {
            itemImgDisplay.scrollLeft -= 100;
            e.preventDefault();
        }
    });
    // That will work perfectly
//  -------------------- -------------------- --------------------