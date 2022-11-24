wishList = document.querySelector('#wishList').addEventListener('submit', function(e){
    e.preventDefault();
    const item = document.querySelector('#item').value 
    const listContainer = document.querySelector('#listContainer')
    const list = document.createElement('li')
    const button = document.querySelector('#refresh')
    const str = item
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    list.innerText = str2;
    list.style.marginLeft = '15px'
    listContainer.append(list)
    document.querySelector('#item').value = '' 
    if(item === ''){
        return list.remove()
    }
    button.addEventListener('click', function(){
        listContainer = ''
    })
    if(list.length === 15){
        list.remove()
    }
    
})

listContainer.addEventListener('submit', function(){
    wishList 
})



