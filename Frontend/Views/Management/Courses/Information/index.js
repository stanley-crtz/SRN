const ruteCurrent = window.location.toString().replace('//', '').split('/');
$('#navbar').load('/Components/NavBar/index.html')

const modal = $('#exampleModal');
var myModal = new bootstrap.Modal(modal, {
    keyboard: true
})

$("#search-student").on('click', () => {
    myModal.show(modal)
})

const getNotes = () => {
    fetch(`/api/Notes/getNotes/${ruteCurrent[3]}`)
        .then(resp => resp.json())
        .then(({ result }) => {

            let body = '';

            for (const el of result) {
                body += `
                    <tr class="value-student" data-note="${el.idNotes}">
                        <td class="text-start">${el.Name}</td>
                        <td>${el.C1_L1}</td>
                        <td>${el.C1_L2}</td>
                        <td>${el.C1_P}</td>
                        <td>${el.C1_Note}</td>
                        <td>${el.C2_L1}</td>
                        <td>${el.C2_L2}</td>
                        <td>${el.C2_P}</td>
                        <td>${el.C2_Note}</td>
                        <td>${el.C3_L1}</td>
                        <td>${el.C3_L2}</td>
                        <td>${el.C3_P}</td>
                        <td>${el.C3_Note}</td>
                        <td>${el.Rep}</td>
                        <td>${el.Final}</td>
                    </tr>
                `
            }

            return body;

        })
        .then(resp => $('#content-notes').html(resp))
        .then(() => {
            const items = document.querySelectorAll('.value-student');

            for (const item of items) {
                item.addEventListener('click', function () {
                    alert('hey')
                })
            }

        })
        .catch(err => console.error(err))
}

$(document).ready(function () {
    getNotes()
    fetch('/api/Students/getAll')
        .then(resp => resp.json())
        .then(({ result }) => {

            let body = '';

            for (const el of result) {
                body += `
                    <tr data-identify="${el.idUser}" data-name="${el.Name}" class="value-student">
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
            const items = document.querySelectorAll('.value-student');

            for (const item of items) {
                item.addEventListener('click', function () {
                    $('#Student').val(this.dataset.name)
                    $('#idStudent').val(this.dataset.identify)
                    myModal.hide()
                })
            }

        })
        .catch(err => console.error(err))
});

$("#addStudent").on('click', () => {

    const data = {
        idUser: parseInt($("#idStudent").val()),
        idCourses: parseInt(ruteCurrent[3])
    }

    fetch('/api/Notes/Create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json())
        .then(() => getNotes())
        .catch(err => console.error(err))
})