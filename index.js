const label=document.querySelectorAll('.form-control label')

label.forEach((item)=>{
    item.innerHTML=item.innerText.
    split('').map((letter,index)=>`<span style="transition-delay:${index*50}ms">${letter}</span>`).join('')
    console.log("item",item.innerHTML)
})