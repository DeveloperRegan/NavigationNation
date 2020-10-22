const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5]

function navAnimation(before, after){
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${before}-${i+1}`, `slide-${after}-${i+1}`)
    })
}
function toggleNav() {
    menuBars.classList.toggle('change');

//    Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        //Animate In- OverLay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        let count = 1;
        navAnimation('out', 'in');

    }
    else{
        //Animate out
        overlay.classList.replace( 'overlay-slide-right','overlay-slide-left');
        navAnimation('in', 'out');
    }
}

// Event listenter
menuBars.addEventListener('click', toggleNav);
