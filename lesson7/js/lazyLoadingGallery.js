let images = document.querySelectorAll('img[data-src]')
const observer = new IntersectionObserver( (entries,observer)=>{
    entries.forEach(entry=> {
        if ( entry.isIntersecting){

            //  I add target because load function need to recieve a elemnt ready to modify not a entry of the intersection observer
            load(entry.target)
            console.log('hey')
            observer.unobserve(entry.target)
            //  I adde a class to remove the filter with the transition
            entry.target.className="blur"
        }
    })
} ,{  root:null, rootMargin: '0px 0px 100px 0px' ,threshold:0.1}
    )
    const load =(img)=> {
        img.src=img.dataset.src

    }
    // le paso todas las imagenes para que empieze a observar
    images.forEach((img) => {
        observer.observe(img);})
    