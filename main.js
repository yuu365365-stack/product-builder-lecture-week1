const appTitle = document.getElementById('app-title');
const recommendBtn = document.getElementById('recommend-btn');
const menuImage = document.getElementById('menu-image');
const menuName = document.getElementById('menu-name');
const langButtons = document.querySelectorAll('.lang-btn');
const themeToggleBtn = document.getElementById('theme-toggle');

let currentLang = 'ko';

const translations = {
    ko: {
        title: "점심 메뉴 추천",
        button: "메뉴 추천받기",
        placeholder: "오늘 점심은 무엇을 먹을까요?"
    },
    en: {
        title: "Lunch Recommendation",
        button: "Recommend Menu",
        placeholder: "What for lunch today?"
    },
    zh: {
        title: "午餐推荐",
        button: "推荐菜单",
        placeholder: "今天午餐吃什么？"
    }
};

const menuItems = [
    // Korean
    {
        name: { ko: "비빔밥", en: "Bibimbap", zh: "拌饭" },
        category: "korean",
        image: "https://via.placeholder.com/300x200?text=Bibimbap"
    },
    {
        name: { ko: "김치찌개", en: "Kimchi Stew", zh: "泡菜汤" },
        category: "korean",
        image: "https://via.placeholder.com/300x200?text=Kimchi+Stew"
    },
    {
        name: { ko: "불고기", en: "Bulgogi", zh: "烤肉" },
        category: "korean",
        image: "https://via.placeholder.com/300x200?text=Bulgogi"
    },
    {
        name: { ko: "제육볶음", en: "Spicy Pork Stir-fry", zh: "辣炒猪肉" },
        category: "korean",
        image: "https://via.placeholder.com/300x200?text=Spicy+Pork"
    },
    // Chinese
    {
        name: { ko: "짜장면", en: "Jajangmyeon", zh: "炸酱面" },
        category: "chinese",
        image: "https://via.placeholder.com/300x200?text=Jajangmyeon"
    },
    {
        name: { ko: "짬뽕", en: "Jjamppong", zh: "海鲜面" },
        category: "chinese",
        image: "https://via.placeholder.com/300x200?text=Jjamppong"
    },
    {
        name: { ko: "탕수육", en: "Tangsuyuk", zh: "糖醋肉" },
        category: "chinese",
        image: "https://via.placeholder.com/300x200?text=Tangsuyuk"
    },
    {
        name: { ko: "마파두부", en: "Mapo Tofu", zh: "麻婆豆腐" },
        category: "chinese",
        image: "https://via.placeholder.com/300x200?text=Mapo+Tofu"
    },
    // Japanese
    {
        name: { ko: "초밥", en: "Sushi", zh: "寿司" },
        category: "japanese",
        image: "https://via.placeholder.com/300x200?text=Sushi"
    },
    {
        name: { ko: "돈까스", en: "Tonkatsu", zh: "炸猪排" },
        category: "japanese",
        image: "https://via.placeholder.com/300x200?text=Tonkatsu"
    },
    {
        name: { ko: "우동", en: "Udon", zh: "乌冬面" },
        category: "japanese",
        image: "https://via.placeholder.com/300x200?text=Udon"
    },
    // Snack (Bunshik)
    {
        name: { ko: "떡볶이", en: "Tteokbokki", zh: "辣炒年糕" },
        category: "snack",
        image: "https://via.placeholder.com/300x200?text=Tteokbokki"
    },
    {
        name: { ko: "김밥", en: "Gimbap", zh: "紫菜包饭" },
        category: "snack",
        image: "https://via.placeholder.com/300x200?text=Gimbap"
    },
    {
        name: { ko: "라면", en: "Ramen", zh: "拉面" },
        category: "snack",
        image: "https://via.placeholder.com/300x200?text=Ramen"
    },
    // Western
    {
        name: { ko: "햄버거", en: "Hamburger", zh: "汉堡" },
        category: "western",
        image: "https://via.placeholder.com/300x200?text=Hamburger"
    },
    {
        name: { ko: "파스타", en: "Pasta", zh: "意面" },
        category: "western",
        image: "https://via.placeholder.com/300x200?text=Pasta"
    },
    {
        name: { ko: "피자", en: "Pizza", zh: "披萨" },
        category: "western",
        image: "https://via.placeholder.com/300x200?text=Pizza"
    },
    {
        name: { ko: "샌드위치", en: "Sandwich", zh: "三明治" },
        category: "western",
        image: "https://via.placeholder.com/300x200?text=Sandwich"
    }
];

function setLanguage(lang) {
    currentLang = lang;
    
    // Update UI text
    appTitle.textContent = translations[lang].title;
    recommendBtn.textContent = translations[lang].button;
    
    // Update active button state
    langButtons.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // If a menu is already displayed, update its name
    if (menuName.dataset.key) {
        const index = parseInt(menuName.dataset.key);
        menuName.textContent = menuItems[index].name[currentLang];
    } else {
        menuName.textContent = translations[lang].placeholder;
    }
}

function recommendMenu() {
    const randomIndex = Math.floor(Math.random() * menuItems.length);
    const selectedMenu = menuItems[randomIndex];
    
    // Update Image
    menuImage.src = selectedMenu.image;
    menuImage.style.display = 'block';
    
    // Update Name
    menuName.textContent = selectedMenu.name[currentLang];
    menuName.dataset.key = randomIndex; // Store index to allow language switching to update name
    
    // Simple animation reset
    menuImage.style.animation = 'none';
    menuImage.offsetHeight; /* trigger reflow */
    menuImage.style.animation = 'fadeIn 0.5s ease-in';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
}

// Event Listeners
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.dataset.lang);
    });
});

recommendBtn.addEventListener('click', recommendMenu);
themeToggleBtn.addEventListener('click', toggleTheme);

// Initialize
setLanguage('ko');
