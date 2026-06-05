let addInput = document.querySelector('.add-input')
let addBtn = document.querySelector('.add-btn')
let todoList = document.querySelector('.todo-list')
let totalTask = []

function addDailyTask() {

    let addNewItem = document.createElement('div')

    if(addInput.value){
    addNewItem.innerHTML = `
                <li class="list-row">
                <div class="grid items-center">$</div>
                <div class="grid items-center">
                    <div>${addInput.value}</div>
                </div>
                <button class="done btn btn-square btn-ghost">
                    <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none"
                            stroke="currentColor">
                            <path
                                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                            </path>
                        </g>
                    </svg>
                </button>
                <button class="delete btn btn-square btn-ghost">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </li>

    `
    todoList.appendChild(addNewItem)
        addInput.value = ''
    } else{
        alert("You didn't add any task. Please add your task.")
    }

    addNewItem.querySelector('.delete').addEventListener('click', ()=>{
        addNewItem.innerHTML = ''
    })
    
    addNewItem.querySelector('.done').addEventListener('click', ()=>{
        addNewItem.style.background = 'green'
        addNewItem.style.color = 'white'
    })
}

addBtn.addEventListener('click', () => {
    addDailyTask()
})