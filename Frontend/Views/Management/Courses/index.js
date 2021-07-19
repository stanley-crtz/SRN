$('#navbar').load('/Components/NavBar/index.html')

$('#add').on('click', () => {
    window.location = '/Management/Courses/Create'
})

function onClickItems() {
    window.location = `/Management/Courses/${this.dataset.identify}/Information`
}

$(document).ready(() =>{
    fetch('/api/Courses/getAll')
        .then(resp => resp.json())
        .then(({ result }) => {
            
            let body = '';

            for (const el of result) {
                body += `
                    <div>
                        <div class="card-course" data-identify="${el.idCourses}">
                            <h2>${el.Acronym}</h2>
                            <div class="information">
                                ${el.Name}
                            </div>
                        </div>
                        <button class="edit-course" data-identify="${el.idCourses}"><i class="fas fa-edit"></i></button>
                    </div>
                `  
            }

            return body;

        })
        .then(resp => $('#content-courses').html(resp))
        .then(() => {
            const items = document.querySelectorAll('.card-course');

            for (const item of items) {
                item.addEventListener('click', onClickItems)
            }

            const itemsEdit = document.querySelectorAll('.edit-course');

            for (const item of itemsEdit) {
                item.addEventListener('click', function () {
                    window.location = `/Management/Courses/${this.dataset.identify}/Edit`
                })
            }

        })
        .catch(err => console.error(err))
});