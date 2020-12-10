let BASE_PATH = "https://ihealth-paycard.github.io/ihealth/"
// detect small screens like mobile phones
function detectmob() { 
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
     return true;
   }
  else {
     return false;
   }
 }

 (function(){
  
 
  if (detectmob()) {
    //Small Screen Render

          //Slider background images
          $("#carousel-container").append(`
          <div class="carousel-inner-mobile" role="listbox">
          <div class="carousel-item active">
          <img style="background: rgba(253, 254, 255, 0.5); opacity: 0.3; width: 100%; height: 300px;" src="${BASE_PATH}/assets/images/slider/ihealth-2.jpg" alt="">   
            <div class="carousel-caption" style="top: 20%">
              <h3 class="slide-title animated fadeInDown"><span class="text-primary">Save </span> Time </h3>
              <h5 class="slide-text animated fadeIn">No need for traditional claim forms</h5>
              <!-- <a href="#features" class="btn btn-lg btn-default-filled animated fadeInUp">Get Started</a> -->
              <a href="#features" class="btn btn-lg btn-common animated fadeInUp">Learn More</a>
            </div>
          </div>
          <div class="carousel-item">
            <img style="background: rgba(253, 254, 255, 0.5); opacity: 0.3; width: 100%; height: 300px;" src="${BASE_PATH}/assets/images/slider/bg-4.jpg" alt="">
            <div class="carousel-caption" style="top: 20%">
              <h3 class="slide-title animated fadeInDown"><span class="text-primary">Save </span> Money</h3>
              <h5 class="slide-text animated fadeIn">
              iHealth Pay Card is an onsite pre-funded medical payment card. Download our portfolio today.
              </h5>
              <a href="/uploads/portfolio.pdf" class="btn btn-lg btn-default-filled animated fadeInUp" download="ihealth_portfolio">Download Now</a>
            </div>
          </div>
          <div class="carousel-item">
            <img style="background: rgba(253, 254, 255, 0.5); opacity: 0.3; width: 100%; height: 300px;" src="${BASE_PATH}/assets/images/slider/bg-5.jpg" alt="">
            <div class="carousel-caption" style="top: 20%">
              <h3 class="slide-title animated fadeInDown"><span class="text-primary">More </span>Convinence</h3>
              <h5 class="slide-text animated fadeIn"> The funded card will be used for spot payments of medical bills at a point of sale machine in a hospital and provide for immediate settlement of value with the hospital upon service delivery.                      </h5>
              <!-- <a href="#features" class="btn btn-lg btn-default-filled animated fadeInUp">Get Started</a>
              <a href="#" class="btn btn-lg btn-common animated fadeInUp">Download</a> -->
            </div>
          </div>
        </div>
          `);
    
    //nav menu markers
    $("#nav-location-marker").append(`
    <i class="fa fa-map-marker"></i>Nairobi
    `);

     // Road map Section
     $("#roadmap-container").append(`
    
      <figure>
             <img width="100%" height="242.33.px" src="${BASE_PATH}/assets/images/bg/road_map.png" alt="">
      </figure>
    
     `);

    
    // about section rendered on large screens
    $("#about").append(`
    <div class="row">
    <div class="col-xs-12 col-sm-6" style="text-align: center">
      <div class="hero-content-v2">
        <h3>iHealth pay card<strong>v1.0.0</strong></h3>
        <p> 
          We are using technology to  transform the management of health insurance by driving efficiency, transparency and cost effectiveness, while ensuring inclusivity and value addition to all stakeholders.
        </p>
      </div>
    <div style="margin-top: 3px; text-align: center">
      <figure>
        <img src="${BASE_PATH}/assets/images/bg/hero-1.png" alt="">
      </figure>
    </div>
      <div style="text-align: center">
        <a href="#" class="page-scroll btn btn-lg btn-default-filled">Start Today</a>
      </div>
    </div>
    
  </div>
    `);

    //Team Section
    $("#team-container").append(`
    <div class="container">	                  
    <div class="team-members-tow mtb-50">
      <h4 class="sub-title">Team</h4>
      <div class="row">
        <div class="col-sm-1" style="text-align: center">
          <!-- Team Item Starts -->
          <figure>
            <img src="${BASE_PATH}/assets/images/team/team-a.png" alt="">
            <div class="image-overlay">
              <div class="overlay-text text-center">
                <div class="info-text">
                  <strong>Nkrumah Kiambata
                  </strong>                                                                                                                                                                                                                                                                                                                                                                                                                                 
                  <span>Co-Founder - Techcloud LTD
                  </span>
                </div>
                <hr class="small-divider border-white">
                <ul class="social-icons">
                  <li><a href="https://www.facebook.com/TechcloudK/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="https://twitter.com/TechcloudK"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.linkedin.com/company/tecchcloudke/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </figure>
          <!-- Team Item Ends -->
        </div>
        <div class="col-sm-1" style="text-align: center">
          <!-- Team Item Starts -->
          <figure>
            <img src="${BASE_PATH}/assets/images/team/team-c.png" alt="">
            <div class="image-overlay">
              <div class="overlay-text text-center">
                <div class="info-text">
                  <strong>Daniel Mwangi</strong>
                  <span>Tech Enthusiast and Co - Founder - Techcloud LTD
                  </span>
                </div>
                <hr class="small-divider border-white">
                <ul class="social-icons">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </figure>
          <!-- Team Item Ends -->
        </div>

        <div class="col-sm-1" style="text-align: center">
          <!-- Team Item Starts -->
          <figure>
            <img src="${BASE_PATH}/assets/images/team/team-d.png" alt="">
            <div class="image-overlay">
              <div class="overlay-text text-center">
                <div class="info-text">
                  <strong>Simon Mwangi
                  </strong>
                  <span>Card Payments and Fintech Consultant
                  </span>
                </div>
                <hr class="small-divider border-white">
                <ul class="social-icons">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </figure>
          <!-- Team Item Ends -->
        </div>

        <div class="col-sm-1" style="text-align: center">
          <!-- Team Item Starts -->
          <figure>
            <img src="${BASE_PATH}/assets/images/team/team-b.png" alt="">
            <div class="image-overlay">
              <div class="overlay-text text-center">
                <div class="info-text">
                  <strong>CPA David Wachira
                  </strong>
                  <span>Financial Consultant - Myles
                  </span>
                </div>
                <hr class="small-divider border-white">
                <ul class="social-icons">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </figure>
          <!-- Team Item Ends -->
        </div>

      </div>
    </div>            	      	      	      
</div> 
    `);
    
      }
      else
      {   
          // Large Screen Render

        //Slider background images
    $("#carousel-container").append(`
    <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
    <img style="background: rgba(253, 254, 255, 0.5); opacity: 0.3; width: 100%; height: 600px;" src="${BASE_PATH}/assets/images/slider/ihealth-2.jpg" alt="">   
      <div class="carousel-caption">
        <h3 class="slide-title animated fadeInDown"><span class="text-primary">Save </span> Time </h3>
        <h5 class="slide-text animated fadeIn">No need for traditional claim forms</h5>
        <!-- <a href="#features" class="btn btn-lg btn-default-filled animated fadeInUp">Get Started</a> -->
        <a href="#features" class="btn btn-lg btn-common animated fadeInUp">Learn More</a>
      </div>
    </div>
    <div class="carousel-item">
      <img style="background: rgba(253, 254, 255, 0.5); opacity: 0.3; width: 100%; height: 600px;" src="${BASE_PATH}/assets/images/slider/bg-4.jpg" alt="">
      <div class="carousel-caption">
        <h3 class="slide-title animated fadeInDown"><span class="text-primary">Save </span> Money</h3>
        <h5 class="slide-text animated fadeIn">
        iHealth Pay Card is an onsite pre-funded medical payment card that combines blockchain technology and Artificial Intelligence with medical insurance underwriting. Download our portfolio today.
        </h5>
        <a href="/uploads/portfolio.pdf" class="btn btn-lg btn-default-filled animated fadeInUp" download="ihealth_portfolio">Download Now</a>
      </div>
    </div>
    <div class="carousel-item">
      <img style="background: rgba(253, 254, 255, 0.5); opacity: 0.3; width: 100%; height: 600px;" src="${BASE_PATH}/assets/images/slider/bg-5.jpg" alt="">
      <div class="carousel-caption">
        <h3 class="slide-title animated fadeInDown"><span class="text-primary">More </span>Convinence</h3>
        <h5 class="slide-text animated fadeIn"> The funded card will be used for spot payments of medical bills at a point of sale machine in a hospital and provide for immediate settlement of value with the hospital upon service delivery.                      </h5>
        <!-- <a href="#features" class="btn btn-lg btn-default-filled animated fadeInUp">Get Started</a>
        <a href="#" class="btn btn-lg btn-common animated fadeInUp">Download</a> -->
      </div>
    </div>
  </div>
    `);

          // nav menu markers
          $("#nav-location-marker").append(`
          <i class="fa fa-map-marker"></i>Nairobi, Kenya
          `);

         // Road map Section
    $("#roadmap-container").append(`
    <div class="header-style-3">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <figure>
            <img style="position: absolute; top: 0; bottom: 0; right: 5px ;left: 1px; padding: 20px" src="${BASE_PATH}/assets/images/bg/road_map.png" alt="">
          </figure>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="hero-content-v2">
            <h3>Our proposed Journey<strong>to a perfect solution</strong></h3>
          </div>
        </div>
      </div>  
    </div>
  </div>	
    `);


          // About Section 
          $("#about").append(`
          <div class="row">
          <div class="col-xs-12 col-sm-6">
            <div class="hero-content-v2">
              <h3>iHealth pay card<strong>v1.0.0</strong></h3>
              <p> 
                We are using technology to  transform the management of health insurance by driving efficiency, transparency and cost effectiveness, while ensuring inclusivity and value addition to all stakeholders.
              </p>
              <a href="#" class="page-scroll btn btn-lg btn-default-filled">Start Today</a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <figure>
              <img src="${BASE_PATH}/assets/images/bg/hero-1.png" alt="">
            </figure>
          </div>
        </div>
          `);

          //Team Section
          $("#team-container").append(`
          <div class="container">	                  
          <div class="team-members-tow mtb-50">
            <h4 class="sub-title">Team</h4>
            <div class="row">
              <div class="col-sm-6 col-md-3">
                <!-- Team Item Starts -->
                <figure>
                  <img src="${BASE_PATH}/assets/images/team/team-a.png" alt="">
                  <div class="image-overlay">
                    <div class="overlay-text text-center">
                      <div class="info-text">
                        <strong>Nkrumah Kiambata
                        </strong>                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <span>Co-Founder - Techcloud LTD
                        </span>
                      </div>
                      <hr class="small-divider border-white">
                      <ul class="social-icons">
                        <li><a href="https://www.facebook.com/TechcloudK/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://twitter.com/TechcloudK"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/tecchcloudke/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </figure>
                <!-- Team Item Ends -->
              </div>
              <div class="col-sm-6 col-md-3">
                <!-- Team Item Starts -->
                <figure>
                  <img src="${BASE_PATH}/assets/images/team/team-c.png" alt="">
                  <div class="image-overlay">
                    <div class="overlay-text text-center">
                      <div class="info-text">
                        <strong>Daniel Mwangi</strong>
                        <span>Tech Enthusiast and Co - Founder - Techcloud LTD
                        </span>
                      </div>
                      <hr class="small-divider border-white">
                      <ul class="social-icons">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </figure>
                <!-- Team Item Ends -->
              </div>

              <div class="col-sm-6 col-md-3">
                <!-- Team Item Starts -->
                <figure>
                  <img src="${BASE_PATH}/assets/images/team/team-d.png" alt="">
                  <div class="image-overlay">
                    <div class="overlay-text text-center">
                      <div class="info-text">
                        <strong>Simon Mwangi
                        </strong>
                        <span>Card Payments and Fintech Consultant
                        </span>
                      </div>
                      <hr class="small-divider border-white">
                      <ul class="social-icons">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </figure>
                <!-- Team Item Ends -->
              </div>

              <div class="col-sm-6 col-md-3">
                <!-- Team Item Starts -->
                <figure>
                  <img src="${BASE_PATH}/assets/images/team/team-b.png" alt="">
                  <div class="image-overlay">
                    <div class="overlay-text text-center">
                      <div class="info-text">
                        <strong>CPA David Wachira
                        </strong>
                        <span>Financial Consultant - Myles
                        </span>
                      </div>
                      <hr class="small-divider border-white">
                      <ul class="social-icons">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </figure>
                <!-- Team Item Ends -->
              </div>

            </div>
          </div>            	      	      	      
    </div> 
          `);
          

          
      }
   
})()

    $('#name').change(() => { 
      $('#name-icon').hide();
      if($('#name').val().length < 1){
        $('#name-icon').show();
      }
    });

    $('#email').change(() => { 
      $('#email-icon').hide();
      if($('#email').val().length < 1){
        $('#email-icon').show();
      }
    });

    $('#msg_subject').change(() => {
      $('#msg_subject-icon').hide();
      if($('#msg_subject').val().length < 1){
        $('#msg_subject-icon').show();
      }
    });

    $('#single-testimonial-item').owlCarousel({     
        items : 1,
        navigation : true,
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });  

    $('#single-testimonial-item').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
    $('#single-testimonial-item').find('.owl-next').html('<i class="fa fa-angle-right"></i>');

      $('#image-carousel').owlCarousel({
        navigation : false,
        pagination: true,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });           

      $('#posts-carousel').owlCarousel({
        navigation : true,
        pagination: true,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });   

      $('#posts-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('#posts-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>'); 
     

      $('#posts-carousel-3col').owlCarousel({
        navigation : true,
        pagination: false,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });

      $('#posts-carousel-3col').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('#posts-carousel-3col').find('.owl-next').html('<i class="fa fa-angle-right"></i>'); 
  
      $('#image-slider').owlCarousel({     
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true     
      });   
      $('#image-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
      $('#image-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
