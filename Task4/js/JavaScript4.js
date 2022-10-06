let searchUser = [];

function renderUsers(users) {
    let html = '<table class="table">';
    html += '<tr>';
    html += '<th>Id</th>';
    html += '<th>Name</th>';
    html += '<th>Lastname</th>';
    html += '<th>Age</th>';
    html += '<th>Salary</th>';
    html += '</tr>';
    searchUser.forEach(val => {
        html += '<tr>';
        html += `<td>${val.id}</td><td>${val.name}</td>`;
        html += `<td>${val.lastName}</td><td>${val.age}</td>`;
        html += `<td>${val.salary}$</td>`;
        html += '</tr>';
    });

    html += '</table>';
    $('#users').html(html);
}


function load() {
    $.ajax({
        url: 'https://blacatzacademy.com/api/users',
        type: 'GET',
        success: function (response) {
            searchUser = response;
            renderUsers(searchUser);
        }
    });
}


$('#search').click(function () {
    let searchValue = $('#userId').val();

    if (searchValue != null) {
        $.ajax({
            url: `https://blacatzacademy.com/api/users?id=${searchValue}`,
            type: 'GET',
            success: function (user) {
                searchUser = user;
                renderUsers(searchUser);
                console.log(searchUser);
            }
        });
    }
});

$(function () {
    load();
});
