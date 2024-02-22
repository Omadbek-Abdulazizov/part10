window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    year = document.querySelector('#year'),
    typee = document.querySelector('#yonalish'),
    btn = document.querySelector('.input_btn'),
    bookList = document.querySelector('#book_list');
    
    
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        
        if(title.value == '' && author.value == '' && year.value == '' && typee.value == '' ){
            alert('Value is not found, please enter your information');
        }else{
            const newRow = document.createElement('tr')
            
            
            const newTitle = document.createElement('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)
            
            
            
            const newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)
            
            
            const dataYear = document.createElement('th')
            dataYear.innerHTML = year.value
            newRow.appendChild(dataYear)
            
            
            const newTypee = document.createElement('th')
            newTypee.innerHTML = typee.value
            newRow.appendChild(newTypee)
            
            bookList.appendChild(newRow)
            
            title.value = ''
            author.value = ''
            year.value = ''
            typee.value = ''
        }
    })
})