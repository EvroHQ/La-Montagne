let element = document.querySelector('#content');
let currentScroll = element.scrollTop;
let totalHeight = element.scrollHeight;
element.scrollTop = currentScroll + 100;

document.querySelector('.arrow').addEventListener('click', function () {
    setTimeout(() => {
        document.querySelector('#content').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
            offset: 2000,
            duration: 2000
        });
    }, 150);
});
