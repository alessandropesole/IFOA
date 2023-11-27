
//CAMBIO BACKGROUND HEADER E BUTTON
window.onscroll = function cambioColoreBackground () {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById('buttonHeader').classList.add('green');
        document.getElementById('header').classList.add('active');
    } else  {
        document.getElementById('buttonHeader').classList.remove('green');
        document.getElementById('header').classList.remove('active');
    }
} 