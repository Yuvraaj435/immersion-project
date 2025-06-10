const head =document.querySelector('#head')


console.log(head)

head.style.color="red";
head.style.border="4px solid green"
head.style.backgroundColor="pink"


const btn =document.getElementById('btn');
btn.addEventListener('click',()=>{

    head.style.backgroundColor="blue"


});

const add = document.getElementById('add');
const inner = document.getElementById('inner');
let progress = 0;

add.addEventListener('click', () => {
    if (progress < 95) { 
        progress += 5; 
        inner.style.width = progress + 'vw';
    }
});
