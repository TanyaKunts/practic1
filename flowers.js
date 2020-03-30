const flowerCards = [
    {
        title: 'Лизиантус белый',
        price15: 130,
        price20: 140,
        price25: 150,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/2-270x335.jpg'
    }, {
        title: 'Лизиантус фиолетовый',
        price15: 125,
        price20: 135,
        price25: 140,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/3-270x335.jpg'
    }, {
        title: 'Роза кустовая розовая',
        price15: 135,
        price20: 145,
        price25: 155,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/roze_kust_pink-270x335.jpg'
    }, {
        title: 'Роза кустовая жёлтая',
        price15: 110,
        price20: 115,
        price25: 120,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/roze_kust_yellow-270x335.jpg'
    }, {
        title: 'Тюльпан сиреневый',
        price15: 115,
        price20: 125,
        price25: 130,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/tulip_siren-270x335.jpg'
    }, {
        title: 'Роза оранжевая',
        price15: 110,
        price20: 115,
        price25: 120,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/roze_orange_40-270x335.jpg'
    }, {
        title: 'Хризантема одноголовая сиреневая',
        price15: 135,
        price20: 145,
        price25: 155,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/hrizantema_siren-270x335.jpg'
    }, {
        title: 'Лилия восточная розовая',
        price15: 150,
        price20: 155,
        price25: 160,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/liliya_vostochnaya_pink-270x335.jpg'
    }, {
        title: 'Лилия восточная белая',
        price15: 120,
        price20: 130,
        price25: 140,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/liliya_vostochnaya_white-270x335.jpg'
    }, {
        title: 'Цимбидиум салатовый',
        price15: 135,
        price20: 140,
        price25: 150,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/4-270x335.jpg'
    }, {
        title: 'Цимбидиум розовый',
        price15: 140,
        price20: 145,
        price25: 150,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/orchid3_large-270x335.jpg'
    }, {
        title: 'Дендробиум белый',
        price15: 110,
        price20: 120,
        price25: 130,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/%20%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-270x335.jpg'
    }, {
        title: 'Дендробиум фиолетовый',
        price15: 120,
        price20: 140,
        price25: 150,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/%20%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%BE%20%D1%84%D0%B8%D0%BE%D0%BB%D0%B5%D1%82%D0%BE%D0%B2%D1%8B%D0%B9-270x335.jpg'
    }, {
        title: 'Аспидистра',
        price15: 130,
        price20: 140,
        price25: 150,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/aspidistra-270x335.jpg'
    }, {
        title: 'Берграсс',
        price15: 110,
        price20: 120,
        price25: 130,
        image: 'https://greenland-elplast.ru/image/cache/data/calculator/product/bergras-270x335.jpg'
    }
]


const cardsContainer = document.getElementById('left');

flowerCards.forEach((card) => {
    const html = `
        <div class='card' >
                    <figure>
                        <img id = 'img' src="${card.image}">
                        <figcaption>
                            <h4>${card.title}</h4>
                        </figcaption>
                    </figure>  
            </div>
            
    `;
    cardsContainer.insertAdjacentHTML('beforeend', html);
});




const flowers = document.getElementsByClassName('card');

for (let i = 0; i < flowers.length; i++) {
    flowers[i].addEventListener('click', function () {
        const detales = document.getElementById('right');
        detales.innerHTML = `
        <div id = 'detalesCard'>
            <div class= 'img'>
                    <img src="${flowerCards[i].image}">
            </div>
            <div class = 'rightSide'>
                <h2>${flowerCards[i].title}</h2>
                <h4>Выберите высоту цветка:</h4>
                <div class = 'inputs'>
                    <div class = item>
                    <p><label><input type="radio"  name = 'check'  value='${flowerCards[i].price15}'>15 см</label></p>
                    <h3>Цена: ${flowerCards[i].price15}</h3>
                    </div>
                    <div class = item>
                    <p><label><input type="radio"  name = 'check' checked value='${flowerCards[i].price20}'>20 см</label></p>
                        <h3>Цена: ${flowerCards[i].price20}</h3>
                    </div>
                    <div class = item>
                    <p><label><input type="radio"  name = 'check'  value='${flowerCards[i].price25}'>25 см</label></p>
                    <h3>Цена: ${flowerCards[i].price25}</h3>
                    </div>
                </div>
                <h4> Выберите количество:</h4> 
                <div class = 'btns'>
                    <button type="button" id = 'minus'> - </button>
                    <input id = 'count'  value = '5'/>
                    <button type="button" id = 'plus'> + </button>
                </div>
                <h3>Итоговая стоимость:</h3> 
                <button id = 'mainPrice'></button>
            </div>
        </div>
        <a href = '#decor'><button id = 'design'>Перейти к оформлению</button></a>
        `
        function getPrice() {
            let mainPrice = document.querySelector('input[name="check"]:checked').value * document.getElementById('count').value;
            const btnPrice = document.getElementById('mainPrice');
            btnPrice.innerHTML = mainPrice;
            const priceWithDec = document.getElementById('priceWithDecor');
            priceWithDec.innerHTML = mainPrice;
        }

        const checkboes = document.getElementsByName('check')
        for (let i = 0; i < checkboes.length; i++) {
            checkboes[i].addEventListener('change', function () {
                getPrice()
            })
        }
        const minus = document.getElementById('minus');
        minus.addEventListener('click', function () {
            let count = Number(document.getElementById('count').value);
            if (count > 1) {
                document.getElementById('count').value = count - 1;
                getPrice()
            }
        })
        const plus = document.getElementById('plus');
        plus.addEventListener('click', function () {
            let count = Number(document.getElementById('count').value);
            if (count < 101) {
                document.getElementById('count').value = count + 1;
                getPrice()
            }
        })


        getPrice()
    })
}
const decorations = [
    {
        title: 'Прозрачная упаковка',
        price: 80,
        image: '1.jpg'
    }, {
        title: 'Крафтовая бумага',
        price: 100,
        image: 'https://greenland.kg/images/companies/1/13696726_637324143082763_987293071_n.jpg?1470031118499'
    }, {
        title: 'Бумага кремового цвета',
        price: 105,
        image: 'https://disign-perm.nethouse.ru/static/img/0000/0007/3501/73501923.f2810z9ju5.W665.jpg'
    }, {
        title: 'Бумага голубого цвета',
        price: 105,
        image: '4.webp'
    }, {
        title: 'Бумага фиолетового цвета',
        price: 115,
        image: 'fl.jpg'
    }, {
        title: 'Сетка',
        price: 110,
        image: 'https://ae01.alicdn.com/kf/HTB1MTJXaUvrK1RjSszfq6xJNVXau/%D0%9E%D0%B1%D0%B5%D1%80%D1%82%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D1%81%D0%B5%D1%82%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2-%D0%B1%D1%83%D0%BC%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F-%D0%9A%D0%BE%D1%80%D0%B5%D0%B9%D1%81%D0%BA%D0%B0%D1%8F-%D0%9D%D0%BE%D0%B2%D0%B8%D0%BD%D0%BA%D0%B0-%D0%9F%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD-%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB-%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D0%B1%D1%83%D0%BA%D0%B5%D1%82-%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D1%83%D0%BF%D0%B0%D0%BA.jpg'
    }]

