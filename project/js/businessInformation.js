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
        let address = document.createElement('p')
        let link = document.createElement('a')




        name.innerHTML = company.name
        link.innerHTML = company.link
        phone.innerHTML = company.phone
        address.innerHTML = company.address
        logo.setAttribute('src',company.logo)
        logo.setAttribute('alt',company.name)



        container.append(name,phone,address,link,logo)
        companies.push(container)
    } )
    
    businesses.append(...companies)
}

businessInformation()