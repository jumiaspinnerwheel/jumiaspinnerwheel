class Home extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- HOME STRUCTURE -->
            <div class="home-page-display">
                <!-- Parent container-->
                <div class="home-parent-con" >

                    <div class="profile-wrap" id="profile-wrap">
                        <div class="profile-absolute" onclick="profileClose()"></div>
                        
                        <div class="profile-container">
                            <div class="container">
                                <div class="profile-nav-con">
                                    <div class="profile-nav-img" onclick="profileClose()"><img src="img/icon/exit.png" class="img-fluid"></div>
                                </div>

                                <div class="profile-img">
                                    <img src="img/icon/profile.png" class="img-fluid">
                                </div>
                                <p class="profile-sm-txt">Create an account with us to receive a free product.</p>
                                <div class="profile-header-btn" onclick="HomeSign()">Sign up</div>
                            </div>
                            
                            <div class="profile-line" id="first-profile-line"></div>

                            <div class="profile-link-con" onclick="HomeContact()">
                                <div class="container">
                                    <div class="menu-link">
                                        <div class="profile-link-img"><img class="img-fluid" src="img/icon/support.png"></div>
                                        <span class="menu-link-txt">Contact us</span>
                                    </div>
                                </div>
                            </div>
                            <div class="profile-link-con" onclick="HomeAbout()">
                                <div class="container">
                                    <div class="menu-link">
                                        <div class="profile-link-img"><img class="img-fluid" src="img/icon/info.png"></div>
                                        <span class="menu-link-txt">About us</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="profile-line"></div>
                            
                            <div class="profile-link-con" onclick="HomePolicy()">
                                <div class="container">
                                    <div class="menu-link">
                                        <div class="profile-link-img"><img class="img-fluid" src="img/icon/insurance.png"></div>
                                        <span class="menu-link-txt">Privacy Policy</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <!-- Navbar container -->
                    <div class="home-nav-wrap">
                        <div class="container">
                            <div class="nav-con">
                                <!-- Navbar left container -->
                                <div class="nav-left-con">
                                    <img src="img/icon/jumianame.png" class="img-fluid">
                                </div>
                                <!-- Navbar right con-->
                                <div class="nav-right-con">
                                    <div class="nav-icon" onclick="HomeContact()"><img src="img/icon/support.png" class="img-fluid"></div>
                                    <div onclick="Hammenuopen()" class="nav-icon nav-split"><img src="img/icon/menu.png" class="img-fluid"></div>
                                    <div class="nav-icon-lg" onclick="profileOpen()"><img src="img/icon/user.png" class="img-fluid"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Header container-->
                    <div class="home-header-wrap" >
                        <div class="container">
                            <div class="home-header-con">
                                <div class="col-12 col-md-10 col-lg-8 mx-auto">
                                    <p class="home-header-md-txt"><span class="web-name">Jumia</span> Lucky Spin</p>
                                    <p class="home-header-lg-txt">Welcome to <span class="web-name">Jumia</span>, you lucky spinner.</p>
                                    <p class="home-header-sm-txt">Choose any item from our <span class="web-name">Jumia</span> store and enjoy the benefits of being a fortunate spinner, as you will receive your selected item without any cost. Also shipping charges are completely free.</p>
                                    <div class="home-header-btn" onclick="HomeAbout()">About us</div>
                                </div>
                                <!---->
                                <div class="col-12 col-md-10 col-lg-8 mx-auto">
                                    <div class="home-header-img">
                                        <video controls autoplay src="jumiaspinwheel.mp4" style="width:90%;"></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Popular section -->
                    <div class="popular-section-wrap">
                        <div class="container">
                            <div class="home-popular-wrap">
                                <!-- Text -->
                                <p class="home-popular-lg-txt line-height-zero">Popular on <span class="web-name">Jumia</span> Spinner Wheel</p>
                                
                                <!-- Scrollable popular items section-->
                                <div id="popular-section-con" class="popular-section-con scrollbar-padding-right">
                                    
                                    <!-- -------------- 1 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="firstItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><div class="home-img-con"><img src="img/${ Mobile[0].image1 }" class="home-img-fluid"><div class="free-container">Free</div><div class="free-container">Free</div></div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Mobile[0].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Mobile[0].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Mobile[0].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 2 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="secondItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Laptop[5].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Laptop[5].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Laptop[5].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Laptop[5].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 3 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="thirdItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Tablet[1].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Tablet[1].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Tablet[1].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Tablet[1].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 4 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="fourthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Tablet[7].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Tablet[7].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Tablet[7].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Tablet[7].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 5 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="fifthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Headphone[2].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Headphone[2].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Headphone[2].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Headphone[2].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 6 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="sixthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Games[2].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Games[2].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Games[2].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Games[2].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 7 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="seventhItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ TV[0].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ TV[0].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ TV[0].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ TV[0].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 8 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="eigthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Mobile[2].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Mobile[2].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Mobile[2].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Mobile[2].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 9 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="ninthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ TV[3].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ TV[3].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ TV[3].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ TV[3].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 10 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="tenthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Tablet[8].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Tablet[8].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Tablet[8].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Tablet[8].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 11 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="eleventhItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Laptop[8].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Laptop[8].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Laptop[8].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Laptop[8].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 12 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="twelvethItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Games[3].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Games[3].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Games[3].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Games[3].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 13 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="thirteenthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Headphone[7].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Headphone[7].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Headphone[7].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Headphone[7].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 14 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="fourteenthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Headphone[9].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Headphone[9].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Headphone[9].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Headphone[9].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 15 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="fifteenthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Mobile[18].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Mobile[18].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Mobile[18].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Mobile[18].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 16 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="sixteenthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Laptop[2].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Laptop[2].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Laptop[2].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Laptop[2].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 17 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="seventeenthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ Games[8].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ Games[8].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Games[8].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ Games[8].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- -------------- 18 -------------- -->
                                    <div class="col-6 col-md-5 col-lg-4 m-3">
                                        <div class="popular-item" onclick="eighteenthItemHome()">
                                            <div class="container-fluid p-1">
                                                <!-- Image container -->
                                                <div class="img-wrap"><img src="img/${ TV[8].image1 }" class="home-img-fluid"><div class="free-container">Free</div></div>
                                                <!-- Product details-->
                                                <p class="item-name line-height two-lines">${ TV[8].name }</p>
                                                <div class="item-layer">
                                                    <!-- Product price -->
                                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ TV[8].price.toLocaleString() }</strike></div>
                                                    <!-- Product rating -->
                                                    <div class="item-rating">${ TV[8].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                                </div>
                                                <!-- Collect Button-->
                                                <div class="item-btn white-font">Collect</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <!-- Categories container-->
                    <div class="category-section">
                        <div class="container">
                            <p class="category-lg-txt line-height-zero"><span class="web-name">Jumia</span> spinner categories</p>
                            
                            <div class="row">

                                <!-- Phone Category -->
                                <div class="col-12 col-md-10 col-lg-6 mx-auto p-3">
                                    <div class="category-wrap" onclick="HomeToMobile()">
                                        <div class="container">
                                            <p class="home-header-md-txt">Mobile Category</p>
                                            <p class="home-header-lg-txt">Mobiles that take your breath away</p>
                                            <p class="home-header-sm-txt">Mobiles so good, you'll want to shout it from the rooftops. With Jumia Spinner Wheel, you get your hands on the best Mobiles for absolutely no fee, Mobiles that are a class apart from every other mobile.</p>
                                            <div class="home-header-btn">View category</div>
                                        </div>
                                        <!---->
                                        <div class="container"><div class="category-section-img"><img class="img-fluid" src="img/mobile/mobilehome.png"></div></div>
                                    </div>
                                </div>
                                
                                <!-- Tablet Category -->
                                <div class="col-12 col-md-10 col-lg-6 mx-auto p-3">
                                    <div class="category-wrap" onclick="HomeToTablet()">
                                        <div class="container">
                                            <p class="home-header-md-txt">Tablet Category</p>
                                            <p class="home-header-lg-txt">Get more out of life with our tablets.</p>
                                            <p class="home-header-sm-txt"><span class="web-name">Jumia</span> Spinner Wheel is filled with the most versatile tablets on the market, infact you get to experience fun, imagination and creativity with our tablets completely for free.</p>
                                            <div class="home-header-btn">View category</div>
                                        </div>
                                        <!---->
                                        <div class="category-section-img"><img class="img-fluid" src="img/tablet/tablethome.png"></div>
                                    </div>
                                </div>
                                
                                <!-- Laptop Category -->
                                <div class="col-12 col-md-10 col-lg-6 mx-auto p-3">
                                    <div class="category-wrap" onclick="HomeToLaptop()">
                                        <div class="container">
                                            <p class="home-header-md-txt">Laptop Category</p>
                                            <p class="home-header-lg-txt">Get your dream laptop for free.</p>
                                            <p class="home-header-sm-txt">A smarter way to work and play, Laptops provide easier control, a large screen and we have no Laptop on display that doesn't come with a high resolution interface with large capacity storage.</p>
                                            <div class="home-header-btn">View category</div>
                                        </div>
                                        <!---->
                                        <div class="category-section-img"><img class="img-fluid" src="img/laptop/laptophome.png"></div>
                                    </div>
                                </div>
                                
                                <!-- Games Category -->
                                <div class="col-12 col-md-10 col-lg-6 mx-auto p-3">
                                    <div class="category-wrap" onclick="HomeToGames()">
                                        <div class="container">
                                            <p class="home-header-md-txt">Games Category</p>
                                            <p class="home-header-lg-txt">Unleash your true potential with our Games.</p>
                                            <p class="home-header-sm-txt">Innovative Games at a fraction of the no cost. As an extra bonus, you get free shipping added to a free item. With Play Station Console 5 as our most chosen under the game category, get yours now!</p>
                                            <div class="home-header-btn">View category</div>
                                        </div>
                                        <!---->
                                        <div class="container"><div class="category-section-img"><img class="img-fluid" src="img/game/gamehome.png"></div></div>
                                    </div>
                                </div>
                                
                                <!-- Headphone Category -->
                                <div class="col-12 col-md-10 col-lg-6 mx-auto p-3">
                                    <div class="category-wrap" onclick="HomeToHeadphone()">
                                        <div class="container">
                                            <p class="home-header-md-txt">Headphone Category</p>
                                            <p class="home-header-lg-txt">The best place to find your perfect Headphone</p>
                                            <p class="home-header-sm-txt">High-quality Headphones at no cost at all, including the shipping completely free. Experience entertainment like never before with our Headphones. Walk, run, sing and get the most out of Headphones that'll simplify your life.</p>
                                            <div class="home-header-btn">View category</div>
                                        </div>
                                        <!---->
                                        <div class="category-section-img"><img class="img-fluid" src="img/headphone/headphonehome.png"></div>
                                    </div>
                                </div>
                                
                                <!-- TV Category -->
                                <div class="col-12 col-md-10 col-lg-6 mx-auto p-3">
                                    <div class="category-wrap" onclick="HomeToTV()">
                                        <div class="container">
                                            <p class="home-header-md-txt">TV Category</p>
                                            <p class="home-header-lg-txt">The most versatile Tv on <span class="web-name">Jumia</span> Spinner Wheel.</p>
                                            <p class="home-header-sm-txt">Experience an entirely new world wihen you receive your Televisions from <span class="web-name">Jumia</span> Spinner Wheel. The greatest things about our displayed Tv's is that all displayed Television offer the perfect balance of functionality and fun.</p>
                                            <div class="home-header-btn">View category</div>
                                        </div>
                                        <!---->
                                        <div class="category-section-img"><img class="img-fluid" src="img/tv/tvhome.png"></div>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                    
                    <!-- Footer container -->
                    <div class="footer-wrap">
                        <div class="container" >
                            <p class="category-lg-txt line-height">Shop with confidence on the <span class="web-name">Jumia</span> spinner wheel.</p>
                            <div class="foot-header-btn" onclick="HomeSign()">Sign in</div>
                            
                            <!-- Scrollable popular items section-->
                            <div class="foot-scroll-wrap">
                                <div id="foot-scroll-con" class="foot-scroll-con scrollbar-padding-right">
                                    <!-- Scrollbar-->
                                    <div class="col-9 col-md-6 col-lg-5 m-3">
                                        <div class="foot-detail-wrap" onclick="HomeSign()">
                                            <div class="foot-detail-img"><img src="img/icon/box.png" class="img-fluid"></div>
                                            <p class="foot-detail-txt">Free shipping.</p>
                                            <div class="foot-header-btn">Sign in</div>
                                        </div>
                                    </div>
                                    <div class="col-9 col-md-6 col-lg-5 m-3">
                                        <div class="foot-detail-wrap" onclick="HomeAbout()">
                                            <div class="foot-detail-img"><img src="img/icon/tag.png" class="img-fluid"></div>
                                            <p class="foot-detail-txt">Be a lucky spinner.</p>
                                            <div class="foot-header-btn">About us</div>
                                        </div>
                                    </div>
                                    <div class="col-9 col-md-6 col-lg-5 m-3">
                                        <div class="foot-detail-wrap" onclick="HomeContact()">
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
                                <div class="foot-bot-txt" onclick="HomePolicy()">Terms of use</div>
                                <div class="foot-bot-img" onclick="HomeContact()"><img src="img/icon/telegram.png"  class="img-fluid"></div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("home-page", Home);




// --------------------  ITEM CHANGER FUNCTIONS  -------------------- 
    // [Popular Item] - Horizontal mouse wheel
    const popularContainer = document.getElementById("popular-section-con");
    // where "container" is the id of the container
    popularContainer.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) {
                popularContainer.scrollLeft += 100;
            e.preventDefault();
            // prevenDefault() will help avoid worrisome 
            // inclusion of vertical scroll 
        }
        else {
            popularContainer.scrollLeft -= 100;
            e.preventDefault();
        }
    });
    // That will work perfectly
    
    // [Foot Item] - Horizontal mouse wheel
    const footContainer = document.getElementById("foot-scroll-con");
    // where "container" is the id of the container
    footContainer.addEventListener("wheel", function (e) {
            if (e.deltaY > 0) {
                footContainer.scrollLeft += 100;
            e.preventDefault();
            // prevenDefault() will help avoid worrisome 
            // inclusion of vertical scroll 
        }
        else {
            footContainer.scrollLeft -= 100;
            e.preventDefault();
        }
    });
    // That will work perfectly

    // Back to home paage function change
    function directFromItem() {
        document.getElementById("list-back-btn").onclick = function() { ListToHome() };
    }

    // 1
    function firstItemHome() {
        ItemSelector = Mobile;
        HomeDirectOne();
        directFromItem();
    }
    // --------------------

    // 2
    function secondItemHome() {
        ItemSelector = Laptop;
        HomeDirectTwo();
        directFromItem();
    }
    // --------------------

    // 3
    function thirdItemHome() {
        ItemSelector = Tablet;
        HomeDirectThree();
        directFromItem();
    }
    // --------------------

    // 4
    function fourthItemHome() {
        ItemSelector = Tablet;
        HomeDirectFour();
        directFromItem();
    }
    // --------------------

    // 5
    function fifthItemHome() {
        ItemSelector = Headphone;
        HomeDirectFive();
        directFromItem();
    }
    // --------------------

    // 6
    function sixthItemHome() {
        ItemSelector = Games;
        HomeDirectSix();
        directFromItem();
    }
    // --------------------

    // 7
    function seventhItemHome() {
        ItemSelector = TV;
        HomeDirectSeven();
        directFromItem();
    }
    // --------------------

    // 8
    function eigthItemHome() {
        ItemSelector = Mobile;
        HomeDirectEight();
        directFromItem();
    }
    // --------------------

    // 9
    function ninthItemHome() {
        ItemSelector = TV;
        HomeDirectNine();
        directFromItem();
    }
    // --------------------

    // 10
    function tenthItemHome() {
        ItemSelector = Tablet;
        HomeDirectTen();
        directFromItem();
    }
    // --------------------

    // 11
    function eleventhItemHome() {
        ItemSelector = Laptop;
        HomeDirectEleven();
        directFromItem();
    }
    // --------------------

    // 12
    function twelvethItemHome() {
        ItemSelector = Games;
        HomeDirectTwelve();
        directFromItem();
    }
    // --------------------

    // 13
    function thirteenthItemHome() {
        ItemSelector = Headphone;
        HomeDirectThirteen();
        directFromItem();
    }
    // --------------------

    // 14
    function fourteenthItemHome() {
        ItemSelector = Headphone;
        HomeDirectFourteen();
        directFromItem();
    }
    // --------------------

    // 15
    function fifteenthItemHome() {
        ItemSelector = Mobile;
        HomeDirectFifteen();
        directFromItem();
    }
    // --------------------

    // 16
    function sixteenthItemHome() {
        ItemSelector = Laptop;
        HomeDirectSixteen();
        directFromItem();
    }
    // --------------------

    // 17
    function seventeenthItemHome() {
        ItemSelector = Games;
        HomeDirectSeventeen();
        directFromItem();
    }
    // --------------------

    // 18
    function eighteenthItemHome() {
        ItemSelector = TV;
        HomeDirectEighteen();
        directFromItem();
    }
    // --------------------
//  -------------------- -------------------- --------------------

