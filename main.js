const appTitle = document.getElementById('app-title');
const recommendBtn = document.getElementById('recommend-btn');
const menuName = document.getElementById('menu-name');
const langButtons = document.querySelectorAll('.lang-btn');
const themeToggleBtn = document.getElementById('theme-toggle');

// Form elements
const contactTitle = document.getElementById('contact-title');
const labelName = document.querySelector('label[for="name"]');
const labelEmail = document.querySelector('label[for="email"]');
const labelMessage = document.querySelector('label[for="message"]');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const textareaMessage = document.getElementById('message');
const submitBtn = document.querySelector('.submit-btn');

let currentLang = 'ko';

const translations = {
    ko: {
        title: "점심 메뉴 추천",
        button: "메뉴 추천받기",
        placeholder: "오늘 점심은 무엇을 먹을까요?",
        contactTitle: "제휴 문의",
        labelName: "이름",
        labelEmail: "이메일",
        labelMessage: "문의 내용",
        inputName: "성함을 입력해주세요",
        inputEmail: "이메일 주소를 입력해주세요",
        inputMessage: "제휴 문의 내용을 적어주세요",
        submitBtn: "보내기"
    },
    en: {
        title: "Lunch Recommendation",
        button: "Recommend Menu",
        placeholder: "What for lunch today?",
        contactTitle: "Affiliate Inquiry",
        labelName: "Name",
        labelEmail: "Email",
        labelMessage: "Message",
        inputName: "Enter your name",
        inputEmail: "Enter your email",
        inputMessage: "Enter your inquiry details",
        submitBtn: "Send"
    },
    zh: {
        title: "午餐推荐",
        button: "推荐菜单",
        placeholder: "今天午餐吃什么？",
        contactTitle: "合作咨询",
        labelName: "姓名",
        labelEmail: "电子邮件",
        labelMessage: "咨询内容",
        inputName: "请输入您的姓名",
        inputEmail: "请输入您的电子邮件",
        inputMessage: "请输入咨询详情",
        submitBtn: "发送"
    }
};

const menuItems = [
    // Korean
    {
        name: { ko: "비빔밥", en: "Bibimbap", zh: "拌饭" },
        category: "korean"
    },
    {
        name: { ko: "김치찌개", en: "Kimchi Stew", zh: "泡菜汤" },
        category: "korean"
    },
    {
        name: { ko: "불고기", en: "Bulgogi", zh: "烤肉" },
        category: "korean"
    },
    {
        name: { ko: "제육볶음", en: "Spicy Pork Stir-fry", zh: "辣炒猪肉" },
        category: "korean"
    },
    // Chinese
    {
        name: { ko: "짜장면", en: "Jajangmyeon", zh: "炸酱面" },
        category: "chinese"
    },
    {
        name: { ko: "짬뽕", en: "Jjamppong", zh: "海鲜面" },
        category: "chinese"
    },
    {
        name: { ko: "탕수육", en: "Tangsuyuk", zh: "糖醋肉" },
        category: "chinese"
    },
    {
        name: { ko: "마파두부", en: "Mapo Tofu", zh: "麻婆豆腐" },
        category: "chinese"
    },
    // Japanese
    {
        name: { ko: "초밥", en: "Sushi", zh: "寿司" },
        category: "japanese"
    },
    {
        name: { ko: "돈까스", en: "Tonkatsu", zh: "炸猪排" },
        category: "japanese"
    },
    {
        name: { ko: "우동", en: "Udon", zh: "乌冬面" },
        category: "japanese"
    },
    // Snack (Bunshik)
    {
        name: { ko: "떡볶이", en: "Tteokbokki", zh: "辣炒年糕" },
        category: "snack"
    },
    {
        name: { ko: "김밥", en: "Gimbap", zh: "紫菜包饭" },
        category: "snack"
    },
    {
        name: { ko: "라면", en: "Ramen", zh: "拉面" },
        category: "snack"
    },
    // Western
    {
        name: { ko: "햄버거", en: "Hamburger", zh: "汉堡" },
        category: "western"
    },
    {
        name: { ko: "파스타", en: "Pasta", zh: "意面" },
        category: "western"
    },
    {
        name: { ko: "피자", en: "Pizza", zh: "披萨" },
        category: "western"
    },
    {
        name: { ko: "샌드위치", en: "Sandwich", zh: "三明治" },
        category: "western"
    }
];

function setLanguage(lang) {
    currentLang = lang;
    
    const t = translations[lang];
    
    // Update UI text
    appTitle.textContent = t.title;
    recommendBtn.textContent = t.button;
    
    // Update Contact Form text
    contactTitle.textContent = t.contactTitle;
    labelName.textContent = t.labelName;
    labelEmail.textContent = t.labelEmail;
    labelMessage.textContent = t.labelMessage;
    inputName.placeholder = t.inputName;
    inputEmail.placeholder = t.inputEmail;
    textareaMessage.placeholder = t.inputMessage;
    submitBtn.textContent = t.submitBtn;
    
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
        menuName.textContent = t.placeholder;
    }
}

function recommendMenu() {
    const randomIndex = Math.floor(Math.random() * menuItems.length);
    const selectedMenu = menuItems[randomIndex];
    
    // Update Name
    menuName.textContent = selectedMenu.name[currentLang];
    menuName.dataset.key = randomIndex; // Store index to allow language switching to update name
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