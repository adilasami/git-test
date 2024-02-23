function HideAndSeek() {
    let title = document.getElementById('title');
    let para = document.querySelector('.hide');

    title.addEventListener('click', () => {
        para.classList.toggle("seek");
        console.log('It worked');
    })
}   
HideAndSeek();