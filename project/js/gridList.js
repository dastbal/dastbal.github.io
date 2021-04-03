
function addGrid(){
    let businessContainer= document.querySelector('.Business-companies')
    let grid = document.querySelectorAll('.Business-company')

    if (grid[1].classList[1]==='Card-list'){  //verifica si esta  activa  la clase card list 
        
        businessContainer.classList.toggle('card')
        businessContainer.classList.toggle('list')

        grid.forEach(
            company => {
                company.classList.toggle('Card-grid') // añade  esta clase si esta activa card-list
                company.classList.toggle('Card-list') // remueve  card-list si esta  esta activa
            }
        )
    }
    
}

function addList(){
    let list = document.querySelectorAll('.Business-company')
    let businessContainer= document.querySelector('.Business-companies')

    if (list[1].classList[1]==='Card-grid'){
        businessContainer.classList.toggle('card')
        businessContainer.classList.toggle('list')

    list.forEach(
        company =>{ 
            company.classList.toggle('Card-grid')
            company.classList.toggle('Card-list')
        }
    )
    }

}