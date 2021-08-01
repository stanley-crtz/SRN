const ruteCurrent = window.location.toString().replace('//', '').split('/');
$('#navbar').load('/Components/NavBarSubUser/index.html')

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
                    window.location = `/Teacher/Courses/${this.dataset.note}/${ruteCurrent[3]}/Student`
                })
            }

        })
        .catch(err => console.error(err))
}

$(document).ready(getNotes);