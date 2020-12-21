

const alldata = document.querySelector("#all-data > tbody");
function loadData() {
    const request = new XMLHttpRequest();
    request.open("get", "http://127.0.0.1:8000/dashboard/api/userlist/");
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            populateAllData(json);
        } catch (e) {
            alert("Something unexpected happened")
        }
    };
    request.send()
}
function populateAllData(json) {


    json.foreach((row) => {
        const tr = document.createElement("tr");
        row.foreach((cell) => {
            const td = document.createElement("td");
            td.textContent = cell
            tr.appendChild(td);
        });
        alldata.appendChild(tr);

    });
}
const successdata = document.querySelector("#success-data > tbody");
function sucessData() {
    const request = new XMLHttpRequest();
    request.open("get", "http://127.0.0.1:8000/dashboard/api/success/");
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            populateSuccessData(json);
        } catch (e) {
            alert("Something unexpected happened")
        }
    };
    request.send()
}
function populateSuccessData(json) {


    json.foreach((row) => {
        const tr = document.createElement("tr");
        row.foreach((cell) => {
            const td = document.createElement("td");
            td.textContent = cell
            tr.appendChild(td);
        });
        alldata.appendChild(tr);

    });
}
const faildata = document.querySelector("#fail-data > tbody");
function failData() {
    const request = new XMLHttpRequest();
    request.open("get", "http://127.0.0.1:8000/dashboard/api/fail/");
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            populateFailData(json);
        } catch (e) {
            alert("Something unexpected happened")
        }
    };
    request.send()
}
function populateFailData(json) {


    json.foreach((row) => {
        const tr = document.createElement("tr");
        row.foreach((cell) => {
            const td = document.createElement("td");
            td.textContent = cell
            tr.appendChild(td);
        });
        alldata.appendChild(tr);

    });
}


document.addEventListener("DOMContentLoaded", () => { loadData(); successdata(); failData(); })
