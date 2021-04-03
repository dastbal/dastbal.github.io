 async function  businessInformation(){
     let businesses= document.querySelector('.Business-companies')
     let companies =[]



     const response = await fetch('https://dastbal.github.io/project/js/cities.json')
     const  data = await response.json()
     console.log(data)




     data['companies'].forEach( company => {
        let container = document.createElement('div')
        let name = document.createElement('h2')
        let logo = new Image
        let phone = document.createElement('p')
        let link = document.createElement('a')
        let description = document.createElement('p')
        let first = document.createElement('div')
        let second = document.createElement('div')



        name.innerHTML = company.name
        link.innerHTML = company.link
        link.setAttribute('href' , `https://${company.link}`) 
        link.setAttribute('target' , `_blank`) 
        phone.innerHTML = company.phone + "<br/> "+ company.address
        logo.setAttribute('src',company.logo)
        logo.setAttribute('alt',company.name)
        container.classList.add('Business-company')
        container.classList.add('Card-grid')
        description.innerHTML= company.description


        first.append(phone,link)
        second.append(logo,first,description)
        container.append(name,second)
        companies.push(container)
    } )
    
    businesses.append(...companies)
}

businessInformation()

