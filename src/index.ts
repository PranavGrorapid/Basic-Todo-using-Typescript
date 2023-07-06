import { v4 as uuidv4 } from 'uuid';


const list=document.querySelector<HTMLUListElement>('.listItems')
const forms=document.querySelector<HTMLFormElement>('.todoForm') 
const input=document.querySelector<HTMLInputElement>('.todoInput')



type Task={

  
  _id:string,
  title:string,
  completed:boolean,
  date:Date
}

let tasks:Task[]=loadTask()





forms?.addEventListener("submit",(e)=>{

    e.preventDefault()


    if(input?.value=='' || input?.value==null) return 



    const newTask={

       _id:uuidv4(),
      title:input.value,
      completed:false,
      date:new Date()
    }

    input.value=''

    addTask(newTask)

    




})


let  addTask=(task:Task)=>{

  const listItem=document.createElement("li")
  const label=document.createElement("label")
  const checkbox=document.createElement("input")
  checkbox.type='checkbox'
  checkbox.checked=task.completed

  checkbox.addEventListener('change',(e)=>{

     checkbox.checked==true
  })
 

  tasks.forEach(addTask)


  label.append(checkbox,task.title)
  listItem.append(label)
  list?.append(listItem)

  tasks.push(task)

  saveTasks()

}


function saveTasks(){

  localStorage.setItem('todos',JSON.stringify(tasks))
    

}

function loadTask():Task[]{

  let tasksInfo=localStorage.getItem('todos')

  if(tasksInfo==null) return []

   return   JSON.parse(tasksInfo)
    

}
