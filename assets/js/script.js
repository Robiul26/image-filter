let navList = document.getElementById('nav-list').children;

for (var i = 0; i < navList.length; i++) {
    navList[i].addEventListener('click', function () {
        for (var j = 0; j < navList.length; j++) {
            navList[j].classList.remove('active');
        }
        this.classList.add('active');

        let target = this.getAttribute('data-target');
        let items = document.getElementById('card-section').children;
        for (var k = 0; k < items.length; k++) {
            if (target === items[k].getAttribute('data-id')) {
                items[k].style.display = 'block';
            } else if (target === 'all') {
                items[k].style.display = 'block';
            } else {
                items[k].style.display = 'none';
            }
        }
    })
}