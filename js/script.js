// EFEITO MENU MOBILE
var menuBtn = document.querySelector('.items-menu-mobile i');
menuBtn.addEventListener('click',()=>{
    let itemsMenu = document.querySelector('.menu-mobile');

    if(itemsMenu.classList.contains('show')){// SE FOR CLICADO ELE É ACIONADO

    itemsMenu.classList.remove('show') // FECHAR 
    itemsMenu.classList.add('hide') // ABRIR

    }else{ // CASO FOR AO CONTRARIO

        itemsMenu.classList.remove('hide')// FECHAR
        itemsMenu.classList.add('show')// ABRIR
    }
});