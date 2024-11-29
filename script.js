const menubtn = document.getElementById('menu-btn')
        const menuitems = document.getElementById('menu-items')
        menubtn.addEventListener('click', function () {
            menuitems.classList.toggle("hidden")
        })

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                menuitems.classList.add("hidden")
            }
        })

        const closebtn = document.getElementById('close-btn')
        closebtn.addEventListener('click', function () {
            menuitems.classList.add("hidden")
        })