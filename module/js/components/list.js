class List extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- List STRUCTURE -->
            <div class="list-page-display">
                <!-- Parent container-->
                <div class="list-parent-con" >
                    
                    <!-- Navbar container -->
                    <div class="list-nav-wrap">
                        <div class="container" >
                            <div class="list-nav-con" id="list-nav-con">
                                <div class="list-back-btn" onclick="ListToHome()"><img class="img-fluid" src="img/icon/back.png"></div>
                                <div class="list-name" id="list-name"></div>
                                <div class="list-img" id="list-img"><img class="img-fluid" src=""></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- List category -->
                    <div class="list-category">
                        <div class="container">
                                
                            <div class="col-12 col-md-11 col-lg-12 mx-auto">
                    			<div class="list-item-number" id="list-item-number"></div>
                                <div class="list-row" id="list-row"></div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="container">        
                        <!-- Footer line-->
                        <div class="foot-line"></div>
                        
                        <!-- Footer bottom -->
                        <div class="foot-bot-wrap" >
                            <div class="foot-bot-img"><img src="img/icon/jumialogo.png" class="img-fluid" ></div>
                            <div class="foot-bot-txt" onclick="ListPolicy()">Terms of use</div>
                            <div class="foot-bot-img" onclick="ListContact()"><img src="img/icon/telegram.png" class="img-fluid"></div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("list-page", List);





// --------------------  - PAGE --------------------     
    var ItemIndex = 0;
    var ItemSelector = Mobile;
    // Back to home paage function change
    function directFromList() {
        document.getElementById("list-back-btn").onclick = function() { HomeToList() };
    }

    //  Mobile
    function MobileItemLandPage(element)  {
        ItemIndex = element.dataset.changeId;
        HomeToItem();
        IndexChanger();
        directFromList();
    };
    // -------------------- 
    
    //  Tablet
    function TabletItemLandPage(element)  {
        ItemIndex = element.dataset.changeId;
        HomeToItem();
        IndexChanger();
        directFromList();
    };
    // -------------------- 
    
    //  Laptop
    function LaptopItemLandPage(element)  {
        ItemIndex = element.dataset.changeId;
        HomeToItem();
        IndexChanger();
        directFromList();
    };
    // -------------------- 
    
    //  Headphone
    function HeadphoneItemLandPage(element)  {
        ItemIndex = element.dataset.changeId;
        HomeToItem();
        IndexChanger();
        directFromList();
    };
    // -------------------- 
    
    //  Games
    function GamesItemLandPage(element)  {
        ItemIndex = element.dataset.changeId;
        HomeToItem();
        IndexChanger();
        directFromList();
    };
    // -------------------- 
    
    //  TV
    function TVItemLandPage(element)  {
        ItemIndex = element.dataset.changeId;
        HomeToItem();
        IndexChanger();
        directFromList();
    };
    // -------------------- 
//  -------------------- -------------------- -------------------- 





