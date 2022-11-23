const body = document.querySelector('body');
const mainBody = document.querySelector('.main-body');
const imgArray = document.querySelector('.item-images').querySelectorAll('img');
const itemPriceContainer=document.querySelector('.item-price');
const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./master//images//image-product-3.jpg",
    "./master//images//image-product-4.jpg"];

imgArray.forEach(function (img) {
    img.addEventListener('click', (event) => {
        const template = document.querySelector('#img-to-display');
        const clone = template.content.cloneNode(true);
        clone.querySelector('.item-main-image').setAttribute('style', 'height:75vh');
        body.setAttribute('style', "background-color: rgba(0, 0, 0, 0.55)");
        mainBody.prepend(clone);
    })
});

body.addEventListener('click', (event) => {
    const imageDisplayBox = document.querySelector('.image-display-box');
    if (imageDisplayBox != null) {
        itemPriceContainer.style.visibility="hidden";
        removeImageDisplayBox(event, imageDisplayBox);
        changeImages(event, imageDisplayBox);
        changeImagesOnArrowClick(event, imageDisplayBox);
    }
});

function removeImageDisplayBox(event, imageDisplayBox) {
    const crossIcon = document.querySelector('.cross-icon').firstElementChild;
    if (crossIcon.contains(event.target)) {
        itemPriceContainer.style.visibility="visible";
        body.setAttribute('style', "background-color:white");
        imageDisplayBox.remove();
    }

}

function changeImages(event, imageDisplayBox) {
    const catalog = imageDisplayBox.querySelectorAll('.catalog img');
    const mainImage = imageDisplayBox.querySelector('.item-main-image img')
    catalog.forEach(function (thumbnail) {
        if (thumbnail.contains(event.target)) {
            const getSrc = thumbnail.getAttribute('src');
            const stringSrc = getSrc.split('-thumbnail');
            const newImage = stringSrc[0] + stringSrc[1];
            console.log(newImage)
            mainImage.setAttribute('src', newImage);
        }
    })
}

function changeImagesOnArrowClick(event, imageDisplayBox) {
    const arrowLeft = imageDisplayBox.querySelector('.arrow.left');
    const arrowRight = imageDisplayBox.querySelector('.arrow.right');
    const mainImage=imageDisplayBox.querySelector('.item-main-image img');
    const mainImageSrc = mainImage.getAttribute('src');
    let index=images.indexOf(mainImageSrc);
    console.log(index);
    if (arrowLeft.contains(event.target)) {
        index--;
        if(index==-1)
           index=3;
    }
    if (arrowRight.contains(event.target)) {
        index++;
        if(index==4)
           index=0;
    }
    mainImage.setAttribute('src', images[index]);   
}
