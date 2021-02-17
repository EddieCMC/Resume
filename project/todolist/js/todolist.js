/*var button = document.getElementById("button");
var box = document.getElementById('body')
box.addEventListener('mousemove', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);
    document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
}*/

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);


//add item
function addItem(e){
    e.preventDefault();

//get input value

var newItem = document.getElementById('item').value;

//creat new li element
var li = document.createElement('li');

//add.class
li.className = 'list__group__item';

//add text node with input value
li.appendChild(document.createTextNode(newItem));

//creat del button element

var deleteBtn = document.createElement('button');

//add classes to del button
deleteBtn.className = "btn delete";

//append text node
deleteBtn.appendChild(document.createTextNode('x'));

//append button to li
li.appendChild(deleteBtn);

//append li to list
itemList.appendChild(li);

//reset input
form.reset();
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('btn')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//rest input
