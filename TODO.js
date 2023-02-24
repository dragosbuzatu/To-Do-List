
function kill_my_task(killer_id) {
    killer_button = document.getElementById(killer_id);
    killer_button.parentNode.parentNode.remove()
}

let butonulall = document.getElementById("buton-all");

butonulall.addEventListener('click',checkall);

function checkall () {

    let checkallarray = document.getElementsByClassName("to-do-list-item");


    for(let i = 1; i < checkallarray.length; i++) {
        checkallarray[i].style.display = 'block';
    }
}


let butonulactive = document.getElementById("buton-active");

butonulactive.addEventListener("click",checkactive);

function checkactive () {

    let checkactivearray = document.getElementsByClassName("to-do-list-item");
    let checkactivearraycheckbox = document.getElementsByClassName("to-do-input");


    for(let i = 1; i < checkactivearray.length; i++) {
       if(checkactivearraycheckbox[i].checked === true )  checkactivearray[i].style.display = "none"; 
       else { checkactivearray[i].style.display = 'block'; }

      
    }
}

let butonulcompleted = document.getElementById("buton-completed");

butonulcompleted.addEventListener("click",checkcompleted);

function checkcompleted () {

    let checkcompletedarray = document.getElementsByClassName("to-do-list-item");
    let checkcompletedarraycheckbox = document.getElementsByClassName("to-do-input");


    for(let i = 1; i < checkcompletedarray.length; i++) {
       if(checkcompletedarraycheckbox[i].checked === true )  checkcompletedarray[i].style.display = "block"; 
       else { checkcompletedarray[i].style.display = 'none'; }

      
    }
}
let green_my_array = document.getElementsByClassName("to-do-list-item");


function green_my_list_item (j) {

    let green_this = document.getElementById(j);
    green_this.parentNode.parentNode.childNodes[3].classList.toggle('to-do-text-green');

    green_this.parentNode.parentNode.childNodes[5].childNodes[1].classList.toggle("to-do-buton-red");
    green_this.parentNode.parentNode.childNodes[5].childNodes[1].classList.toggle("to-do-buton-green");

}


function create_div(name) {
    let li = document.createElement('div');
    li.textContent = name;
    return li;
}

function Create_list_item_input(ele) {
    if(event.key === 'Enter' && ele.value !="" ) {
        console.log(ele.value)
        const new_task = document.getElementById("listid").childNodes[1];
        const clone = new_task.cloneNode(true);
        clone.childNodes[3].childNodes[1].textContent = ele.value;
        clone.childNodes[1].childNodes[1].id = "input" +( Math.random ()*10 )
        clone.childNodes[5].childNodes[1].id = 'buton' +( Math.random ()*10 )
        clone.classList.toggle('phantom')
        document.getElementById("listid").appendChild(clone);  
        document.getElementById('input-new-task').value = null
    }
}
console.log(document.getElementsByClassName("to-do-list-item").length-1)

function tuducount (){
    document.getElementById("to-do-counter").textContent = 'total taskuri: ' + (document.getElementsByClassName("to-do-list-item").length-1)

}
setInterval(tuducount, 500)

function checkemall(){
    let its_all_done = 0;
    let way_behind = 0;

    tasks_status = document.getElementsByClassName('to-do-input');

    for(let i = 1; i < tasks_status.length; i++) {
        if(tasks_status[i].checked == true) way_behind = 1;
        if(tasks_status[i].checked == false) its_all_done = 1;
    }
    if(way_behind == 1 && its_all_done == 1 ) {
        for(let i = 1; i < tasks_status.length; i++) {
           
           if( tasks_status[i].checked == false ) {
               tasks_status[i].checked = true;
               green_my_list_item(tasks_status[i].id)
           }
        }  
    }
    else {
        for(let i = 1; i < tasks_status.length; i++) {
            if( tasks_status[i].checked == false ) {
                tasks_status[i].checked = true;}
            else { 
                tasks_status[i].checked = false;}

            green_my_list_item(tasks_status[i].id)
        }  
    }
}

    const iconMoon = document.querySelector('.night');

    const body = document.body;
    

    const btnMode = document.getElementById('buton-DnN');

    btnMode.addEventListener('click', () => {

    body.classList.toggle("dark-mode");
    document.getElementById("to-do-title").classList.toggle('rainbow')
    document.getElementsByClassName('to-do-footer')[0].classList.toggle('rainbow')
    let tu_du_btn = document.getElementsByClassName("icon")[0]

    tu_du_btn.classList.toggle('fa-moon-o')
    tu_du_btn.classList.toggle('night')

    tu_du_btn.classList.toggle('fa-sun-o')
    tu_du_btn.classList.toggle('day')

    
});