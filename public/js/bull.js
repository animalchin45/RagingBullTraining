const section = document.querySelector('section')
const hamburger = document.getElementById('hamburger')
const nav = document.getElementById('nav')


window.addEventListener('load', function(){
    const w = this.document.documentElement.clientWidth
    const h = this.document.documentElement.clientHeight
    if(w < 1250){
        section.style.minHeight = `${h - 150}px`
    }else {
        section.style.minHeight = ''
    }
    section.style.opacity = 1
})

window.addEventListener('resize', function(){
    const w = this.document.documentElement.clientWidth
    const h = this.document.documentElement.clientHeight
    if(w >= 1250){
        section.style.minHeight = ''
        nav.style.opacity = 1
        hamburger.className = 'hamburger hamburger--emphatic'
    }else{
        section.style.minHeight = `${h - 150}px`
    }
})

hamburger.addEventListener('click', (e) => {
    if(hamburger.className === 'hamburger hamburger--emphatic'){
        hamburger.className += ' is-active'
        nav.style.opacity = 1
        nav.style.left = 0
    }else {
        hamburger.className = 'hamburger hamburger--emphatic'
        nav.style.opacity = 0
        nav.style.left = '1400px'
    }
})