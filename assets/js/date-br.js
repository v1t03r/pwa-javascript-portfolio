function zeroToLeft(num) {
   return num >= 10 ? num : `0${num}`;
}

function formatDate(myDate) {
   const day = zeroToLeft(myDate.getDate());
   const month = zeroToLeft(myDate.getMonth() + 1);
   const year = zeroToLeft(myDate.getFullYear());
   const hour = zeroToLeft(myDate.getHours());
   const min = zeroToLeft(myDate.getMinutes());
   return `Último acesso: ${day}/${month}/${year} ${hour}:${min}`;
}

const date = new Date();
const dateEN = formatDate(date);
document.getElementById("date").innerHTML = dateEN;