const decorContainer = document.getElementById('items');

decorations.forEach((decorCard) => {
    const html = `
        <div class='item' >
            <p><label><input type = 'radio' name = 'decorCheck' value = '${decorCard.price}'/>Выбрать</label></p>
                        <figure>
                            <img id = 'img' src="${decorCard.image}">
                            <figcaption>
                                <h3>${decorCard.title}</h3>
                                <h3>Цена: ${decorCard.price}</h3>
                            </figcaption>
                        </figure>  
            </div>
            
    `;

    decorContainer.insertAdjacentHTML('beforeend', html);

    function priceWithDecor() {
        let priceWithDec = document.querySelector('input[name="check"]:checked').value * document.getElementById('count').value + '+' + Number(document.querySelector('input[name="decorCheck"]:checked').value);
        const priceWithDecor = document.getElementById('priceWithDecor');
        priceWithDecor.innerHTML = priceWithDec;
        setTimeout(function () {
            let priceWDecor = document.querySelector('input[name="check"]:checked').value * document.getElementById('count').value + Number(document.querySelector('input[name="decorCheck"]:checked').value);
            priceWithDecor.innerHTML = priceWDecor;
        }, 1300);

    }
    const checkboes = document.getElementsByName('decorCheck')
    for (let i = 0; i < checkboes.length; i++) {
        checkboes[i].addEventListener('change', function () {
            priceWithDecor()
        })
    }
});

const btnDelivery3 = document.getElementById('delivery3');
btnDelivery3.addEventListener('click', function () {
    const div = document.getElementById('deliverySection');
    div.innerHTML = `
    <button id = 'back'>Назад</button>
    <form id = 'deliveryForm'>

        <div class = 'item'>
            <label for="name">Имя: </label>
            <input class = "name" type="text" id="name" placeholder="Mark" required />
        </div>
        <div class = 'item'>
            <label for="phone">Номер телефона: </label> 
            <input class = "phone" type="text" id="phone" placeholder="+375296666666" required />
        </div>
        <div class = 'item'>
            <label for="name">Фамилия: </label>
            <input class = "name" type="text" id="name" placeholder="Ivanov" required />
        </div>
        <div class = 'item'>
            <label for="email">Email: </label>
            <input class = "email" type="email" id="email" placeholder="megabus@gmail.com" required />
        </div>
        <div class = 'item'>
            <label for="calendar">Выберите дату доставки: </label>
            <input type="date" name="calendar" id = 'calendar' />
        </div>
        <div class = 'item'>
            <label for="time">Укажите время: </label>
            <input type="time" name="cron" value="19:00" min="09:00" max="22:00" id = 'time' />
        </div>
        <button id = 'checkout'>Оформить заказ</button>
    
   </form>`
    const back = document.getElementById('back');
    back.addEventListener('click', function () {
        const div = document.getElementById('deliverySection');
        div.innerHTML = `<h2>Выберите способ доставки:</h2>
    <a href = '#deliveryForm'><button id='delivery3'>
        <p>Доставка</p>
    </button></a>
    <button id='pickup'>
        <p>Самовывоз</p>
    </button>`
        const pickup = document.getElementById('pickup');
        pickup.addEventListener('click', function () {
            const div = document.getElementById('deliverySection');
            div.innerHTML = `<div class = 'pickup'>
                        <h2>Самовывоз по адресу: </h2> 
                        <p>г.Минск, пр-т Победителей, 9, 2 этаж</p>
                    </div>`
        })
    })
})

const pickup = document.getElementById('pickup');
pickup.addEventListener('click', function () {
    const div = document.getElementById('deliverySection');
    div.innerHTML = `<div class = 'pickup'>
                        <h2>Самовывоз по адресу: </h2> 
                        <p>г.Минск, пр-т Победителей, 9, 2 этаж</p>
                    </div>`
})
