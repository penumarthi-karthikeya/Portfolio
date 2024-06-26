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
const menuicon=document.getElementById('menu_icon');
const navlinks=document.querySelector('.div_nav');
menuicon.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
    clickeffect(navlinks);
    document.getElementById('menu_bar').classList.toggle('cross_bar');
})
document.addEventListener('keydown', function(event) {
    if (event.altKey){
        var sectionId = '';
        switch(event.key) {
            case 'h':
                sectionId = 'home';
                break;
            case 'a':
                sectionId = 'about';
                break;
            case 'p':
                sectionId = 'projects';
                break;
            case 'c':
                sectionId = 'contact';
                break;
            default:
                return;
        }
        if (sectionId) {
            window.location.hash = '#' + sectionId;
        }
    }
});
if (window.innerWidth <= 500) {
    let sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    document.addEventListener('dblclick', function() {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    })
};
let logo=document.getElementById("logo");
logo.addEventListener('click',function(){
    window.location.hash='#home';
})
