const poem_item = document.querySelector('.poem_item');
const btn = document.querySelector('.button');

btn.addEventListener('click', ()=>{
    for (let i=0; i < poem.leght; i++) {
        poem[i].classList.remove('active');
    }
    let index = Math.round(Math.random() * poem.leght)
})