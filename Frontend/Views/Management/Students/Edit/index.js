const ruteCurrent = window.location.toString().replace('//', '').split('/');
$('#navbar').load('/Components/NavBar/index.html');

const modal = $('#exampleModal');
var myModal = new bootstrap.Modal(modal, {
    keyboard: true
})

$(document).ready(function () {

    fetch(`/api/Users/getByID/${ruteCurrent[3]}`)
        .then(resp => resp.json())
        .then(({result}) => {
            $('#name').val(result.Name);
            $('#dui').val(result.DUI);
            $('#address').val(result.Address);
            $('#phone').val(result.Phone);
            $('#email').val(result.Email);
            $('#password').val(result.Password);
        })
})

function getData() {
    return {
        id: ruteCurrent[3],
        name: $('#name').val(),
        dui: $('#dui').val(),
        address: $('#address').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
        password: $('#password').val()
    }
}

const initLocation = () => {
    window.location = '/Management/Students/'
}

$('#cancel').on('click', initLocation)

$('#teacher-info').on('submit', e => {
    e.preventDefault();

    const data = getData();

    fetch('/api/Users/Update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json())
        .then(initLocation)
        .catch(err => console.error(err))
})

$('#delete').on('click', () => myModal.show(modal))

$('#ok').on('click', () => {
    fetch(`/api/Users/Delete/${ruteCurrent[3]}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json())
        .then(initLocation)
        .catch(err => console.error(err))
})