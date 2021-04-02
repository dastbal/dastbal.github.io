 async function  businessInformation(){
     let businesses= document.querySelector('.Business-companies')
     const response = await fetch('/project/directory.html')
     const  data = await response.json()
     console.log(data)
     data['companies'].forEach( company => {
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        h2.innerHTML = company.name
        div.append(h2)
    } )
    businesses.append(business)

}