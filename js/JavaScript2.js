let counter = 1;
function add() {
    let el = document.querySelector('#container');
    let html = `<div id="item${counter}" class="item ms-5">`;
    html += `<div>Item ${counter+1}</div>`;
    html += '<input type="text" class="w-25 p-1 txt" placeholder="Enter some text"/>';
    html += `<button class="btn btn-danger ms-3" onclick="remove(${counter})"> X </button>`;
    html += '</div>';    
    el.insertAdjacentHTML('beforeEnd', html);
    counter++;
}

function remove(num) {
    let el = document.querySelector(`#item${num}`);
    el.remove();
}
