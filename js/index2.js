//for all transaction
document.addEventListener("DOMContentLoaded", all_data, false);


function all_data() {

    var json_url = 'https://d1cl7xhtppugmt.cloudfront.net/dashboard/api/userlist/';
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            append_all_data(data);
        }
    }
    xmlhttp.open("GET", json_url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}

//this function appends the json data to the table 'gable'
function append_all_data(data) {
    var table = document.getElementById('all-data');
    data.forEach(function (object) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.id + '</tidd>' +
            '<td>' + object.mobile + '</td>' +
            '<td>' + object.name + '</td>' +
            '<td>' + object.email + '</td>' +
            '<td>' + object.category + '</td>' +
            '<td>' + object.address + '</td>' +
            '<td>' + object.mobile + '</td>' +
            '<td>' + object.pincode + '</td>' +
            '<td>' + object.colony + '</td>' +
            '<td>' + object.country + '</td>' +
             '<td>' + object.created_at + '</td>' +
            '<td>' + object.subscription + '</td>' +
            '<td>' + object.amount + '</td>';
        table.appendChild(tr);
    });
}



// for success full transaction


document.addEventListener("DOMContentLoaded", success, false);


function success() {

    var json_url = 'https://d1cl7xhtppugmt.cloudfront.net/dashboard/api/success/';
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            append_success(data);
        }
    }
    xmlhttp.open("GET", json_url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}

//this function appends the json data to the table 'gable'
function append_success(data) {
    var table = document.getElementById('success-data');
    data.forEach(function (object) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.id + '</tidd>' +
            '<td>' + object.mobile + '</td>' +
            '<td>' + object.name + '</td>' +
            '<td>' + object.email + '</td>' +
            '<td>' + object.category + '</td>' +
            '<td>' + object.address + '</td>' +
            '<td>' + object.mobile + '</td>' +
            '<td>' + object.pincode + '</td>' +
            '<td>' + object.colony + '</td>' +
            '<td>' + object.country + '</td>' +
            '<td>' + object.subscription + '</td>' +
            '<td>' + object.amount + '</td>';
        table.appendChild(tr);
    });
}


// For failed transaction
document.addEventListener("DOMContentLoaded", failed, false);


function failed() {

    var json_url = 'https://d1cl7xhtppugmt.cloudfront.net/dashboard/api/fail/';
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            append_failed(data);
        }
    }
    xmlhttp.open("GET", json_url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}

//this function appends the json data to the table 'gable'
function append_failed(data) {
    var table = document.getElementById('fail-data');
    data.forEach(function (object) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.id + '</tidd>' +
            '<td>' + object.mobile + '</td>' +
            '<td>' + object.name + '</td>' +
            '<td>' + object.email + '</td>' +
            '<td>' + object.category + '</td>' +
            '<td>' + object.address + '</td>' +
            '<td>' + object.mobile + '</td>' +
            '<td>' + object.pincode + '</td>' +
            '<td>' + object.colony + '</td>' +
            '<td>' + object.country + '</td>' +
            '<td>' + object.subscription + '</td>' +
            '<td>' + object.amount + '</td>';
        table.appendChild(tr);
    });
}
