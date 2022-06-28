// set initial count to 0
let count = 0;

// select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else if(styles.contains('reset')) {
            count = 0;
        }
        if(count > 0) {
            value.style.color = '#0f0';
        } else if(count < 0) {
            value.style.color = '#f00';
        } else {
            value.style.color = '#222'
        }
        value.textContent = count;
    })
});