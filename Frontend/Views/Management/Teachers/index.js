$('#navbar').load('/Components/NavBar/index.html')

$('#add').on('click', () => {
    window.location = '/Management/Teachers/Create'
})

function onClickItems () {
    window.location = `/Management/Teachers/${this.dataset.identify}/Edit`
}

$(document).ready(function () {
    fetch('/api/Teachers/getAll')
        .then(resp => resp.json())
        .then(({ result }) => {
            
            let body = '';

            for (const el of result) {
                body += `
                    <tr data-identify="${el.idUser}" class="value-teachers">
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
                item.addEventListener('click', onClickItems)
            }

        })
        .catch(err => console.error(err))
});