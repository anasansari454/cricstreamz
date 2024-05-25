function navigateTo(url) {
    window.location.href = url;
}

let currentBannerIndex = 0;
const banners = document.querySelectorAll('.banner img');

function rotateBanners() {
    banners[currentBannerIndex].classList.remove('active');
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    banners[currentBannerIndex].classList.add('active');
}

setInterval(rotateBanners, 3000); // Change image every 3 seconds

function shareApp() {
    if (navigator.share) {
        navigator.share({
            title: 'Anas Sports TV',
            text: 'Check out Anas Sports TV for the latest sports updates!',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert('Web Share API not supported in this browser.');
    }
}