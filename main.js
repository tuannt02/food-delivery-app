// Get DOM
const textDownloadDOM = document.querySelector('.text-download > h4');
const solidBtnDOM = document.querySelector('.group-btn-download button:first-child');
const regularBtnDOM = document.querySelector('.group-btn-download button:last-child');
const subtitleDOM = document.querySelector('.copyright');

// Declare state var
const mobileState = {
    textDownload: 'Most calendars are designed for teams',
    solidBtn: 'Buy now',
    regularBtn: 'Try for free',
    subtitle: "Just type what's on your mind and we'll",
};

const nonMobileState = {
    textDownload: 'Available on your favorite store. Start your premium experience now',
    solidBtn: 'Playstore',
    regularBtn: 'App store',
    subtitle: 'Copywright 2020 Bella Onojie.com',
};

// Func setState
const setState = (state) => {
    textDownloadDOM.innerText = state.textDownload;
    solidBtnDOM.innerText = state.solidBtn;
    regularBtnDOM.innerText = state.regularBtn;
    subtitleDOM.innerText = state.subtitle;
};

const matchForMobile = (width) => {
    if (width.matches) {
        // Mobile
        setState(mobileState);
    } else {
        // Tablet, PC
        setState(nonMobileState);
    }
};

// Get width-screen from browser
var widthScreen = window.matchMedia('(max-width: 46.1875em)');

matchForMobile(widthScreen);
widthScreen.addEventListener('change', matchForMobile); // Event listener onchange of widthScreen
