const route = document.getElementById('route');
      time = document.getElementById('time');
      num = document.getElementById('num');
      btn = document.getElementById('btn');
      result = document.getElementById('result');

let UserTime = new Date()
let TimeZone = UserTime.getTimezoneOffset()/60

timetableBtoA = [{h:18, m:30},{h:18, m:45}, {h:19, m:00},{h:19, m:15},{h:19, m:35},{h:21, m:50},{h:21, m:55}]
timetableAtoB = [{h:18, m:00},{h:18, m:30}, {h:18, m:45},{h:19, m:00}, {h:19, m:15},{h:21, m:00}]


const correcttimetableBtoA = timetableBtoA.map(el => {
    el.h = el.h + TimeZone
    return el
});

const correctttimetableAtoB = timetableAtoB.map(el => {
    el.h = el.h + TimeZone
    return el
});

const insertime = () => {
time.innerHTML= correctttimetableAtoB.map(x=>`<option value="${x.h}:${x.m == 0 ? '0'+ x.m : x.m}(из A в B)">${x.h}:${x.m == 0 ? '0'+ x.m : x.m}(из A в B)</option>`)
}   


insertime()

route.addEventListener('change', () => {
    const time2wrapper = document.getElementById('time2wrapper') 

    time.innerHTML = route.value === 'из B в A' ?
        correcttimetableBtoA.map(i=>`<option value="${i.h}:${i.m == 0 ? '0'+ i.m : i.m}(из В в А)">${i.h}:${i.m == 0 ? '0'+ i.m : i.m}(из В в А)</option>`)
        : correctttimetableAtoB.map(x=>`<option value="${x.h}:${x.m == 0 ? '0'+ x.m : x.m}(из A в B)">${x.h}:${x.m == 0 ? '0'+ x.m : x.m}(из A в B)</option>`)
        
    route.value === 'из A в B и обратно в А' ? 
        time.insertAdjacentHTML("afterend", 
        `<div id="time2wrapper">    
            <label for="time">Выберите время возвращения</label>
            <select name="time2" id="time2">
                ${correcttimetableBtoA.filter( (i, index) => index > 1).map(i=>`<option value="${i.h}:${i.m == 0 ? '0'+ i.m : i.m}(из В в А)">${i.h}:${i.m == 0 ? '0'+ i.m : i.m}(из В в А)</option>`)}
            </select> </div>`) : time2wrapper.innerHTML = ""
})
        

time.addEventListener('change', () => {
    time2 = document.getElementById('time2');
    if (time2) {
    let AtoBHours = time.value.split(':');
    let AtoBMinuts = AtoBHours[1].split('(');
    let AtoBHM = AtoBHours[0] + ':' + AtoBMinuts[0]

    let AtoBHMtest = AtoBHM.split (':')

    let Hours = Number (AtoBHMtest[0])
    let Minuts = Number (AtoBHMtest[1])

    if (Minuts < 10) {
        Minuts = Minuts + 50
        } else { Hours = Hours + 1;
            Minuts = 50 - (60 - Minuts)
                if (Minuts < 10) {
                    Minuts = '0' + Minuts
                }
        }
    let finalTime = Hours + ':' + Minuts

    let timeD = timetableBtoA.map(i => i.h + ':' + (i.m == 0 ? '0' + i.m : i.m)) 
        
    let newTimeD = timeD.filter(n => n > finalTime)
    time2.innerHTML =  newTimeD.map(z => `<option value="${z}(из В в А)">${z}(из В в А)</option>`)
    }
})

let finalPrice

btn.addEventListener('click', () => {
    if (num.value < 1) {
        alert("Нельзя выбрать меньше 1 билета")
        num.value = 1

    } else { 
        if (route.value === 'из A в B и обратно в А') {
        finalPrice = (num.value * 1200)
        }   else {
            finalPrice = (num.value * 700)
        }

        let startTime = time.value.split('(');


        let finalTime = () => {
        if (route.value === 'из A в B и обратно в А') {
            let AtoBHours = time2.value.split(':');
            timetime()
            let AtoBMinuts = AtoBHours[1].split('(');
            let AtoBHM = AtoBHours[0] + ':' + AtoBMinuts[0]
        
            let AtoBHMtest = AtoBHM.split (':')
        
            let Hours = Number (AtoBHMtest[0])
            let Minuts = Number (AtoBHMtest[1])
        
            if (Minuts < 10) {
                Minuts = Minuts + 50
                } else { Hours = Hours + 1;
                    Minuts = 50 - (60 - Minuts)
                        if (Minuts < 10) {
                            Minuts = '0' + Minuts
                        }
                }
                finalTime = Hours + ':' + Minuts
        } else {
            let AtoBHours = time.value.split(':');
            let AtoBMinuts = AtoBHours[1].split('(');
            let AtoBHM = AtoBHours[0] + ':' + AtoBMinuts[0]
        
            let AtoBHMtest = AtoBHM.split (':')
        
            let Hours = Number (AtoBHMtest[0])
            let Minuts = Number (AtoBHMtest[1])
        
            if (Minuts < 10) {
                Minuts = Minuts + 50
                } else { Hours = Hours + 1;
                    Minuts = 50 - (60 - Minuts)
                        if (Minuts < 10) {
                            Minuts = '0' + Minuts
                        }
                }
                finalTime = Hours + ':' + Minuts
        }}

        finalTime()



            result.innerHTML =
            `<p> Вы выбрали ${num.value} ${num.value == 1? "билет" : (num.value > 4) ? "билетов" : "билета"} по маршруту ${route.value} стоимостью ${finalPrice}р.
            Это путешествие займет у Вас ${route.value === 'из A в B и обратно в А' ? "1 час 40 минут" : "50 минут"}.
            Теплоход отправляется в ${startTime[0]}, а прибудет в ${finalTime}</p>`
    }

   
})

