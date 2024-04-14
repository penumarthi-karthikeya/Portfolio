const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
function clickeffect(item){
    item.classList.add("click");
    setTimeout(() => {
        item.classList.remove("click");
    }, 500);
}
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const ok = document.querySelectorAll('.nav_links');
ok.forEach((item) => {
    item.addEventListener('click', () => {
        clickeffect(item)
    });
});
const cl=document.getElementById('cl');
const lr=document.getElementById('lr');
const rr=document.getElementById('rr');
lr.addEventListener('click', function() {
    clickeffect(lr)
    cl.scrollBy(-500, 0);
    if (window.innerWidth <= 500) {
        cl.scrollBy(-window.innerWidth+66, 0);
    }
    if (window.innerWidth <= 1000 & window.innerWidth >= 500 ) {
        cl.scrollBy(-400, 0);
    }
});
rr.addEventListener('click', function() {
    clickeffect(rr)
    cl.scrollBy(500, 0);
    if (window.innerWidth <= 500) {
        cl.scrollBy(window.innerWidth-67, 0);
    }
    if (window.innerWidth <= 1000 & window.innerWidth >= 500 ) {
        cl.scrollBy(400, 0);
    }
});
const menuicon=document.getElementById('menu_icon')
const navlinks=document.querySelector('.div_nav')
const menubar=document.getElementById('menu_bar')
menuicon.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
    menubar.classList.toggle('crossbar');
    menubar.classList.toggle('menu_bar');
    clickeffect(navlinks);
})
