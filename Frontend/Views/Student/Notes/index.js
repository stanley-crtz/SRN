$('#navbar').load('/Components/NavBarStudent/index.html')

$(document).ready(() => {

    fetch(`/api/Notes/getNotesByStudent/${localStorage.getItem('userId')}`)
        .then(resp => resp.json())
        .then(({ result }) => {

            let body = '';

            for (const el of result) {
                body += `
                    <tr class="value-student">
                        <td class="text-start">${el.Course}</td>
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

})