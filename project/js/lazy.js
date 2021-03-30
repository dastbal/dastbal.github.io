const isIntersecting = (entry)=> entry.isIntersecting;
const loadImg = (img)=>{
    img.target.src = img.target.dataset.src
    observer.unobserve(img.target)
}

const observer = new IntersectionObserver((entries,observer)=>{
    entries.filter(isIntersecting).forEach(loadImg)
})

const resgisterImgs = (images) =>{
    images.forEach( img=>{

        observer.observe(img)
    }
    )
}
const resgisterImg = (image) =>{

        observer.observe(image)

}


// IMAGES OF THE SOCIAL LIMKS

let socialImages = document.querySelectorAll('.socialImage')
resgisterImgs(socialImages)
// IMAGES OF THE companies

let companyImages = document.querySelectorAll('.Company-image')
resgisterImgs(companyImages)
// IMAGE of the Hero

let HeroImage = document.querySelector('.Hero-img')
resgisterImg(HeroImage)