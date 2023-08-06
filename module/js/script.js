// -------------------- -------------------- PAGE CHANGER FUNCTIONS -------------------- --------------------
   // --------------------  Mobile Changer FUNCTIONS  -------------------- 
      // Index 1 
         function HomeDirectOne()  {
            ItemIndex = 0;
            HomeToItem();
            IndexChanger();
         };
      // -------------------- 
      
      // Index 2
         function HomeDirectTwo()  {
            ItemIndex = 5;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 3
         function HomeDirectThree()  {
            ItemIndex = 1;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 4
         function HomeDirectFour()  {
            ItemIndex = 7;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 5
         function HomeDirectFive()  {
            ItemIndex = 2;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 6
         function HomeDirectSix()  {
            ItemIndex = 2;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 7
         function HomeDirectSeven()  {
            ItemIndex = 0;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 8
         function HomeDirectEight()  {
            ItemIndex = 2;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 9
         function HomeDirectNine()  {
            ItemIndex = 3;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 10
         function HomeDirectTen()  {
            ItemIndex = 8;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 11
         function HomeDirectEleven()  {
            ItemIndex = 8;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 12
         function HomeDirectTwelve()  {
            ItemIndex = 3;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 13
         function HomeDirectThirteen()  {
            ItemIndex = 7;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 14
         function HomeDirectFourteen()  {
            ItemIndex = 9;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 15
         function HomeDirectFifteen()  {
            ItemIndex = 18;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 16
         function HomeDirectSixteen()  {
            ItemIndex = 2;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 17
         function HomeDirectSeventeen()  {
            ItemIndex = 8;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
      
      // Index 18
         function HomeDirectEighteen()  {
            ItemIndex = 8;
            HomeToItem();
            IndexChanger();
         };
      // --------------------
   //  -------------------- -------------------- --------------------





   // -------------------- Item PAGE FUNCTIONS  -------------------- 
      //  
         function ItemCheckout() {
            document.getElementById("checkout-back-btn").onclick = function() { HomeToItem() };
            ItemToCheckoutF();
         };
      // --------------------
      
      //  
         function DetailCheckout() {
            document.getElementById("checkout-back-btn").onclick = function() { ItemToDetail() };
            ItemToCheckoutF();
         };
      // --------------------
   //  -------------------- -------------------- --------------------





   // -------------------- ABOUT PAGE FUNCTIONS  --------------------
      //  
         function HomeAbout() {
            document.getElementById("about-back-btn").onclick = function() { ListToHome() };
            HomeToAbout();
         };
      // --------------------
      
      //  
         function ItemAbout() {
            document.getElementById("about-back-btn").onclick = function() { HomeToItem() };
            HomeToAbout();
         };
      // --------------------
   //  -------------------- -------------------- --------------------





   // -------------------- SIGN IN PAGE FUNCTIONS  -------------------- 
      //  
         function HomeSign() {
            document.getElementById("sign-back-btn").onclick = function() { ListToHome() };
            HomeToSignIn();
            Hammenuclose();
         };
      // --------------------
      
      //  
         function ItemSign() {
            document.getElementById("sign-back-btn").onclick = function() { HomeToItem() };
            HomeToSignIn();
         };
      // --------------------
      
      //  
         function SupportSign() {
            document.getElementById("sign-back-btn").onclick = function() { HomeToSupport() };
            HomeToSignIn();
         };
      // --------------------
   //  -------------------- -------------------- --------------------





   // -------------------- CONTACT PAGE FUNCTIONS  -------------------- 
      //  
         function HomeContact() {
            document.getElementById("contact-back-btn").onclick = function() { ListToHome() };
            HomeToSupport();
            Hammenuclose();
         };
      // --------------------
      
      //  
      function AboutSupport() {
      	document.getElementById("contact-back-btn").onclick = function() { HomeToAbout(); };
      	HomeToSupport();
      };
      // --------------------
      
      //  
         function ListContact() {
            document.getElementById("contact-back-btn").onclick = function() { HomeToList(); };
            HomeToSupport();
         };
      // --------------------
      
      //  
         function ItemContact() {
            document.getElementById("contact-back-btn").onclick = function() { HomeToItem() };
            HomeToSupport();
         };
      // --------------------
      
      //  
         function DetailContact() {
            document.getElementById("contact-back-btn").onclick = function() { ItemToDetail() };
            HomeToSupport();
         };
      // --------------------
   //  -------------------- -------------------- --------------------





   // -------------------- POLICY PAGE FUNCTIONS  -------------------- 
      //  
         function HomePolicy() {
            document.getElementById("policy-back-btn").onclick = function() { ListToHome() };
            HomeToPolicy();
         };
      // --------------------
     	
     	//  
     	function AboutPolicy() {
     		document.getElementById("policy-back-btn").onclick = function() { HomeToAbout() };
     		HomeToPolicy();
     	};
     	// --------------------
     	
      //  
         function ListPolicy() {
            document.getElementById("policy-back-btn").onclick = function() { HomeToList(); };
            HomeToPolicy();
         };
      // --------------------
      
      //  
         function SupportPolicy() {
            document.getElementById("policy-back-btn").onclick = function() { HomeToSupport(); };
            HomeToPolicy();
         };
      // --------------------
      
      //  
         function ItemPolicy() {
            document.getElementById("policy-back-btn").onclick = function() { HomeToItem() };
            HomeToPolicy();
         };
      // --------------------
      
      //  
         function ItemPolicy() {
            document.getElementById("policy-back-btn").onclick = function() { HomeToItem() };
            HomeToPolicy();
         };
      // --------------------
      
      //  
         function DetailPolicy() {
            document.getElementById("policy-back-btn").onclick = function() { ItemToDetail() };
            HomeToPolicy();
         };
      // --------------------
      
      //  
         function PolicyContact() {
            document.getElementById("contact-back-btn").onclick = function() { HomeToPolicy() };
            HomeToSupport();
         };
      // --------------------
   //  -------------------- -------------------- --------------------