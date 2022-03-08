let textoi = document.querySelectorAll('.texto i')

const elnum = ()=>{return parseInt(Math.random()*255)}

const color = (num)=>{textoi[num].style.setProperty('color',`rgba(${elnum()}, ${elnum()}, ${elnum()}, .5)`)}

for (let i = 0; i < textoi.length; i++) {
    textoi[i].addEventListener('mousemove',()=>{
        color(i)
    })
}