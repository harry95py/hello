//Define UI vars

var form=document.querySelector('#task-form');
var tasklist=document.querySelector('.collection');
var clearBtn=document.querySelector('.clear-task');
var filter=document.querySelector('#filter');
var taskInput=document.querySelector('#task');
var btnAddtask=document.querySelector('.btn');

additem();


//create function envet listenner

function additem(){
  //add function
  form.addEventListener('submit',addtask);
  //remove function
  tasklist.addEventListener('click',removeTask);
  //clear task
  clearBtn.addEventListener('click',clearTask);
  //filter task
  filter.addEventListener('keyup',filterTask);
};

function addtask(e){
  if(taskInput.value===''){
    alert('add a task');
  }
  const li=document.createElement('li');
  li.className='collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  const link=document.createElement('a');
  link.className='delete-task secondary-content';
  link.innerHTML='<i class="fa fa-remove"></i>';
  
  //append link to li
  li.appendChild(link);
  //append li to ul
  tasklist.appendChild(li);
  var val=li;
  
  //Store SL
  storeinLocalStorage(taskInput.value);

  taskInput.value='';
  e.preventDefault;
}

function storeinLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    task=[];
  }
  else{
    tasks=JSON.parse(localStorage.getItem('task'));
  }
  tasks.push(task);
  localStorage.setItem('task',JSON.stringify(tasks));
}

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-task')){
    e.target.parentElement.parentElement.remove();
  }
  
};

function clearTask(e){
  tasklist.innerHTML='';
};

function filterTask(e){
  const contentInput=e.target.value;
  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const aline=task.firstChild.textContent;
      if(aline.toLocaleLowerCase().indexOf(contentInput)!=-1){
        task.style.display='block';
      }
      else{
        task.style.display='none';
      }
    }
  );

}