// -------------------- LIST PAGE FUNCTIONS --------------------
    // [ HOME - MOBILE ]
        function HomeToMobileList(){
            ItemSelector = Mobile;
            // Loop event
            function ListLoop(arg) {
                let ListLoopString = ``;
                for (let i = 0; i < arg.length; i++) {
                    ListLoopString += `
                        <div class="list-popular-item" onclick="MobileItemLandPage(this)" data-change-id="${ i }">
                            <div class="container-fluid p-2">
                                <!-- Image container -->
                                <div class="list-img-wrap"><img src="img/${ Mobile[i].image1 }" class="img-fluid"><div class="free-container">Free</div></div>
                                <!-- Product details-->
                                <p class="item-name line-height two-lines">${ Mobile[i].name }</p>
                                <div class="item-layer">
                                    <!-- Product price -->
                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Mobile[i].price.toLocaleString() }</strike></div>
                                    <!-- Product rating -->
                                    <div class="item-rating">${ Mobile[i].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                </div>
                                <!-- Collect Button-->
                                <div class="item-btn">Collect</div>
                            </div>
                        </div>
                    `;
                }
                return ListLoopString;
            }
            
            document.getElementById("list-row").innerHTML = `
                ${ListLoop(Mobile)}
            `;
            document.getElementById("list-nav-con").innerHTML = `
                <div class="list-back-btn" onclick="ListToHome()"><img class="img-fluid" src="img/icon/back.png"></div>
                <div class="list-name">Mobile Category</div>
                <div class="list-img"><img class="img-fluid" src="img/mobile/mobilecart.png"></div>
            `;
            document.getElementById("list-item-number").innerHTML = `
                Found ${ Mobile.length } items.
            `;

            // 
            document.getElementById("menu-link-con1").style.background = "rgba(250, 136, 37, 0.15)";
            document.getElementById("menu-link-con2").style.background = "transparent";
            document.getElementById("menu-link-con3").style.background = "transparent";
            document.getElementById("menu-link-con4").style.background = "transparent";
            document.getElementById("menu-link-con5").style.background = "transparent";
            document.getElementById("menu-link-con6").style.background = "transparent";
            Hammenuclose();
        }
    // -------------------- 

    // [ HOME - TABLET ]
        function HomeToTabletList(){
            ItemSelector = Tablet;
            // Loop event
            function ListLoop(arg) {
                let ListLoopString = ``;
                for (let i = 0; i < arg.length; i++) {
                    ListLoopString += `
                        <div class="list-popular-item" onclick="TabletItemLandPage(this)" data-change-id="${ i }">
                            <div class="container-fluid p-2">
                                <!-- Image container -->
                                <div class="list-img-wrap"><img src="img/${ Tablet[i].image1 }" class="img-fluid"><div class="free-container">Free</div></div>
                                <!-- Product details-->
                                <p class="item-name line-height two-lines">${ Tablet[i].name }</p>
                                <div class="item-layer">
                                    <!-- Product price -->
                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Tablet[i].price.toLocaleString() }</strike></div>
                                    <!-- Product rating -->
                                    <div class="item-rating">${ Tablet[i].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                </div>
                                <!-- Collect Button-->
                                <div class="item-btn">Collect</div>
                            </div>
                        </div>
                    `;
                }
                return ListLoopString;
            }
            
            document.getElementById("list-row").innerHTML = `
                ${ListLoop(Tablet)}
            `;
            document.getElementById("list-nav-con").innerHTML = `
                <div class="list-back-btn" onclick="ListToHome()"><img class="img-fluid" src="img/icon/back.png"></div>
                <div class="list-name">Tablet Category</div>
                <div class="list-img"><img class="img-fluid" src="img/tablet/tabletcart.png"></div>
            `;
            document.getElementById("list-item-number").innerHTML = `
                Found ${ Tablet.length } items.
            `;

            // 
            document.getElementById("menu-link-con1").style.background = "transparent";
            document.getElementById("menu-link-con2").style.background = "rgba(250, 136, 37, 0.15)";
            document.getElementById("menu-link-con3").style.background = "transparent";
            document.getElementById("menu-link-con4").style.background = "transparent";
            document.getElementById("menu-link-con5").style.background = "transparent";
            document.getElementById("menu-link-con6").style.background = "transparent";
            Hammenuclose();
        }
    // -------------------- 

    // [ HOME - LAPTOP ]
        function HomeToLaptopList(){
            ItemSelector = Laptop;
            // Loop event
            function ListLoop(arg) {
                let ListLoopString = ``;
                for (let i = 0; i < arg.length; i++) {
                    ListLoopString += `
                        <div class="list-popular-item" onclick="LaptopItemLandPage(this)" data-change-id="${ i }">
                            <div class="container-fluid p-2">
                                <!-- Image container -->
                                <div class="list-img-wrap"><img src="img/${ Laptop[i].image1 }" class="img-fluid"><div class="free-container">Free</div></div>
                                <!-- Product details-->
                                <p class="item-name line-height two-lines">${ Laptop[i].name }</p>
                                <div class="item-layer">
                                    <!-- Product price -->
                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Laptop[i].price.toLocaleString() }</strike></div>
                                    <!-- Product rating -->
                                    <div class="item-rating">${ Laptop[i].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                </div>
                                <!-- Collect Button-->
                                <div class="item-btn">Collect</div>
                            </div>
                        </div>
                    `;
                }
                return ListLoopString;
            }
            
            document.getElementById("list-row").innerHTML = `
                ${ListLoop(Laptop)}
            `;
            document.getElementById("list-nav-con").innerHTML = `
                <div class="list-back-btn" onclick="ListToHome()"><img class="img-fluid" src="img/icon/back.png"></div>
                <div class="list-name">Laptop Category</div>
                <div class="list-img"><img class="img-fluid" src="img/laptop/laptopcart.png"></div>
            `;
            document.getElementById("list-item-number").innerHTML = `
                Found ${ Laptop.length } items.
            `;

            // 
            document.getElementById("menu-link-con1").style.background = "transparent";
            document.getElementById("menu-link-con2").style.background = "transparent";
            document.getElementById("menu-link-con3").style.background = "rgba(250, 136, 37, 0.15)";
            document.getElementById("menu-link-con4").style.background = "transparent";
            document.getElementById("menu-link-con5").style.background = "transparent";
            document.getElementById("menu-link-con6").style.background = "transparent";
            Hammenuclose();
        }
    // -------------------- 

    // [ HOME - GAMES ]
        function HomeToGamesList(){
            ItemSelector = Games;
            // Loop event
            function ListLoop(arg) {
                let ListLoopString = ``;
                for (let i = 0; i < arg.length; i++) {
                    ListLoopString += `
                        <div class="list-popular-item" onclick="GamesItemLandPage(this)" data-change-id="${ i }">
                            <div class="container-fluid p-2">
                                <!-- Image container -->
                                <div class="list-img-wrap"><img src="img/${ Games[i].image1 }" class="img-fluid"><div class="free-container">Free</div></div>
                                <!-- Product details-->
                                <p class="item-name line-height two-lines">${ Games[i].name }</p>
                                <div class="item-layer">
                                    <!-- Product price -->
                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Games[i].price.toLocaleString() }</strike></div>
                                    <!-- Product rating -->
                                    <div class="item-rating">${ Games[i].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                </div>
                                <!-- Collect Button-->
                                <div class="item-btn">Collect</div>
                            </div>
                        </div>
                    `;
                }
                return ListLoopString;
            }
            
            document.getElementById("list-row").innerHTML = `
                ${ListLoop(Games)}
            `;
            document.getElementById("list-nav-con").innerHTML = `
                <div class="list-back-btn" onclick="ListToHome()"><img class="img-fluid" src="img/icon/back.png"></div>
                <div class="list-name">Game Category</div>
                <div class="list-img"><img class="img-fluid" src="img/game/gamecart.png"></div>
            `;
            document.getElementById("list-item-number").innerHTML = `
                Found ${ Games.length } items.
            `;

            // 
            document.getElementById("menu-link-con1").style.background = "transparent";
            document.getElementById("menu-link-con2").style.background = "transparent";
            document.getElementById("menu-link-con3").style.background = "transparent";
            document.getElementById("menu-link-con4").style.background = "transparent";
            document.getElementById("menu-link-con5").style.background = "rgba(250, 136, 37, 0.15)";
            document.getElementById("menu-link-con6").style.background = "transparent";
            Hammenuclose();
        }
    // -------------------- 

    // [ HOME - HEADPHONE ]
        function HomeToHeadphoneList(){
            ItemSelector = Headphone;
            // Loop event
            function ListLoop(arg) {
                let ListLoopString = ``;
                for (let i = 0; i < arg.length; i++) {
                    ListLoopString += `
                        <div class="list-popular-item" onclick="HeadphoneItemLandPage(this)" data-change-id="${ i }">
                            <div class="container-fluid p-2">
                                <!-- Image container -->
                                <div class="list-img-wrap"><img src="img/${ Headphone[i].image1 }" class="img-fluid"><div class="free-container">Free</div></div>
                                <!-- Product details-->
                                <p class="item-name line-height two-lines">${ Headphone[i].name }</p>
                                <div class="item-layer">
                                    <!-- Product price -->
                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ Headphone[i].price.toLocaleString() }</strike></div>
                                    <!-- Product rating -->
                                    <div class="item-rating">${ Headphone[i].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                </div>
                                <!-- Collect Button-->
                                <div class="item-btn">Collect</div>
                            </div>
                        </div>
                    `;
                }
                return ListLoopString;
            }
            
            document.getElementById("list-row").innerHTML = `
                ${ListLoop(Headphone)}
            `;
            document.getElementById("list-nav-con").innerHTML = `
                <div class="list-back-btn" onclick="ListToHome()"><img class="img-fluid" src="img/icon/back.png"></div>
                <div class="list-name">Headphone Category</div>
                <div class="list-img"><img class="img-fluid" src="img/headphone/headphonecart.png"></div>
            `;
            document.getElementById("list-item-number").innerHTML = `
                Found ${ Headphone.length } items.
            `;

            // 
            document.getElementById("menu-link-con1").style.background = "transparent";
            document.getElementById("menu-link-con2").style.background = "transparent";
            document.getElementById("menu-link-con3").style.background = "transparent";
            document.getElementById("menu-link-con4").style.background = "rgba(250, 136, 37, 0.15)";
            document.getElementById("menu-link-con5").style.background = "transparent";
            document.getElementById("menu-link-con6").style.background = "transparent";
            Hammenuclose();
        }
    // -------------------- 

    // [ HOME - TV ]
        function HomeToTVList(){
            ItemSelector = TV;
            // Loop event
            function ListLoop(arg) {
                let ListLoopString = ``;
                for (let i = 0; i < arg.length; i++) {
                    ListLoopString += `
                        <div class="list-popular-item" onclick="TVItemLandPage(this)" data-change-id="${ i }">
                            <div class="container-fluid p-2">
                                <!-- Image container -->
                                <div class="list-img-wrap"><img src="img/${ TV[i].image1 }" class="img-fluid"><div class="free-container">Free</div></div>
                                <!-- Product details-->
                                <p class="item-name line-height two-lines">${ TV[i].name }</p>
                                <div class="item-layer">
                                    <!-- Product price -->
                                    <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ TV[i].price.toLocaleString() }</strike></div>
                                    <!-- Product rating -->
                                    <div class="item-rating">${ TV[i].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                                </div>
                                <!-- Collect Button-->
                                <div class="item-btn">Collect</div>
                            </div>
                        </div>
                    `;
                }
                return ListLoopString;
            }
            
            document.getElementById("list-row").innerHTML = `
                ${ListLoop(TV)}
            `;
            document.getElementById("list-nav-con").innerHTML = `
                <div class="list-back-btn" onclick="ListToHome()"><img class="img-fluid" src="img/icon/back.png"></div>
                <div class="list-name">TV Category</div>
                <div class="list-img"><img class="img-fluid" src="img/tv/tvcart.png"></div>
            `;
            document.getElementById("list-item-number").innerHTML = `
                Found ${ TV.length } items.
            `;

            // 
            document.getElementById("menu-link-con1").style.background = "transparent";
            document.getElementById("menu-link-con2").style.background = "transparent";
            document.getElementById("menu-link-con3").style.background = "transparent";
            document.getElementById("menu-link-con4").style.background = "transparent";
            document.getElementById("menu-link-con5").style.background = "transparent";
            document.getElementById("menu-link-con6").style.background = "rgba(250, 136, 37, 0.15)";
            Hammenuclose();
        }
    // -------------------- 
//  -------------------- -------------------- --------------------