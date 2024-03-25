$('.check').click((event)=>{
    // event.target.nextSibling.textContent()
console.log(event);
event.target.nextElementSibling.classList.toggle('compeleted')
})


















// const todoInp = document.getElementById('todoInput')
// const submitbtn = document.getElementById('btn')
// const todoList = document.getElementById('todo-list-items')

// submitbtn.addEventListener('click', ()=>{
//     listValue = todoInp.value
//    if(listValue){

//     // creating list
//     let createitem = document.createElement('li')

//     // Creating CheckBox
//     let newCheckbx = document.createElement('input')
//     newCheckbx.type = 'checkbox'

//     //Creating Label
//     let newLabel = document.createElement('label')
//     newLabel.textContent = listValue

//     //appending values to list items
//     createitem.appendChild(newCheckbx)
//     createitem.appendChild(newLabel)


//     //appending list item to to-do list
//     todoList.appendChild(createitem)
//    }

//    todoInp.value = ''
// })

// todoList.addEventListener('click',(event)=>{
//     clickEvent = event.target
// console.log(event.target.nextElementSibling.classList.toggle);
//     if(clickEvent.tagName == 'INPUT'){
//         clickEvent.nextElementSibling.classList.toggle('compeleted')
//     }
// })