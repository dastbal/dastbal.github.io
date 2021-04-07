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






let lazy = document.querySelectorAll('.lazy')
resgisterImgs(lazy)