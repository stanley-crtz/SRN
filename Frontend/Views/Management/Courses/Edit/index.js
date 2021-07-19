const ruteCurrent = window.location.toString().replace('//', '').split('/');
$('#navbar').load('/Components/NavBar/index.html');

const modal = $('#exampleModal');
var myModal = new bootstrap.Modal(modal, {
    keyboard: true
})

$("#search-teacher").on('click', () => {
    myModal.show(modal)
})

$(document).ready(function () {

    fetch(`/api/Courses/getByID/${ruteCurrent[3]}`)
        .then(resp => resp.json())
        .then(({ result }) => {
            $('#code').val(result.Code);
            $('#name').val(result.Name);
            $('#acronym').val(result.Acronym);
            $('#idTeacher').val(result.idUser);
            $('#teacher').val(result.User);
            $("#active")[0].checked = result.Active;
        })
})

const getData = () => ({
    id: ruteCurrent[3],
    code: $('#code').val(),
    name: $('#name').val(),
    acronym: $('#acronym').val(),
    user: $('#idTeacher').val(),
    active: $("#active")[0].checked
})

const initLocation = () => {
    window.location = '/Management/Courses'
}

$('#cancel').on('click', initLocation)

$('#courses-info').on('submit', e => {
    e.preventDefault();

    const data = getData();

    fetch('/api/Courses/Update', {
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
    fetch(`/api/Courses/Hidden/${ruteCurrent[3]}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json())
        .then(initLocation)
        .catch(err => console.error(err))
})

$(document).ready(function () {
    fetch('/api/Teachers/getAll')
        .then(resp => resp.json())
        .then(({ result }) => {

            let body = '';

            for (const el of result) {
                body += `
                    <tr data-identify="${el.idUser}" data-name="${el.Name}" class="value-teachers">
                        <td>${el.Name}</td>
                        <td>${el.DUI}</td>
                        <td>${el.Email}</td>
                        <td>${el.Phone}</td>
                    </tr>
                `
            }

            return body;

        })
        .then(resp => $('#body-table').html(resp))
        .then(() => {
            const items = document.querySelectorAll('.value-teachers');

            for (const item of items) {
                item.addEventListener('click', function () {
                    $('#teacher').val(this.dataset.name)
                    $('#idTeacher').val(this.dataset.identify)
                    myModal.hide()
                })
            }

        })
        .catch(err => console.error(err))
});