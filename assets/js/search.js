const search_input = document.getElementById("searchInput")

const list = JSON.parse(localStorage.getItem("student_list"))

console.log(list);

search_input.addEventListener("input", function (event) {
    console.log(event.target.value);
    const results = list.filter(student => student.name.toLowerCase().startsWith(event.target.value.toLowerCase()))

    table_body.innerHTML=""

    console.log(results);

    results.forEach((item, index) => {
        const tr = document.createElement("tr")
        const selected_course = course_list.find(course => course.id == item.course_id)
        const delete_btn = document.createElement("button")
        delete_btn.innerText = "Sil"
        delete_btn.classList.add("btn", "btn-danger", "btn-sm")
        delete_btn.addEventListener("click", function () {
            removeItem(item.fin, this)
        })

        const update_btn = document.createElement("button")
        update_btn.innerText = "Düzəlt"
        update_btn.classList.add("btn", "btn-warning", "btn-sm")
        update_btn.addEventListener("click", function () {
            updateItem(item)
        })
        tr.innerHTML += `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.surname}</td>
                <td>${item.fin}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${selected_course ? selected_course.name : "təyin edilməyib"}</td>
                <td class="update_item"></td>
                <td class="delete_item"></td>
            `;

        tr.querySelector(".delete_item").append(delete_btn)
        tr.querySelector(".update_item").append(update_btn)

        table_body.append(tr)
    })
})


