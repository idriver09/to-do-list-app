let container = $('.container');
container.addClass('container');

let userInput = $('#input').val();
let list = $('#list');
let li = (<li></li>);
let addButton = $('#button');
list.append(li);
li.append(userInput);