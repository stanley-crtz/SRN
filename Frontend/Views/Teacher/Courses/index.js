$('#navbar').load('/Components/NavBarSubUser/index.html')

function onClickItems() {
    window.location = `/Teacher/Courses/${this.dataset.identify}/Information`
}

$(document).ready(() =>{
    fetch(`/api/Courses/getCoursesByTeacher/${localStorage.getItem('userId')}`)
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

        })
        .catch(err => console.error(err))
});