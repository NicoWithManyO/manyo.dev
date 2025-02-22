
window.addEventListener('scroll', () => {
    const slogan = document.querySelector('.slogan');
    const headertoscroll = document.querySelector('.headertoscroll');
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage >= 10) {
        slogan.classList.add('scrolled');
        headertoscroll.classList.add('bar-scrolled')
    } else {
        slogan.classList.remove('scrolled');
        headertoscroll.classList.remove('bar-scrolled')
    }
});