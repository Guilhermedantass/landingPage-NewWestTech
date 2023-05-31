/*############################   ANIMAÇÃO           #################################################*/

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animete';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}

/*############################  SCROLL SUTIL              #################################################*/


const menuItens = document.querySelectorAll('.cabecalho-menu-item');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref (event.target) - 50;
    
    scrollToPosition(to);

}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior:"smooth"
    });
}

function getScrollTopByHref (element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}


/* ################  BARRA LATERAL             ########################## */


openMenu.addEventListener('click',  () => {
    document.getElementById("menu").style.display = "flex";

    document.getElementById("menu").style.right = ((document.getElementById("menu").offsetWidth) * -1) + 'px';

    openMenu.style.display = 'none';

    setTimeout(()=>{
        document.getElementById("menu").style.opacity = '1';

        document.getElementById("menu").style.right = 0
    }, 20)
    
})
closeMenu.addEventListener('click',  () => {
    document.getElementById("menu").style.opacity = '0';

    document.getElementById("menu").style.right = (document.getElementById("menu").offsetWidth * -1) + 'px';

    setTimeout(()=>{
        document.getElementById("menu").removeAttribute('style');
        openMenu.removeAttribute('style');
    }, 200)

    
})