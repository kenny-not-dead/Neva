cards = [
    {
        id:1,
        img: "img/1.jpg",
        banner: 'НОВИНКА',
        bannerColor: 'orange',
        time: '2 часа',
        name: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
        motivate: [
            'Билет на целый день',
            'Неограниченное число катаний',
            '6 остановок у главных достопримечательностей',
            'Ближайший рейс сегодня'
        ],
        startTime: [
            '12:00',
            '12:00',
            '12:00',
            '12:00',
        ],
        price: '900₽',
        anotherprice: '1200 на причале'
    },

    {
        id:2,
        img: "img/2.jpg",
        bannerColor: 'another',
        banner: 'НОВИНКА',
        time: '2 часа',
        name: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
        motivate: [
            'Билет на целый день',
            'Неограниченное число катаний',
            '6 остановок у главных достопримечательностей',
            'Ближайший рейс сегодня'
        ],
        startTime: [
            '12:00',
            '12:00',
            '12:00',
            '12:00',
            '12:00',
            '12:00',
            '12:00',
        ],
        price: '2900₽',
        anotherprice: undefined

    },

    {
        id:3,
        img: "img/3.jpg",
        banner: 'НОВИНКА',
        bannerColor: 'orange',
        time: '2 часа',
        name: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
        motivate: [
            'Билет на целый день',
            'Неограниченное число катаний',
            '6 остановок у главных достопримечательностей',
            'Ближайший рейс сегодня'
        ],
        startTime: [
            '12:00',
            '12:00',
            '13:00',
        ],
        price: '900₽',
        anotherprice: '1200 на причале'

    },

    
    {
        id: 4,
        img: "img/3.jpg",
        banner: 'Круглый год',
        bannerColor: 'orange',
        time: '2 часа',
        name: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
        motivate: [
            'Билет на целый день',
            'Неограниченное число катаний',
            '6 остановок у главных достопримечательностей',
            'Ближайший рейс сегодня'
        ],
        startTime: [
            '12:00',
            '12:00',
            '13:00',
            '12:00',
            '12:00',
            '13:00',
            '12:00',
            '12:00',
            '13:00',
        ],
        price: '900₽',
        anotherprice: '1200 на причале'

    }
]


const card = document.querySelector('.cardlist');

card.innerHTML = cards.map(i => 
`<li class="card">
    <div class="image">
        <img src=${i.img} class="image-img"salt="Foto">
        <div class="rectangle ${i.bannerColor == 'another' ? `rectangle-another` : ''}">
            <p class="rectangle-p ${i.bannerColor == 'another' ? `rectangle-p-another` : '' }">${i.banner}</p>
        </div>
    </div>
    <div class="info">
        <div class="time">
            <img src="icon/time.svg" class="time-icon" alt="Time">
            <p class="time-p">${i.time}</p>
        </div>
        <div class="info-1">
            <p class="info-h">${i.name}</p>
        </div>
        <div>
            <ul class="benefit-wrapper">
                ${i.motivate.map(i => 
                    `<li class="benefit">
                    <img src="icon/Vector.svg" alt="Vector">
                    <p class="benefit-p">${i}</p>
                     </li>`).join('')}
            </ul>
        </div>
        <div>
            <ul class="time-list">
                ${i.startTime.length > 4 ?
                    i.startTime.filter((item, index) => index < 3).map(i => 
                        `<li class="info-time"> <p class="info-time-p">${i}</p></li>`).join('')
                        + `<li class="info-time info-time-btn"> <p class="info-time-p">Еще...</p></li>`
            : i.startTime.map(i =>`<li class="info-time"> <p class="info-time-p">${i}</p></li>`).join('')
        }
            </ul>
        </div>
        <div class="price-btn">
            <div class="price ${!i.anotherprice ? `price-1-only` : "" }">
                <p class="price-1 ">${i.price}</p>
                ${i.anotherprice ? `<p class="price-2">${i.anotherprice}</p>` : '' }
            </div>
            <div class="btn-wrapper">
                <button class="btn">Подробнее</button>
            </div>
            <div class='id-card'>${i.id}</div>
        </div>
    </div>
</li>`
).join('')

timeBtn = document.querySelectorAll('.info-time-btn');


timeBtn.forEach( (el) => {
    el.addEventListener('click', 
    function (e) {
       index = e.path[4].children[4].children[2].childNodes[0].data - 1;
       e.path[2].innerHTML = cards[index].startTime.map (i =>
        `<li class="info-time"> <p class="info-time-p">${i}</p></li>`
        ).join('')
    })
});