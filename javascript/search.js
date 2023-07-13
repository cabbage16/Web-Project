var cities = [
    {
        id: 1,
        name: "바르셀로나",
        img: './img/City/Barcelona/Barcelona1.jpg',
        url: './City-info/Barcelona.html'
    },
    {
        id: 2,
        name: "하와이",
        img: './img/City/Hawaii/Hawaii1.jpg',
        url: './City-info/Hawaii.html'
    },
    {
        id: 3,
        name: "런던",
        img: './img/City/London/London1.jpg',
        url: './City-info/London.html'
    },
    {
        id: 4,
        name: "마이애미",
        img: './img/City/Miami/Miami1.jpg',
        url: './City-info/Miami.html'
    },
    {
        id: 5,
        name: "파리",
        img: './img/City/Paris/Paris1.jpg',
        url: './City-info/Paris.html'
    },
    {
        id: 6,
        name: "로마",
        img: './img/City/Rome/Rome1.jpg',
        url: './City-info/Rome.html'
    },
    {
        id: 7,
        name: "베니스",
        img: './img/City/Venis/Venis1.jpg',
        url: './City-info/Venis.html'
    },
]

const list = document.getElementById('list');

function showList(val='') {
    list.innerHTML = '';
    let hasResults = false;
    
    if (val === '') {
        return;
    }
    
    cities.forEach(city => {
        if(city.name.includes(val)) {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="${city.url}">
                    <img src='${city.img}' alt='${city.name} 사진'>
                    <span class="city-name">${city.name}</span>
                </a>
            `;
            list.appendChild(li);
            hasResults = true;
        }
    });

    if (!hasResults) {
        const li = document.createElement('li');
        li.textContent = '해당하는 결과가 없습니다.';
        li.classList.add('error-message'); // error 메시지에 클래스 추가
        list.appendChild(li);
    }
}

showList();
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var val = searchInput.value;
    showList(val);
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const val = searchInput.value;
        showList(val);
    }
});