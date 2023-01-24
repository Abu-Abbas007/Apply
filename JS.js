const counters = document.querySelectorAll('.counter')



const section = document.querySelectorAll(".section")

const options = {
    // rootMargin:"0px 0px 0px 60000px", // Negative rootmargin srinks the viewport . Positive rootmargin increases the viewport
}

const observer = new IntersectionObserver ((entries,observe) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

        let totalBuyNumber = 780;
        let totalProjectNumber = 150;
        let totalHappyClientNumber = 50;
        let totalProjectViewNumber = 680;

        let totalBuyIntervel = setInterval(countTotalBuy,1)
        let totalProjectIntervel = setInterval(countProjects,1)
        let totalHappyClientIntervel =  setInterval(countTotalHappyClients,1);
        let totalProjectViewIntervel = setInterval(countProjectView,1)

        function countTotalBuy () {
            if (totalBuyNumber === 990) {
                console.log('clear')
                clearInterval(totalBuyIntervel);
            }
            counters[0].innerText = totalBuyNumber;
            totalBuyNumber++
        }
        
        function countProjects () {
            if (totalProjectNumber == 451) {
                clearInterval(totalProjectIntervel)
                return
            }
            counters[1].innerText = totalProjectNumber;
            totalProjectNumber++
        }
        
        function countTotalHappyClients () {
            if (totalHappyClientNumber == 259) {
                clearInterval(totalHappyClientIntervel)
                return
            }
            counters[2].innerText = totalHappyClientNumber;
            totalHappyClientNumber++
        }
        
        function countProjectView () {
            if (totalProjectViewNumber == 991) {
                clearInterval(totalProjectViewIntervel)
                return
            }
            counters[3].innerText = totalProjectViewNumber;
            totalProjectViewNumber++
        }
            
        }
    })
},options)

section.forEach((entry) => {
    observer.observe(entry)
})

const sections_Effect = document.querySelectorAll(".section")

const options_Effect = {
    rootMargin:"0px 0px 0px 60000px", // Negative rootmargin srinks the viewport . Positive rootmargin increases the viewport
}

const observer_Effect = new IntersectionObserver ((entries,observe) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            entry.target.classList.remove('invisible')
        }

        if (!entry.isIntersecting) {
            entry.target.classList.add('invisible')
            entry.target.classList.remove('visible')
        }
    })
},options_Effect)

sections_Effect.forEach((entry) => {
    observer_Effect.observe(entry)
})