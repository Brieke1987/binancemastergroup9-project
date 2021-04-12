"use strict";

window.onload = function() { window.setTimeout(fadeout, 500); }

function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
}

window.onscroll = function() {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;
    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
    } else {
        //header_navbar.classList.remove("sticky");
    }

    var backToTo = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTo.style.display = "block";
    } else {
        backToTo.style.display = "none";
    }
};

new WOW().init();
const countDownClock = (number = 100, format = 'seconds') => {
    const d = document;
    const daysElement = d.querySelector('.days');
    const hoursElement = d.querySelector('.hours');
    const minutesElement = d.querySelector('.minutes');
    const secondsElement = d.querySelector('.seconds');
    let countdown;
    convertFormat(format);

    function convertFormat(format) { switch (format) {
            case 'seconds':
                return timer(number);
            case 'minutes':
                return timer(number * 60);
            case 'hours':
                return timer(number * 60 * 60);
            case 'days':
                return timer(number * 60 * 60 * 24); } }

    function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;
        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if (secondsLeft <= 0) {
                clearInterval(countdown);
                return;
            };

            displayTimeLeft(secondsLeft);
        }, 1000);
    }

    function displayTimeLeft(seconds) {
        //daysElement.textContent=Math.floor(seconds/86400);
        hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
        minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
        secondsElement.textContent = seconds % 60 < 10 ? `0${seconds%60}` : seconds % 60;
    }
}

if (window.location.pathname.split('/').pop() == "index.html") { countDownClock(6, "hours"); };

if (location.href.indexOf('contact') > -1) {
    document.getElementById("contact-form").onsubmit = function() { myFunction() };
}

function myFunction() {
    alert("Thanks for your feedback, The customer care team will get back to you");
}

const page = () => {
    return (location.href.split('/').pop()).split('.').shift();
}

document.querySelectorAll(".page-scroll").forEach((e) => {
    e.classList.remove('active');
    if (
    	page() == e.textContent.toLowerCase() || 
    	(page() == 'index' && e.textContent.toLowerCase() == 'home')
    ) {
        e.classList.add('active');
    }
});


var AUSD = {
    currentAccount: null,
    walletButton: document.querySelector('.address-btn'),
    web3: null,

    init(){
        // console.log(this);
        if(window.ethereum){
            this.web3 = new Web3(window.ethereum);
            this.web3.currentProvider.on('accountsChanged', this.handleAccountsChanged);
            this.walletButton.addEventListener('click', this.signInOrOut);
        }else{
            console.log('ethereum not available')
        }
    },

    addWalletFunc() {
        AUSD.web3.currentProvider.request({ method: 'eth_requestAccounts' })
        .then(AUSD.handleAccountsChanged)
        .catch((err) => {
            if(err.code === 4001){
                window.location.reload();
            }else if(err.code === -32002){
                alert('Wallet connection in progress. kindly complete it to continue');
            }
        });
    },

    signInOrOut(e){
        e.preventDefault();
        AUSD.addWalletFunc();
        // console.log(AUSD.web3);
    },

    handleAccountsChanged(accounts) {
      if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
      } else if (accounts[0] !== AUSD.currentAccount) {
        AUSD.currentAccount = accounts[0];
        AUSD.walletButton.style.display = 'none';
        // console.log(AUSD, accounts)
      }
    }

}

AUSD.init();