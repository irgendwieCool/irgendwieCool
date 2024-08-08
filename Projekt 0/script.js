const boxes = document.querySelectorAll('.wrapper')

const toggle = document.querySelector('.toggle')


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

toggle.addEventListener('click', (e)=>{
  const html = document.querySelector('html')
  if(html.classList.contains('dark')){
      html.classList.remove('dark')
      e.target.innerHTML = 'Dark mode'
  }else{
      html.classList.add('dark')
      e.target.innerHTML = 'light mode'
  }
})

