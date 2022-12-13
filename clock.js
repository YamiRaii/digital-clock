const hourEl = document.getElementById('hour-count');
const minEl = document.getElementById('min-count');
const secEl = document.getElementById('sec-count');
const ampmEl = document.getElementById('ampm')

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM'

    if(h > 12) {
        h = h-12;
        ampm = 'PM'
    }

    if(h<10) {
        h = '0' + h;
    }
    if(m<10) {
        m = '0' + m;
    }
    if(s<10) {
        s = '0' + s;
    }

    hourEl.innerText=h;
    minEl.innerText = m;
    secEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(updateClock, 1000);
}
onload=updateClock;
