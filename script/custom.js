//Firebase Connection
const firebaseConfig = {
    apiKey: "AIzaSyCpDLduGgsi1hZ_wacbCdbbI_iIdCjYcPE",
    authDomain: "contactform-425e9.firebaseapp.com",
    databaseURL: "https://contactform-425e9-default-rtdb.firebaseio.com",
    projectId: "contactform-425e9",
    storageBucket: "contactform-425e9.appspot.com",
    messagingSenderId: "769332378845",
    appId: "1:769332378845:web:3eba12f66cd31c5628af34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //ref database
  const contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contact-form').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    /*get values*/
    var name = getValues('contact-name');
    var email = getValues('contact-email');
    var phone = getValues('contact-phone');
    var message = getValues('contact-message');

    /*save messages*/
    saveMessages(name, email, phone, message);

     /* Show thank you */
      document.querySelector('.thank-you').style.display = 'block';

      setTimeout(function(){
      document.querySelector('.thank-you').style.display = 'none';
      }, 3000);

      document.getElementById('contact-form').reset();
  }



  const saveMessages = (name, email, phone, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      name : name,
      email : email,
      phone : phone,
      message : message
    });
  }

  function getValues(id){
      return document.getElementById(id).value;
  }

/* Scroll Sticky */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

let header_wrap = document.querySelector('.header_wrap');
let logo_size = document.querySelector('.logo-wrap img');
/*let sticky_mobile = document.querySelector('.mobile-header');*/


  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header_wrap.classList.add("sticky-header");
    logo_size.classList.add('width-scale');
    
  } else {
    header_wrap.classList.remove("sticky-header");
    header_wrap.classList.remove("width-scale");
  }
}


/* Cursor JS Code*/

let innerCursor = document.querySelector('.custom-cursor-inner');
outerCursor = document.querySelector('.custom-cursor-outer');


document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
	let x = e.clientX;
	let y = e.clientY;

	/*console.log(x,y);*/

	innerCursor.style.left = `${x}px`;
	innerCursor.style.top = `${y}px`;
	outerCursor.style.left = `${x}px`;
	outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll('a'));


links.forEach((link)  => {
	link.addEventListener("mousemove", () =>{
		innerCursor.classList.add("grow");
	});
	link.addEventListener("mouseleave", () =>{
		innerCursor.classList.remove("grow");
	});
});

/*End Of Cursor JS*/

/* Mobile links Active*/
let mlinks = Array.from(document.querySelectorAll('.navigation-links a'));

function activeLink(){
  mlinks.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
  mlinks.forEach((item) =>
    item.addEventListener('click', activeLink)
  )



/* Slider BX Custom */
$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600,
  touchEnabled: false
});
/* End of Slider BX */



/* Scroll Reveal */
	ScrollReveal({ 
		/*reset: true,*/
		distance: '60px',
		duration: 1500,
		delay: 400 
	});
	ScrollReveal().reveal('.content-wrap-img, .wrap-title, .description-wrap', { delay: 300, origin: 'bottom' });
	ScrollReveal().reveal('.content-wrap-text, .skill-container .col-5-lg:nth-child(1), .navigation-wrap ', { delay: 300, origin: 'right' });
	ScrollReveal().reveal('.box-content-wrap:nth-child(1), .skill-container .col-5-lg:nth-child(2)', { delay: 300, origin: 'left' });
	ScrollReveal().reveal('.box-content-wrap:nth-child(2)', { delay: 400, origin: 'left' });
	ScrollReveal().reveal('.box-content-wrap:nth-child(3)', { delay: 500, origin: 'left' });
	ScrollReveal().reveal('.work-content-title', { delay: 500, origin: 'bottom' });
	ScrollReveal().reveal('.bx-slider-img, .container-form', { delay: 500, origin: 'top' });
	ScrollReveal().reveal('.logo-wrap, .contact-wrap	', { delay: 100, origin: 'left' });

	
	

	

/* End of Scroll Reveal */