
const mqM = window.matchMedia('(max-width:700px)');
const itemImages=document.querySelector('.main-body .item-images');
const template = document.querySelector('#img-to-display');
const menu=document.querySelector('.menu');

const clone=template.content.cloneNode(true);
if(mqM.matches){
    mainBody.replaceChild(clone, itemImages);
   
}
body.addEventListener('click',(e)=>{
    const menuIcon=document.querySelector('.menu-icon');
    const mobileCrossIcon=document.querySelector('.mobile-menu-cross-icon')
    if(mqM.matches)
    mobileCrossIcon.classList.remove('hidden')
    if(menuIcon.contains(e.target))
          menu.style.display='flex';
    if(mobileCrossIcon.contains(e.target))
          menu.style.display='none';
})
mqM.addEventListener('change',(e)=>{
    const imageDisplayBox=document.querySelector('.image-display-box');
    if(mqM.matches && imageDisplayBox==null){
        mainBody.replaceChild(clone, itemImages);
    }
    if(mqM.matches && imageDisplayBox!=null){
        mainBody.replaceChild(imageDisplayBox, itemImages);
    }
    if(!mqM.matches){
        const mobileCrossIcon=document.querySelector('.mobile-menu-cross-icon')
    mobileCrossIcon.classList.add('hidden')
       console.log(imageDisplayBox);;
        mainBody.replaceChild(itemImages, imageDisplayBox );
    }
      
})