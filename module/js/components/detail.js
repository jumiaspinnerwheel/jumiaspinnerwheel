class Detail extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- DETAIL STRUCTURE -->
            <div class="detail-page-display">
                <!-- Parent container-->
                <div class="detail-parent-con" id="detail-parent-con">
                    
                </div> 
                <div class="container">
                    <!-- Footer line-->
                    <div class="foot-line"></div>
                    
                    <!-- Footer bottom -->
                    <div class="foot-bot-wrap" >
                        <div class="foot-bot-img"><img src="img/icon/jumialogo.png" class="img-fluid" ></div>
                        <div class="foot-bot-txt" onclick="DetailPolicy()">Terms of use</div>
                        <div class="foot-bot-img" onclick="DetailContact()"><img src="img/icon/telegram.png"  class="img-fluid"></div>
                    </div>
                </div>
            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("detail-page", Detail);




// --------------------  ITEM CHANGER FUNCTIONS  -------------------- 
    //  
    function DetailChanger(){
        document.getElementById("detail-parent-con").innerHTML = `
            <!-- Header container -->
            <div class="detail-header-wrap">
                <div class="container" >
                    <div class="col-12 col-md-11 col-lg-11 mx-auto">
                    
                        <!-- Navbar container-->
                        <div class="list-nav-con" >
                            <div class="custom-row">
                                <div class="list-back-btn" onclick="HomeToItem()"><img class="img-fluid" src="img/icon/back.png"></div>
                                <span class="help-header-txt one-line nav-left-padding">Product Details</span>
                            </div>
                            <div class="item-detail-btn white-font" onclick="DetailCheckout()">Collect</div>
                        </div>
                        
                        <!-- Youtube video -->
                        <div class="youtube-video">
                            <iframe src="${ ItemSelector[ItemIndex].youtube }" allowfullscreen></iframe>
                        </div>
                        
                        <p class="item-name line-height">${ ItemSelector[ItemIndex].name }</p>
                        <div class="item-layer">
                            <!-- Product price -->
                            <div class="item-price one-line"><strike><span class="green-font">&#8358;</span>${ ItemSelector[ItemIndex].price.toLocaleString() }</strike></div>
                            <!-- Product rating -->
                            <div class="item-rating">${ ItemSelector[ItemIndex].rate }<img class="item-star-img" src="img/icon/star.png"></div>
                        </div>
                        
                        ${ ItemSelector[ItemIndex].description }
                        
                        <!---->
                        ${ ItemSelector[ItemIndex].features }
                        
                        <!---->
                        <p class="detail-lg-txt line-height">Product details</p>
                        <div class="detail-table1"> 
                            <table class="table det-table">
                                ${ ItemSelector[ItemIndex].detailTable }
                            </table>
                        </div>
                        
                        <!-- Full details container -->
                        <div class="fulldetails-wrap">
                            <div class="fulldetails-btn white-font" onclick="DetailCheckout()">Collect</div>
                            <div class="item-btn-line"></div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Image from Manufacturer -->
            <div class="imagedetailcenter">${ ItemSelector[ItemIndex].image }</div>
        `;
    };
    // --------------------
//  -------------------- -------------------- --------------------