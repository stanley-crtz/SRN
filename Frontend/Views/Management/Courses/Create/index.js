$('#navbar').load('/Components/NavBar/index.html')

const modal = $('#exampleModal');
var myModal = new bootstrap.Modal(modal, {
    keyboard: true
})

$("#search-teacher").on('click', () => {
    myModal.show(modal)
})

const initLocation = () => {
    window.location = '/Management/Courses'
}

$('#cancel').on('click', initLocation)

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
                item.addEventListener('click', function(){
                    $('#teacher').val(this.dataset.name)
                    $('#idTeacher').val(this.dataset.identify)
                    myModal.hide()
                })
            }

        })
        .catch(err => console.error(err))
});

const getData = () => ({
    code: $('#code').val(),
    name: $('#name').val(),
    acronym: $('#acronym').val(),
    user: $('#idTeacher').val()
})

$("#courses-info").on("submit", e => {
    e.preventDefault();
    fetch('/api/Courses/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(getData())
    }).then(resp => resp.json())
        .then(initLocation)
        .catch(err => console.error(err))
})