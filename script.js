const root = document.documentElement;
const dark = document.querySelector('#dark')

dark.addEventListener('change', ()=>{
    if(!dark.checked){
        root.style.setProperty('--bgcolor', '')
        root.style.setProperty('--bgcolor2', '')
        root.style.setProperty('--color2', '')
        return;
    }
    root.style.setProperty('--bgcolor', '#1b1b1b')
    root.style.setProperty('--bgcolor2', '#2b2b2b')
    root.style.setProperty('--color2', '#f0f0f0')
})

//menu
const menu = document.querySelector('#burger-tags')
const menuBtn = document.querySelector('#burger-btn')

menuBtn.addEventListener('change', ()=>{
    if(!menuBtn.checked){
        menu.style.transform = ''
        menu.style.right = ''  
        return
    }
    menu.style.transform = 'scale(1)'
    menu.style.right = '0'
})