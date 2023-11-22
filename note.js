let arr = {};

//keys + heading
var list_hash_tags = document.getElementById("hash-keys");
var head_content = document.getElementById("heading");

//input 
var tag_id = document.getElementById("tag");
var tag_task = document.getElementById("tasks");
const add_btn = document.getElementById("add-btn");

//list
var to_do = document.getElementById("lists");

//model
const modl = document.getElementById("model");
const close = document.getElementById("close_model");
const open = document.getElementById("delete_val");

//store
var sitesfromstorage = JSON.parse(localStorage.getItem("notebook"));;

var k1;
var v1;
// this is very useful when updating arr = [] to arr = past stored value

if (sitesfromstorage){
  
    arr = sitesfromstorage;
}

function render(arr,key){

    if (key != "" && arr[key].length != 0){
    head_content.textContent = "# " +key + " " +"LIST";
    }
    else{
        head_content.textContent = "# " + "HASH LIST";
    }

    let items = "";
    
    for(let i=0;i<arr[key].length;i++){
        
        if (key != "" && arr[key].length != 0){
        items +=  `
        <li>  ${arr[key][i]}       <button class="del-btn" onclick="del('${key}',${i})"> X </button> </li>
        
        `;
        }
    }
    to_do.style.backgroundColor = '#68e1fd';
    to_do.style.fontSize = '30px';
    to_do.innerHTML = items;

}


add_btn.addEventListener('click', () => {
    // get the value of the input field

 let key = tag_id.value;
 let value = tag_task.value;
 add_value_to_array(key, value);
 localStorage.setItem("notebook", JSON.stringify(arr));
 fetch();

 tag_task.value = "";
 tag_id.value = "";   
});


function add_value_to_array(key, value) {
    // if key does not exist in arr then create it
    
 if (arr[key] == null) {
   arr[key] = [];
 }
 arr[key].push(value);
 
}



function display_keys(){
    let items = "";
    for (let key in arr) {

        if (key != "" && arr[key].length != 0){
        items += `
        <li> <button onclick = "render(arr,'${key}')"> # ${key} </button> </li>
        `;
        }
    }
    list_hash_tags.innerHTML = items;
   
}





function fetch(){
    sitesfromstorage = JSON.parse(localStorage.getItem("notebook"));
    arr = sitesfromstorage;
    if (arr) { 
      render(arr,tag_id.value);
    
    }
    }

function del(key,ind){ 
        modl.style.display = "block"; 
        
            k1 = key;
            v1 = ind;    
    }

function yes(){
    modl.style.display = "none";
    if(v1 >=0 && v1 < arr[k1].length){

        arr[k1].splice(v1,1);
        console.log("supreme"+arr[k1[v1]]);
        localStorage.setItem("notebook", JSON.stringify(arr));
        //print 
        console.log(arr);
        render(arr,k1);
       

        }
    
}

function no(){
    modl.style.display = "none";
}

    display_keys();
   setInterval(display_keys,2000);










