 async function  businessInformation(){
     let businesses= document.querySelector('.Business-companies')
     let companies =[]



     const response = await fetch('https://dastbal.github.io/project/js/cities.json')
     const  data = await response.json()
     console.log(data)




     data['companies'].forEach( company => {
        let container = document.createElement('div')
        let h2 = document.createElement('h2')




        h2.innerHTML = company.name




        container.append(h2)
        companies.push(container)
    } )
    
    businesses.append(...companies)
}

businessInformation()