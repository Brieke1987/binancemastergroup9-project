"use strict";
window.onload=function(){window.setTimeout(fadeout,500);}
function fadeout(){
	document.querySelector('.preloader').style.opacity='0';
	document.querySelector('.preloader').style.display='none';
}

window.onscroll=function(){
	var header_navbar=document.querySelector(".navbar-area");
	var sticky=header_navbar.offsetTop;
	if(window.pageYOffset>sticky){
		header_navbar.classList.add("sticky");
	}
	else{
		//header_navbar.classList.remove("sticky");
	}

	var backToTo=document.querySelector(".scroll-top");
	if(document.body.scrollTop>50||document.documentElement.scrollTop>50){
		backToTo.style.display="block";
	}else
	{
		backToTo.style.display="none";
	}
};
// function onScroll(event){
// 	var sections=document.querySelectorAll('.page-scroll');
// 	var scrollPos=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
// 	for(var i=0;i<sections.length;i++){
// 		var currLink=sections[i];
// 		console.log(currLink);
// 		var val=currLink.getAttribute('href');
// 		console.log(val)
// 		var refElement=document.querySelector(val);
// 		var scrollTopMinus=scrollPos+73;
// 		if(refElement.offsetTop<=scrollTopMinus&&(refElement.offsetTop+refElement.offsetHeight>scrollTopMinus)){
// 			document.querySelector('.page-scroll').classList.remove('active');
// 			urrLink.classList.add('active');
// 		}
// 		else{
// 			currLink.classList.remove('active');
// 		}
// 	}
// };
// window.document.addEventListener('scroll',onScroll);
// let navbarToggler=document.querySelector(".navbar-toggler");
// var navbarCollapse=document.querySelector(".navbar-collapse");
// document.querySelectorAll(".page-scroll").forEach(e=>e.addEventListener("click",()=>{navbarToggler.classList.removeClass("active");
// 	navbarCollapse.classList.remove('show')}));
// navbarToggler.addEventListener('click',function(){navbarToggler.classList.toggle("active");});

new WOW().init();
const countDownClock=(number=100,format='seconds')=>{const d=document;const daysElement=d.querySelector('.days');const hoursElement=d.querySelector('.hours');const minutesElement=d.querySelector('.minutes');const secondsElement=d.querySelector('.seconds');let countdown;convertFormat(format);function convertFormat(format){switch(format){case 'seconds':return timer(number);case 'minutes':return timer(number*60);case 'hours':return timer(number*60*60);case 'days':return timer(number*60*60*24);}}
function timer(seconds){
	const now=Date.now();
	const then=now+seconds*1000;
	countdown=setInterval(()=>{const secondsLeft=Math.round((then-Date.now())/1000);
		if(secondsLeft<=0){clearInterval(countdown);
			return;
		};

		displayTimeLeft(secondsLeft);},1000);}

function displayTimeLeft(seconds){
	//daysElement.textContent=Math.floor(seconds/86400);
	hoursElement.textContent=Math.floor((seconds%86400)/3600);
	minutesElement.textContent=Math.floor((seconds%86400)%3600/60);
	secondsElement.textContent=seconds%60<10?`0${seconds%60}`:seconds%60;}}
if (window.location.pathname.split('/').pop() == "index4.html"){countDownClock(6,"hours");};

if(location.href.indexOf('contact') > -1){
	document.getElementById("contact-form").onsubmit = function() {myFunction()};
}

function myFunction() {
  alert("Thanks for your feedback, The customer care team will get back to you");
}

const page = () => {
	return (location.href.split('/').pop()).split('.').shift();
}

document.querySelectorAll(".page-scroll").forEach((e) => {
	e.classList.remove('active');
	if(page() == e.textContent.toLowerCase() || (page() == 'index4' && e.textContent.toLowerCase() == 'home')){
		e.classList.add('active');
	}
});
function addWalletFunc(){
	//This function should load up different wallets for the user to choose from
	//And return true if wallet was successfully added
	return true;
}

function bondSignInOrOut(argument) {
	//This function is used to add users address 
	//And display bond options if signed in else 
	//The user only sees the Add wallet button
	if (addWalletFunc() == true){
		document.getElementById("addWallet").style.display = "none";
		document.getElementById("flow").style.display = "flex";
	}

}
