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

/*#############################################################################*/


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

/* ################################## */

const classActive = 'active';
const mobileBotao = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.cabecalho-menu');
const item = document.querySelectorAll('.cabecalho-menu-item');


mobileBotao.onclick = function(){
    if (document.getElementsByClassName('active').length){
        navbar.classList.remove('active');
        item.forEach(function(item){
            item.classList.remove('active');
        });
    }else{
        navbar.classList.add('active');
        item.forEach(function(item){
            item.classList.add('active');
        });
    }
};

item.forEach(function(element){
    element.onclick = function(){
        navbar.classList.remove('active');
        item.forEach(function(item){
            item.classList.remove('active');
        });
    }
})