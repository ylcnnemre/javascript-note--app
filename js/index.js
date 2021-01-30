

const addBtn=document.getElementById("add");

addBtn.addEventListener("click",()=>{
    addNewNote();
})
var index=1;
function addNewNote()
{
    
    const note=document.createElement("div");
    note.classList.add("note"); 
    
    note.innerHTML=`
            <div class="notes">
        <div class="tools">
            <div class="note-header">  
            
            <h5>note-${index} </h5>
            </div>
            
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <div class="main hidden">
        
        </div>  
        <textarea ></textarea>
        </div>
    `
    index+=1;
    const editBtn=note.querySelector(".edit");

const deleteBtn=note.querySelector(".delete");


const main=note.querySelector(".main");
const textarea=note.querySelector("textarea");




editBtn.addEventListener("click",()=>{

    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
})

deleteBtn.addEventListener("click",()=>{
    if(confirm("eminmisin"))
    {
        note.remove();
    }
    
})

textarea.addEventListener("input",(e)=>{
    const{value}=e.target;
    console.log("asdadas")
    main.innerHTML=marked(value);
    
})


    document.body.appendChild(note);
}


