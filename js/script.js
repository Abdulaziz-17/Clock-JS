let s = document.querySelector('.s'),
    m = document.querySelector('.m'),
    h = document.querySelector('.h'),
    hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes');

function clock() {
    let data = new Date(),
        hour = data.getHours(),
        min = data.getMinutes(),
        sec = data.getSeconds();

        s.style.transform = `rotate(${sec * 6}deg)`
        m.style.transform = `rotate(${min * 6}deg)`
        h.style.transform = `rotate(${hour * 30}deg)`
        hours.innerHTML = hour < 10 ? '0' + hour : hour
        minutes.innerHTML = min < 10 ? '0' + min : min

        setTimeout(() => clock(), 1000);
}

clock()


let tabsItem = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem ')

tabsItem.forEach((el, i) => {
    el.addEventListener('click', function () {
        tabsItem.forEach((element, index)=> {
            element.classList.remove('active')
            tabs[index].classList.remove('active')
        })
        this.classList.add('active')
        tabs[i].classList.add('active')
    })
})