let bts = document.querySelectorAll('button')
for (let i = 0; i < bts.length; i++){
    bts[i].addEventListener('click', function(){
        document.querySelector('.pink').className = ' '
        this.className = 'pink'
    })
}