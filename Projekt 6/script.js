const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes(){
    const triggerBottom = window.innerHeight /5 *4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        console.log(boxTop)
        if(triggerBottom > boxTop){
            box.classList.add('show')
        }        
        else(
            box.classList.remove('show')
        )
    });
}