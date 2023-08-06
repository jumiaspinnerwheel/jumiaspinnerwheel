class CheckoutS extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- CHECKOUTS STRUCTURE -->
            <div class="checkouts-page-display">
                
                <!-- Help parent container-->
                <div class="help-parent-container col-12 col-md-12 col-lg-11 mx-auto">
                    
                    <!-- Header container -->
                    <div class="help-header-wrap">
                        <div class="container">
                            <div class="help-header-container">
                    
                                <!-- Left container-->
                                <div class="help-left-container">
                                    <div class="list-back-btn" onclick="ItemToCheckoutF()"><img class="img-fluid" src="img/icon/back.png"></div>
                                    <span class="help-header-txt one-line nav-left-padding">Back</span>
                                </div>
                    
                                <!-- Right container-->
                                <div class="list-img"><img class="img-fluid" src=""></div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <div class="container">
                        <p></p>
                        <p class="help-faq-txt line-height-zero">Delivery options (optional)</p
                        <p class="help-faq-txt">Property type</p>
                        
                        <!-- Delivery header btn -->
                        <div class="delivery-header-btn-wrap">
                            <div class="delivery-header-btn" id="deliveryBtn1" onclick="deliveryDetail1()">House</div>
                            <div class="delivery-header-btn" id="deliveryBtn2" onclick="deliveryDetail2()">Apartment</div>
                            <div class="delivery-header-btn" id="deliveryBtn3" onclick="deliveryDetail3()">Business</div>
                            <div class="delivery-header-btn" id="deliveryBtn4" onclick="deliveryDetail4()">Other</div>
                        </div>
                        
                        <p class="delivery-table-btn" id="delivery-table-btn">Single-family home or townhouse</p>
                        
                        <!---->
                        <div class="delivery-details-con" id="deliveryCon1">
                            
                            <!--------------- First Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Where should we leave your packages at this address?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed -->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <p class="control accordion-control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="Check1" value="Value1" onclick="selectOnlyThis(this.id)" checked/> Front door
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="Check2" value="Value1" onclick="selectOnlyThis(this.id)" /> Back door
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="Check3" value="Value1" onclick="selectOnlyThis(this.id)" /> Side porch
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="Check4" value="Value1" onclick="selectOnlyThis(this.id)" /> Garage
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="Check5" value="Value1" onclick="selectOnlyThis(this.id)" /> Building reception
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="Check6" value="Value1" onclick="selectOnlyThis(this.id)" /> Mailroom or property staff
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="Check7" value="Value1" onclick="selectOnlyThis(this.id)" /> No preference
                                                </label>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                                
                            <!--------------- Second Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Do we need a security code, call box number or key to access this building?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed-->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <div class="row">
                                            
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <input type="text" placeholder=" "/>
                                                        <span class="placeholder">Security code (for the door)</span>
                                                    </label>
                                                </div>
                                                
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <input type="text" placeholder=" "/>
                                                        <span class="placeholder">Call box (number or name)</span>
                                                    </label>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------- Third Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Can we deliver to this address on weekends?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed -->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <p class="control accordion-control">Saturday</p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="homeFirstThis1" value="Value1" onclick="homeFirstThis(this.id)" checked/> Yes
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="homeFirstThis2" value="Value1" onclick="homeFirstThis(this.id)" /> No
                                                </label>
                                            </p>
                                            
                                            <p class="control accordion-control">Sunday</p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="homeSecondThis1" value="Value1" onclick="homeSecondThis(this.id)" checked/> Yes
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="homeSecondThis2" value="Value1" onclick="homeSecondThis(this.id)" /> No
                                                </label>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------- Fourth Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Do you have a dog at this address?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed -->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="homeThirdThis1" value="Value1" onclick="homeThirdThis(this.id)" /> Yes
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="homeThirdThis2" value="Value1" onclick="homeThirdThis(this.id)" checked/> No
                                                </label>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------- Fifth Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Do we need additional instructions to find this address?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed-->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <div class="row">
                                            
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <textarea type="text" rows="3" cols="40" placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions"></textarea>
                                                    </label>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <!---->
                        <div class="delivery-details-con" id="deliveryCon2">
                            <!--------------- First Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Do we need a security code, call box number or key to access this building?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed-->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <div class="row">
                                            
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <input type="text" placeholder=" "/>
                                                        <span class="placeholder">Security code (for the door)</span>
                                                    </label>
                                                </div>
                                                
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <input type="text" placeholder=" "/>
                                                        <span class="placeholder">Call box (number or name)</span>
                                                    </label>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------- Second Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Where should we leave your packages at this address?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed -->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <p class="control accordion-control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="apartFirst1" value="Value1" onclick="apartFirstThis(this.id)" checked/> Front door
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="apartFirst2" value="Value1" onclick="apartFirstThis(this.id)" /> Back door
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="apartFirst3" value="Value1" onclick="apartFirstThis(this.id)" /> Side porch
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="apartFirst4" value="Value1" onclick="apartFirstThis(this.id)" /> Garage
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="apartFirst5" value="Value1" onclick="apartFirstThis(this.id)" /> Building reception
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="apartFirst6" value="Value1" onclick="apartFirstThis(this.id)" /> Mailroom or property staff
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="apartFirst7" value="Value1" onclick="apartFirstThis(this.id)" /> No preference
                                                </label>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------- Third Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Can we deliver to this address on weekends?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed -->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <p class="control accordion-control">Saturday</p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="apartSecond1" value="Value1" onclick="apartSecondThis(this.id)" checked/> Yes
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="apartSecond2" value="Value1" onclick="apartSecondThis(this.id)" /> No
                                                </label>
                                            </p>
                                            
                                            <p class="control accordion-control">Sunday</p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="apartThird1" value="Value1" onclick="apartThirdThis(this.id)" checked/> Yes
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="apartThird2" value="Value1" onclick="apartThirdThis(this.id)" /> No
                                                </label>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------- Fourth Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Do we need additional instructions to find this address?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed-->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <div class="row">
                                            
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <textarea type="text" rows="3" cols="40" placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions"></textarea>
                                                    </label>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!---->
                        <div class="delivery-details-con" id="deliveryCon3">
                            <div class="col-12">
                                <div class="business-instruction-note">Add business hours to ensure successful deliveries</div>
                            </div>
                            
                            <!--------------- First Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">When is this address open for deliveries?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed -->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <p class="control accordion-control">Monday - Friday</p>
                                            
                                            <div class="row">
                                                <div class="col-6">
                                                    <label class="delivery-label col-sm-3">Start at</label>
                                                    <div class="col-sm-12">
                                                        <select name="country" class="select">
                                                            <option value="0">Start at</option>
                                                            <option value="1">12:00 AM</option>
                                                            <option value="2">12:30 AM</option>
                                                            <option value="3">1:00 AM</option>
                                                            <option value="4">1:30 AM</option>
                                                            <option value="5">2:00 AM</option>
                                                            <option value="6">2:30 AM</option>
                                                            <option value="7">3:00 AM</option>
                                                            <option value="8">3:30 AM</option>
                                                            <option value="9">4:00 AM</option>
                                                            <option value="10">4:30 AM</option>
                                                            <option value="11">5:00 AM</option>
                                                            <option value="12">5:30 AM</option>
                                                            <option value="13">6:00 AM</option>
                                                            <option value="14">6:30 AM</option>
                                                            <option value="15">7:00 AM</option>
                                                            <option value="16">7:30 AM</option>
                                                            <option value="13">8:00 AM</option>
                                                            <option value="14">8:30 AM</option>
                                                            <option value="15">9:00 AM</option>
                                                            <option value="16">9:30 AM</option>
                                                            <option value="17">10:00 AM</option>
                                                            <option value="18">10:30 AM</option>
                                                            <option value="19">11:00 AM</option>
                                                            <option value="20">11:30 AM</option>
                                                            <option value="21">12:00 PM</option>
                                                            <option value="22">12:30 PM</option>
                                                            <option value="23">1:00 PM</option>
                                                            <option value="24">1:30 PM</option>
                                                            <option value="25">2:00 PM</option>
                                                            <option value="26">2:30 PM</option>
                                                            <option value="27">3:00 PM</option>
                                                            <option value="28">3:30 PM</option>
                                                            <option value="29">4:00 PM</option>
                                                            <option value="30">4:30 PM</option>
                                                            <option value="31">5:00 PM</option>
                                                            <option value="32">5:30 PM</option>
                                                            <option value="33">6:00 PM</option>
                                                            <option value="34">6:30 PM</option>
                                                            <option value="35">7:00 PM</option>
                                                            <option value="36">7:30 PM</option>
                                                            <option value="37">8:00 PM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            
                                                <div class="col-6">
                                                    <label class="delivery-label col-12">Stop at</label>
                                                    <div class="col-12">
                                                        <select name="state" class="select">
                                                            <option value="0">Stop at</option>
                                                            <option value="1">4:00 AM</option>
                                                            <option value="2">4:30 AM</option>
                                                            <option value="3">5:00 AM</option>
                                                            <option value="4">5:30 AM</option>
                                                            <option value="5">6:00 AM</option>
                                                            <option value="6">6:30 AM</option>
                                                            <option value="7">7:00 AM</option>
                                                            <option value="8">7:30 AM</option>
                                                            <option value="9">8:00 AM</option>
                                                            <option value="10">8:30 AM</option>
                                                            <option value="11">9:00 AM</option>
                                                            <option value="12">9:30 AM</option>
                                                            <option value="13">10:00 AM</option>
                                                            <option value="14">10:30 AM</option>
                                                            <option value="15">11:00 AM</option>
                                                            <option value="16">11:30 AM</option>
                                                            <option value="17">12:00 PM</option>
                                                            <option value="18">12:30 PM</option>
                                                            <option value="19">1:00 PM</option>
                                                            <option value="20">1:30 PM</option>
                                                            <option value="21">2:00 PM</option>
                                                            <option value="22">2:30 PM</option>
                                                            <option value="23">3:00 PM</option>
                                                            <option value="24">3:30 PM</option>
                                                            <option value="25">4:00 PM</option>
                                                            <option value="26">4:30 PM</option>
                                                            <option value="27">5:00 PM</option>
                                                            <option value="28">5:30 PM</option>
                                                            <option value="29">6:00 PM</option>
                                                            <option value="30">6:30 PM</option>
                                                            <option value="31">7:00 PM</option>
                                                            <option value="32">7:30 PM</option>
                                                            <option value="33">8:00 PM</option>
                                                            <option value="34">8:30 PM</option>
                                                            <option value="35">9:00 PM</option>
                                                            <option value="36">9:30 PM</option>
                                                            <option value="37">10:00 PM</option>
                                                            <option value="38">10:30 PM</option>
                                                            <option value="39">11:00 PM</option>
                                                            <option value="40">11:30 PM</option>
                                                            <option value="41">12:00 AM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <p class="control accordion-control">
                                                    <label class="checkbox">
                                                        <input type="checkbox" value="Value1"> Open 24 hours
                                                    </label>
                                                </p>
                                            </div>
                                            
                                            <p class="control accordion-control">Saturday - Sunday</p>
                                            
                                            <div class="row">
                                                <div class="col-6">
                                                    <label class="delivery-label col-sm-3">Start at</label>
                                                    <div class="col-sm-12">
                                                        <select name="country" class="select">
                                                            <option value="0">Start at</option>
                                                            <option value="1">12:00 AM</option>
                                                            <option value="2">12:30 AM</option>
                                                            <option value="3">1:00 AM</option>
                                                            <option value="4">1:30 AM</option>
                                                            <option value="5">2:00 AM</option>
                                                            <option value="6">2:30 AM</option>
                                                            <option value="7">3:00 AM</option>
                                                            <option value="8">3:30 AM</option>
                                                            <option value="9">4:00 AM</option>
                                                            <option value="10">4:30 AM</option>
                                                            <option value="11">5:00 AM</option>
                                                            <option value="12">5:30 AM</option>
                                                            <option value="13">6:00 AM</option>
                                                            <option value="14">6:30 AM</option>
                                                            <option value="15">7:00 AM</option>
                                                            <option value="16">7:30 AM</option>
                                                            <option value="13">8:00 AM</option>
                                                            <option value="14">8:30 AM</option>
                                                            <option value="15">9:00 AM</option>
                                                            <option value="16">9:30 AM</option>
                                                            <option value="17">10:00 AM</option>
                                                            <option value="18">10:30 AM</option>
                                                            <option value="19">11:00 AM</option>
                                                            <option value="20">11:30 AM</option>
                                                            <option value="21">12:00 PM</option>
                                                            <option value="22">12:30 PM</option>
                                                            <option value="23">1:00 PM</option>
                                                            <option value="24">1:30 PM</option>
                                                            <option value="25">2:00 PM</option>
                                                            <option value="26">2:30 PM</option>
                                                            <option value="27">3:00 PM</option>
                                                            <option value="28">3:30 PM</option>
                                                            <option value="29">4:00 PM</option>
                                                            <option value="30">4:30 PM</option>
                                                            <option value="31">5:00 PM</option>
                                                            <option value="32">5:30 PM</option>
                                                            <option value="33">6:00 PM</option>
                                                            <option value="34">6:30 PM</option>
                                                            <option value="35">7:00 PM</option>
                                                            <option value="36">7:30 PM</option>
                                                            <option value="37">8:00 PM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <label class="delivery-label col-12">Stop at</label>
                                                    <div class="col-12">
                                                        <select name="state" class="select">
                                                            <option value="0">Stop at</option>
                                                            <option value="1">4:00 AM</option>
                                                            <option value="2">4:30 AM</option>
                                                            <option value="3">5:00 AM</option>
                                                            <option value="4">5:30 AM</option>
                                                            <option value="5">6:00 AM</option>
                                                            <option value="6">6:30 AM</option>
                                                            <option value="7">7:00 AM</option>
                                                            <option value="8">7:30 AM</option>
                                                            <option value="9">8:00 AM</option>
                                                            <option value="10">8:30 AM</option>
                                                            <option value="11">9:00 AM</option>
                                                            <option value="12">9:30 AM</option>
                                                            <option value="13">10:00 AM</option>
                                                            <option value="14">10:30 AM</option>
                                                            <option value="15">11:00 AM</option>
                                                            <option value="16">11:30 AM</option>
                                                            <option value="17">12:00 PM</option>
                                                            <option value="18">12:30 PM</option>
                                                            <option value="19">1:00 PM</option>
                                                            <option value="20">1:30 PM</option>
                                                            <option value="21">2:00 PM</option>
                                                            <option value="22">2:30 PM</option>
                                                            <option value="23">3:00 PM</option>
                                                            <option value="24">3:30 PM</option>
                                                            <option value="25">4:00 PM</option>
                                                            <option value="26">4:30 PM</option>
                                                            <option value="27">5:00 PM</option>
                                                            <option value="28">5:30 PM</option>
                                                            <option value="29">6:00 PM</option>
                                                            <option value="30">6:30 PM</option>
                                                            <option value="31">7:00 PM</option>
                                                            <option value="32">7:30 PM</option>
                                                            <option value="33">8:00 PM</option>
                                                            <option value="34">8:30 PM</option>
                                                            <option value="35">9:00 PM</option>
                                                            <option value="36">9:30 PM</option>
                                                            <option value="37">10:00 PM</option>
                                                            <option value="38">10:30 PM</option>
                                                            <option value="39">11:00 PM</option>
                                                            <option value="40">11:30 PM</option>
                                                            <option value="41">12:00 AM</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <p class="control accordion-control">
                                                    <label class="checkbox">
                                                        <input type="checkbox" id="businessFirst1" value="Value1" onclick="businessFirstThis(this.id)" /> Open 24 hours
                                                    </label>
                                                </p>
                                                <p class="control">
                                                    <label class="checkbox">
                                                        <input type="checkbox" id="businessFirst2" value="Value1" onclick="businessFirstThis(this.id)" />Closed for deliveries
                                                    </label>
                                                </p>
                                                
                                                <div class="accordion-line"></div>
                                                
                                                <p class="control accordion-control" style="font-weight:500;">Can this address receive deliveries on federal holidays?</p>
                                                <p class="control">
                                                    <label class="checkbox">
                                                        <input type="checkbox" id="businessSecond1" value="Value1" onclick="businessSecondThis(this.id)" checked/> Yes
                                                    </label>
                                                </p>
                                                <p class="control">
                                                    <label class="checkbox">
                                                        <input type="checkbox" id="businessSecond2" value="Value1" onclick="businessSecondThis(this.id)" />No
                                                    </label>
                                                </p>
                                                
                                                <div class="col-12">
                                                    <div class="business-instruction-note"> <span style="font-weight:500;padding-right: 0.25em">These Holidays include: </span>
                                                        New Year's Day, New Years Day (recognized), Martin Luther King, Jr. Day, Memorial Day, Independence Day, Labor Day, Thanksgiving Day, Christmas Day, New Year's Eve
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------- Second Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Where should we leave your packages at this address?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed -->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <p class="control accordion-control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="businessThird1" value="Value1" onclick="businessThirdThis(this.id)" checked/> Front door
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="businessThird2" value="Value1" onclick="businessThirdThis(this.id)" /> Back door
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="businessThird3" value="Value1" onclick="businessThirdThis(this.id)" /> Side porch
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="businessThird4" value="Value1" onclick="businessThirdThis(this.id)" /> Garage
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="businessThird5" value="Value1" onclick="businessThirdThis(this.id)" /> Building reception
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="businessThird6" value="Value1" onclick="businessThirdThis(this.id)" /> Mailroom or property staff
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="businessThird7" value="Value1" onclick="businessThirdThis(this.id)" /> No preference
                                                </label>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------- Third Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Do we need a security code, call box number or key to access this building?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed-->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <div class="row">
                                            
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <input type="text" placeholder=" "/>
                                                        <span class="placeholder">Security code (for the door)</span>
                                                    </label>
                                                </div>
                                                
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <input type="text" placeholder=" "/>
                                                        <span class="placeholder">Call box (number or name)</span>
                                                    </label>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------- Fourth Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Do we need additional instructions to find this address?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed-->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <div class="row">
                                            
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <textarea type="text" rows="3" cols="40" placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions"></textarea>
                                                    </label>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <!---->
                        <div class="delivery-details-con" id="deliveryCon4">
                            <!--------------- First Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Where should we leave your packages at this address?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed -->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <p class="control accordion-control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="otherThird1" value="Value1" onclick="otherThirdThis(this.id)" checked/> Front door
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="otherThird2" value="Value1" onclick="otherThirdThis(this.id)" /> Back door
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="otherThird3" value="Value1" onclick="otherThirdThis(this.id)" /> Side porch
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="otherThird4" value="Value1" onclick="otherThirdThis(this.id)" /> Garage
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="otherThird5" value="Value1" onclick="otherThirdThis(this.id)" /> Building reception
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="otherThird6" value="Value1" onclick="otherThirdThis(this.id)" /> Mailroom or property staff
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="otherThird7" value="Value1" onclick="otherThirdThis(this.id)" /> No preference
                                                </label>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        <!--------------- First Accordion ------------------>
                        <div class="accordion-parent">	
                            <!-- the button holds the title of the accordion-->
                            <div class="course-accordion">
                                <div class="container" >
                                    <div class="accordion-header-wrap" >
                                        <!-- Left container-->
                                        <div class="accordion-left-container p-2">
                                            <span class="accordion-header-txt">When is this address open for deliveries?</span>
                                        </div>
                                        <!-- Right container -->
                                        <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                    </div>
                                </div>
                            </div>
                            <!-- This div holds the content to be displayed -->
                            <div class="course-panel">
                                <!-- Top container -->
                                <div class="container">
                                    <div class="field">
                                        <p class="control accordion-control">Monday - Friday</p>
                                        
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="delivery-label col-sm-3">Start at</label>
                                                <div class="col-sm-12">
                                                    <select name="country" class="select">
                                                        <option value="0">Start at</option>
                                                        <option value="1">12:00 AM</option>
                                                        <option value="2">12:30 AM</option>
                                                        <option value="3">1:00 AM</option>
                                                        <option value="4">1:30 AM</option>
                                                        <option value="5">2:00 AM</option>
                                                        <option value="6">2:30 AM</option>
                                                        <option value="7">3:00 AM</option>
                                                        <option value="8">3:30 AM</option>
                                                        <option value="9">4:00 AM</option>
                                                        <option value="10">4:30 AM</option>
                                                        <option value="11">5:00 AM</option>
                                                        <option value="12">5:30 AM</option>
                                                        <option value="13">6:00 AM</option>
                                                        <option value="14">6:30 AM</option>
                                                        <option value="15">7:00 AM</option>
                                                        <option value="16">7:30 AM</option>
                                                        <option value="13">8:00 AM</option>
                                                        <option value="14">8:30 AM</option>
                                                        <option value="15">9:00 AM</option>
                                                        <option value="16">9:30 AM</option>
                                                        <option value="17">10:00 AM</option>
                                                        <option value="18">10:30 AM</option>
                                                        <option value="19">11:00 AM</option>
                                                        <option value="20">11:30 AM</option>
                                                        <option value="21">12:00 PM</option>
                                                        <option value="22">12:30 PM</option>
                                                        <option value="23">1:00 PM</option>
                                                        <option value="24">1:30 PM</option>
                                                        <option value="25">2:00 PM</option>
                                                        <option value="26">2:30 PM</option>
                                                        <option value="27">3:00 PM</option>
                                                        <option value="28">3:30 PM</option>
                                                        <option value="29">4:00 PM</option>
                                                        <option value="30">4:30 PM</option>
                                                        <option value="31">5:00 PM</option>
                                                        <option value="32">5:30 PM</option>
                                                        <option value="33">6:00 PM</option>
                                                        <option value="34">6:30 PM</option>
                                                        <option value="35">7:00 PM</option>
                                                        <option value="36">7:30 PM</option>
                                                        <option value="37">8:00 PM</option>
                                                    </select>
                                                </div>
                                            </div>
                                        
                                            <div class="col-6">
                                                <label class="delivery-label col-12">Stop at</label>
                                                <div class="col-12">
                                                    <select name="state" class="select">
                                                        <option value="0">Stop at</option>
                                                        <option value="1">4:00 AM</option>
                                                        <option value="2">4:30 AM</option>
                                                        <option value="3">5:00 AM</option>
                                                        <option value="4">5:30 AM</option>
                                                        <option value="5">6:00 AM</option>
                                                        <option value="6">6:30 AM</option>
                                                        <option value="7">7:00 AM</option>
                                                        <option value="8">7:30 AM</option>
                                                        <option value="9">8:00 AM</option>
                                                        <option value="10">8:30 AM</option>
                                                        <option value="11">9:00 AM</option>
                                                        <option value="12">9:30 AM</option>
                                                        <option value="13">10:00 AM</option>
                                                        <option value="14">10:30 AM</option>
                                                        <option value="15">11:00 AM</option>
                                                        <option value="16">11:30 AM</option>
                                                        <option value="17">12:00 PM</option>
                                                        <option value="18">12:30 PM</option>
                                                        <option value="19">1:00 PM</option>
                                                        <option value="20">1:30 PM</option>
                                                        <option value="21">2:00 PM</option>
                                                        <option value="22">2:30 PM</option>
                                                        <option value="23">3:00 PM</option>
                                                        <option value="24">3:30 PM</option>
                                                        <option value="25">4:00 PM</option>
                                                        <option value="26">4:30 PM</option>
                                                        <option value="27">5:00 PM</option>
                                                        <option value="28">5:30 PM</option>
                                                        <option value="29">6:00 PM</option>
                                                        <option value="30">6:30 PM</option>
                                                        <option value="31">7:00 PM</option>
                                                        <option value="32">7:30 PM</option>
                                                        <option value="33">8:00 PM</option>
                                                        <option value="34">8:30 PM</option>
                                                        <option value="35">9:00 PM</option>
                                                        <option value="36">9:30 PM</option>
                                                        <option value="37">10:00 PM</option>
                                                        <option value="38">10:30 PM</option>
                                                        <option value="39">11:00 PM</option>
                                                        <option value="40">11:30 PM</option>
                                                        <option value="41">12:00 AM</option>
                                                    </select>
                                                </div>
                                            </div>
                                            
                                            <p class="control accordion-control">
                                                <label class="checkbox">
                                                    <input type="checkbox" value="Value1"> Open 24 hours
                                                </label>
                                            </p>
                                        </div>
                                        
                                        <p class="control accordion-control">Saturday - Sunday</p>
                                        
                                        <div class="row">
                                            <div class="col-6">
                                                <label class="delivery-label col-sm-3">Start at</label>
                                                <div class="col-sm-12">
                                                    <select name="country" class="select">
                                                        <option value="0">Start at</option>
                                                        <option value="1">12:00 AM</option>
                                                        <option value="2">12:30 AM</option>
                                                        <option value="3">1:00 AM</option>
                                                        <option value="4">1:30 AM</option>
                                                        <option value="5">2:00 AM</option>
                                                        <option value="6">2:30 AM</option>
                                                        <option value="7">3:00 AM</option>
                                                        <option value="8">3:30 AM</option>
                                                        <option value="9">4:00 AM</option>
                                                        <option value="10">4:30 AM</option>
                                                        <option value="11">5:00 AM</option>
                                                        <option value="12">5:30 AM</option>
                                                        <option value="13">6:00 AM</option>
                                                        <option value="14">6:30 AM</option>
                                                        <option value="15">7:00 AM</option>
                                                        <option value="16">7:30 AM</option>
                                                        <option value="13">8:00 AM</option>
                                                        <option value="14">8:30 AM</option>
                                                        <option value="15">9:00 AM</option>
                                                        <option value="16">9:30 AM</option>
                                                        <option value="17">10:00 AM</option>
                                                        <option value="18">10:30 AM</option>
                                                        <option value="19">11:00 AM</option>
                                                        <option value="20">11:30 AM</option>
                                                        <option value="21">12:00 PM</option>
                                                        <option value="22">12:30 PM</option>
                                                        <option value="23">1:00 PM</option>
                                                        <option value="24">1:30 PM</option>
                                                        <option value="25">2:00 PM</option>
                                                        <option value="26">2:30 PM</option>
                                                        <option value="27">3:00 PM</option>
                                                        <option value="28">3:30 PM</option>
                                                        <option value="29">4:00 PM</option>
                                                        <option value="30">4:30 PM</option>
                                                        <option value="31">5:00 PM</option>
                                                        <option value="32">5:30 PM</option>
                                                        <option value="33">6:00 PM</option>
                                                        <option value="34">6:30 PM</option>
                                                        <option value="35">7:00 PM</option>
                                                        <option value="36">7:30 PM</option>
                                                        <option value="37">8:00 PM</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <label class="delivery-label col-12">Stop at</label>
                                                <div class="col-12">
                                                    <select name="state" class="select">
                                                        <option value="0">Stop at</option>
                                                        <option value="1">4:00 AM</option>
                                                        <option value="2">4:30 AM</option>
                                                        <option value="3">5:00 AM</option>
                                                        <option value="4">5:30 AM</option>
                                                        <option value="5">6:00 AM</option>
                                                        <option value="6">6:30 AM</option>
                                                        <option value="7">7:00 AM</option>
                                                        <option value="8">7:30 AM</option>
                                                        <option value="9">8:00 AM</option>
                                                        <option value="10">8:30 AM</option>
                                                        <option value="11">9:00 AM</option>
                                                        <option value="12">9:30 AM</option>
                                                        <option value="13">10:00 AM</option>
                                                        <option value="14">10:30 AM</option>
                                                        <option value="15">11:00 AM</option>
                                                        <option value="16">11:30 AM</option>
                                                        <option value="17">12:00 PM</option>
                                                        <option value="18">12:30 PM</option>
                                                        <option value="19">1:00 PM</option>
                                                        <option value="20">1:30 PM</option>
                                                        <option value="21">2:00 PM</option>
                                                        <option value="22">2:30 PM</option>
                                                        <option value="23">3:00 PM</option>
                                                        <option value="24">3:30 PM</option>
                                                        <option value="25">4:00 PM</option>
                                                        <option value="26">4:30 PM</option>
                                                        <option value="27">5:00 PM</option>
                                                        <option value="28">5:30 PM</option>
                                                        <option value="29">6:00 PM</option>
                                                        <option value="30">6:30 PM</option>
                                                        <option value="31">7:00 PM</option>
                                                        <option value="32">7:30 PM</option>
                                                        <option value="33">8:00 PM</option>
                                                        <option value="34">8:30 PM</option>
                                                        <option value="35">9:00 PM</option>
                                                        <option value="36">9:30 PM</option>
                                                        <option value="37">10:00 PM</option>
                                                        <option value="38">10:30 PM</option>
                                                        <option value="39">11:00 PM</option>
                                                        <option value="40">11:30 PM</option>
                                                        <option value="41">12:00 AM</option>
                                                    </select>
                                                </div>
                                            </div>
                                            
                                            <p class="control accordion-control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="otherFirst1" value="Value1" onclick="otherFirstThis(this.id)" /> Open 24 hours
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="otherFirst2" value="Value1" onclick="otherFirstThis(this.id)" />Closed for deliveries
                                                </label>
                                            </p>
                                            
                                            <div class="accordion-line"></div>
                                            
                                            <p class="control accordion-control" style="font-weight:500;">Can this address receive deliveries on federal holidays?</p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="otherSecond1" value="Value1" onclick="otherSecondThis(this.id)" checked/> Yes
                                                </label>
                                            </p>
                                            <p class="control">
                                                <label class="checkbox">
                                                    <input type="checkbox" id="otherSecond2" value="Value1" onclick="otherSecondThis(this.id)" />No
                                                </label>
                                            </p>
                                            
                                            <div class="col-12">
                                                <div class="business-instruction-note"> <span style="font-weight:500;padding-right: 0.25em">These Holidays include: </span>
                                                    New Year's Day, New Years Day (recognized), Martin Luther King, Jr. Day, Memorial Day, Independence Day, Labor Day, Thanksgiving Day, Christmas Day, New Year's Eve
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------- Third Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Do we need a security code, call box number or key to access this building?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed-->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <div class="row">
                                            
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <input type="text" placeholder=" "/>
                                                        <span class="placeholder">Security code (for the door)</span>
                                                    </label>
                                                </div>
                                                
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <input type="text" placeholder=" "/>
                                                        <span class="placeholder">Call box (number or name)</span>
                                                    </label>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <!--------------- Fourth Accordion ------------------>
                            <div class="accordion-parent">	
                                <!-- the button holds the title of the accordion-->
                                <div class="course-accordion">
                                    <div class="container" >
                                        <div class="accordion-header-wrap" >
                                            <!-- Left container-->
                                            <div class="accordion-left-container p-2">
                                                <span class="accordion-header-txt">Do we need additional instructions to find this address?</span>
                                            </div>
                                            <!-- Right container -->
                                            <div><div class="accordion-img-wrap"><div class="accordion-image-container"><img class="img-fluid" src="img/icon/back.png"></div></div></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- This div holds the content to be displayed-->
                                <div class="course-panel">
                                    <!-- Top container -->
                                    <div class="container">
                                        <div class="field">
                                            <div class="row">
                                            
                                                <div class="col-12">
                                                    <label class="custom-field one">
                                                        <textarea type="text" rows="3" cols="40" placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions"></textarea>
                                                    </label>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    
                    </div>
                       
                    <div class="container">
                        <div class="col-12">
                            <div class="delivery-instruction-note">Your instructions help us deliver to this address. However, deliveries may not always follow all the instructions.</div>
                        </div>
                        
                        <div class="col-12">
                            <div class="checkout-use-btn" onclick="ItemToCheckoutF()">Continue</div>
                        </div>
                    </div>

                </div>

            </div>
            <!--  -------------------- -->
        `;
    }
}

customElements.define("checkouts-page", CheckoutS);




/* Header button functions */
var deliveryBtn1 = document.getElementById("deliveryBtn1");
var deliveryBtn2 = document.getElementById("deliveryBtn2");
var deliveryBtn3 = document.getElementById("deliveryBtn3");
var deliveryBtn4 = document.getElementById("deliveryBtn4");

var deliveryTableBtn = document.getElementById("delivery-table-btn");

var deliveryCon1 = document.getElementById("deliveryCon1");
var deliveryCon2 = document.getElementById("deliveryCon2");
var deliveryCon3 = document.getElementById("deliveryCon3");
var deliveryCon4 = document.getElementById("deliveryCon4");

function deliveryDetail1() {
	deliveryBtn1.style.background = "#aaa";
	deliveryBtn2.style.background = "transparent";
	deliveryBtn3.style.background = "transparent";
	deliveryBtn4.style.background = "transparent";
	deliveryBtn1.style.color = "#fff";
	deliveryBtn2.style.color = "rgba(60, 64, 66, 255)";
	deliveryBtn3.style.color = "rgba(60, 64, 66, 255)";
	deliveryBtn4.style.color = "rgba(60, 64, 66, 255)";
	deliveryTableBtn.innerHTML = "Single-family home or townhouse";
	deliveryCon1.style.display = "flex";
	deliveryCon2.style.display = "none";
	deliveryCon3.style.display = "none";
	deliveryCon4.style.display = "none";
};
function deliveryDetail2() {
	deliveryBtn1.style.background = "transparent";
	deliveryBtn2.style.background = "#aaa";
	deliveryBtn3.style.background = "transparent";
	deliveryBtn4.style.background = "transparent";
	deliveryBtn1.style.color = "rgba(60, 64, 66, 255)";
	deliveryBtn2.style.color = "#fff";
	deliveryBtn3.style.color = "rgba(60, 64, 66, 255)";
	deliveryBtn4.style.color = "rgba(60, 64, 66, 255)";
	deliveryTableBtn.innerHTML = "Multi-unit residential building";
	deliveryCon1.style.display = "none";
	deliveryCon2.style.display = "flex";
	deliveryCon3.style.display = "none";
	deliveryCon4.style.display = "none";
};
function deliveryDetail3() {
	deliveryBtn1.style.background = "transparent";
	deliveryBtn2.style.background = "transparent";
	deliveryBtn3.style.background = "#aaa";
	deliveryBtn4.style.background = "transparent";
	deliveryBtn1.style.color = "rgba(60, 64, 66, 255)";
	deliveryBtn2.style.color = "rgba(60, 64, 66, 255)";
	deliveryBtn3.style.color = "#fff";
	deliveryBtn4.style.color = "rgba(60, 64, 66, 255)";
	deliveryTableBtn.innerHTML = "Office, retail store, hotel, hospital etc.";
	deliveryCon1.style.display = "none";
	deliveryCon2.style.display = "none";
	deliveryCon3.style.display = "flex";
	deliveryCon4.style.display = "none";
};
function deliveryDetail4() {
	deliveryBtn1.style.background = "transparent";
	deliveryBtn2.style.background = "transparent";
	deliveryBtn3.style.background = "transparent";
	deliveryBtn4.style.background = "#aaa";
	deliveryBtn1.style.color = "rgba(60, 64, 66, 255)";
	deliveryBtn2.style.color = "rgba(60, 64, 66, 255)";
	deliveryBtn3.style.color = "rgba(60, 64, 66, 255)";
	deliveryBtn4.style.color = "#fff";
	deliveryTableBtn.innerHTML = "Jungle, tree houses etc";
	deliveryCon1.style.display = "none";
	deliveryCon2.style.display = "none";
	deliveryCon3.style.display = "none";
	deliveryCon4.style.display = "flex";
}



//this is the button
var acc = document.getElementsByClassName("course-accordion");
var i;
var accordionColorChange = document.getElementsByClassName("accordion-parent");


for (i = 0; i < acc.length; i++) {
    //when one of the buttons are clicked run this function
    acc[i].onclick = function() {
        //variables
        var panel = this.nextElementSibling;
        var coursePanel = document.getElementsByClassName("course-panel");
        var courseAccordion = document.getElementsByClassName("course-accordion");
        var courseAccordionActive = document.getElementsByClassName("course-accordion active");

        /*if pannel is already open - minimize*/
        if (panel.style.maxHeight){
            //minifies current pannel if already open
            panel.style.maxHeight = null;
            //removes the 'active' class as toggle didnt work on browsers minus chrome
            this.classList.remove("active");
        } else { //pannel isnt open...
            //goes through the buttons and removes the 'active' css (+ and -)
            for (var ii = 0; ii < courseAccordionActive.length; ii++) {
                courseAccordionActive[ii].classList.remove("active");
            };
            //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
            for (var iii = 0; iii < coursePanel.length; iii++) {
                this.classList.remove("active");
                coursePanel[iii].style.maxHeight = null;
            }
            //opens the specified pannel
            panel.style.maxHeight = panel.scrollHeight + "px";
            //adds the 'active' addition to the css.
            this.classList.add("active");
        } 
    }//closing to the acc onclick function
}//closing to the for loop.





function selectOnlyThis(id) {
    for (var i = 1;i <= 7; i++){
        if ("Check" + i === id && document.getElementById("Check" + i).checked === true){
            document.getElementById("Check" + i).checked = true;
        } else {
            document.getElementById("Check" + i).checked = false;
        };
    };
};

/* home */
function homeFirstThis(id) {
    for (var i = 1;i <= 2; i++){
        if ("homeFirstThis" + i === id && document.getElementById("homeFirstThis" + i).checked === true){
            document.getElementById("homeFirstThis" + i).checked = true;
        } else {
            document.getElementById("homeFirstThis" + i).checked = false;
        };
    };
};

function homeSecondThis(id) {
    for (var i = 1;i <= 2; i++){
        if ("homeSecondThis" + i === id && document.getElementById("homeSecondThis" + i).checked === true){
            document.getElementById("homeSecondThis" + i).checked = true;
        } else {
            document.getElementById("homeSecondThis" + i).checked = false;
        };
    };
};

function homeThirdThis(id) {
    for (var i = 1;i <= 2; i++){
        if ("homeThirdThis" + i === id && document.getElementById("homeThirdThis" + i).checked === true){
            document.getElementById("homeThirdThis" + i).checked = true;
        } else {
            document.getElementById("homeThirdThis" + i).checked = false;
        };
    };
};

/* Apart */
function apartFirstThis(id) {
    for (var i = 1;i <= 7; i++){
        if ("apartFirst" + i === id && document.getElementById("apartFirst" + i).checked === true){
            document.getElementById("apartFirst" + i).checked = true;
        } else {
            document.getElementById("apartFirst" + i).checked = false;
        };
    };
};

function apartSecondThis(id) {
    for (var i = 1;i <= 2; i++){
        if ("apartSecond" + i === id && document.getElementById("apartSecond" + i).checked === true){
            document.getElementById("apartSecond" + i).checked = true;
        } else {
            document.getElementById("apartSecond" + i).checked = false;
        };
    };
};

function apartThirdThis(id) {
    for (var i = 1;i <= 2; i++){
        if ("apartThird" + i === id && document.getElementById("apartThird" + i).checked === true){
            document.getElementById("apartThird" + i).checked = true;
        } else {
            document.getElementById("apartThird" + i).checked = false;
        };
    };
};

/* Business */
function businessFirstThis(id) {
    for (var i = 1;i <= 7; i++){
        if ("businessFirst" + i === id && document.getElementById("businessFirst" + i).checked === true){
            document.getElementById("businessFirst" + i).checked = true;
        } else {
            document.getElementById("businessFirst" + i).checked = false;
        };
    };
};

function businessSecondThis(id) {
    for (var i = 1;i <= 2; i++){
        if ("businessSecond" + i === id && document.getElementById("businessSecond" + i).checked === true){
            document.getElementById("businessSecond" + i).checked = true;
        } else {
            document.getElementById("businessSecond" + i).checked = false;
        };
    };
};

function businessThirdThis(id) {
    for (var i = 1;i <= 7; i++){
        if ("businessThird" + i === id && document.getElementById("businessThird" + i).checked === true){
            document.getElementById("businessThird" + i).checked = true;
        } else {
            document.getElementById("businessThird" + i).checked = false;
        };
    };
};

/* Other */
function otherThirdThis(id) {
    for (var i = 1;i <= 7; i++){
        if ("otherThird" + i === id && document.getElementById("otherThird" + i).checked === true){
            document.getElementById("otherThird" + i).checked = true;
        } else {
            document.getElementById("otherThird" + i).checked = false;
        };
    };
};

function otherSecondThis(id) {
    for (var i = 1;i <= 2; i++){
        if ("otherSecond" + i === id && document.getElementById("otherSecond" + i).checked === true){
            document.getElementById("otherSecond" + i).checked = true;
        } else {
            document.getElementById("otherSecond" + i).checked = false;
        };
    };
};

function otherFirstThis(id) {
    for (var i = 1;i <= 2; i++){
        if ("otherFirst" + i === id && document.getElementById("otherFirst" + i).checked === true){
            document.getElementById("otherFirst" + i).checked = true;
        } else {
            document.getElementById("otherFirst" + i).checked = false;
        };
    };
};