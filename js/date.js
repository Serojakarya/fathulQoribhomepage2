var d = new Date,
    month = new Array;
month[0] = "Januari", month[1] = "Februari", month[2] = "Maret", month[3] = "April", month[4] = "Mei", month[5] = "Juni", month[6] = "Juli", month[7] = "Agustus", month[8] = "September", month[9] = "Oktober", month[10] = "November", month[11] = "Desember";
var month_name = month[d.getMonth()],
    
    day_of_month = d.getDate(),
    current_year = d.getFullYear(),
    dayOfMonthElement = document.getElementById("current_day"),
    currentMonthElement = document.getElementById("current_month"),
    currentYearElement = document.getElementById("current_year");
! function() {
    currentMonthElement.innerHTML = month_name, dayOfMonthElement.innerHTML = day_of_month, currentYearElement.innerHTML = current_year
}();

var today = new Date();
var day = today.getDay();
var daylist = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
var todayHTML = document.getElementById("todayHTML");
todayHTML.innerHTML = daylist[day];