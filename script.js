function newItem(){
let userInput = $('#input').val();
let list = $('#list');
let li = $('<li></li>');
let crossOutButton = $('<button></button)');
crossOutButton.append(document.createTextNode('X'));
crossOutButton.addClass("crossOutButton");

list.append(li);
li.append(userInput);
li.append(crossOutButton);



if (userInput === ''){
    alert('input required');
}
else {
    list.append.li;
}

li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
 });

 crossOutButton.on("click", function (){
        li.addClass("delete");
 });

$('#list').sortable();

}