const isIntersecting = (entry)=> entry.isIntersecting;
const loadImg = (img)=>{
    img.target.src = img.target.dataset.src
    observer.unobserve(img.target)
}

const observer = new IntersectionObserver((entries,observer)=>{
    entries.filter(isIntersecting).forEach(loadImg)
})

export  const resgisterImg = (images) =>{
    images.forEach( img=>{

        observer.observe(img)
    }
    )
}