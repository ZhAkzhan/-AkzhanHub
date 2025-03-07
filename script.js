const translations = {
    ru: {
      menu: "МЕНЮ",
      aboutNav: "ПРО МЕНЯ",
      portfolioNav: "ПОРТФОЛИО",
      contactsNav: "КОНТАКТЫ",
      indexWelcome: "Добро пожаловать в AkzhanHub!",
      indexP1: "Это мой крутой кринж-сайт =)",
      indexP2: "Здесь можно найти информацию обо мне (даже если хотите задоксить).",
      indexP3: "Если вам нужны пароли для раздела контакты, пишите в ЛС.",
      indexP4: "Для Instagram пароль не нужен.",
      indexP5: "Используйте верхнее меню для перехода: «ПРО МЕНЯ», «ПОРТФОЛИО», «КОНТАКТЫ».",
      indexP6: "Удачи в кодинге, бро!",
      aboutTitle: "Обо мне",
      aboutP1: "Привет, я Акжан. Родился 13 января 2009 года.",
      aboutP2: "Вырос с бабушкой и дедушкой, а сейчас живу в Астане.",
      aboutP3: "Учусь в 10 классе, увлекаюсь IT и играми. Создаю и играю в игры для фана.",
      aboutP4: "Оставайтесь, чтобы узнать больше обо мне!",
      portfolioTitle: "Портфолио",
      portfolioP1: "Сейчас раздел портфолио пуст.",
      portfolioP2: "Скоро здесь появятся новые проекты и идеи!",
      contactsTitle: "Контакты",
      contactsWhatsApp: "87715284444",
      contactsTelegram: "@ink0gn1to_o",
      contactsEmail: "vovovgariaalula@gmail.com",
      contactsTikTok: "@ink0gn1to_o",
      contactsInstagram: "@ink0gn1to_o",
      footer1: "© 2025 AkzhanHub. Все права защищены.",
      footer2: "Сайт создан для демонстрации неоновых стилей и интерактивности.",
      footer3: "Адаптивный дизайн для любых устройств.",
      footer4: "Экспериментальный проект, постоянно обновляемый. Спасибо за визит!"
    },
    kz: {
      menu: "MENYU",
      aboutNav: "MEN TURALY",
      portfolioNav: "PORTFOLIO",
      contactsNav: "BAILANYS",
      indexWelcome: "AkzhanHub-qa qosh keliniz!",
      indexP1: "Bul mening cool cringe saytım =)",
      indexP2: "Mında meniń turaly aqparat tabasyńyz (doxx jasawǵa boladı).",
      indexP3: "Kontakt bölimine password kerek bolsa, LS-ge jazynyz.",
      indexP4: "Instagram üşin password kerek emes.",
      indexP5: "Jogardagy menyu arqyly ötińiz: 'Men turaly', 'Portfolio', 'Bailanys'.",
      indexP6: "Kod jazýda omad tileymen, bro!",
      aboutTitle: "Men turaly",
      aboutP1: "Qosh keliniz, men Akzhan. 13-qańtar, 2009 jılı tuılǵanmın.",
      aboutP2: "Bobo jäne apamnen ömir sürdim, endi Astana-da turamın.",
      aboutP3: "Men 10-sınıpta, IT jäne oyunlarğa qızıǵamın. Oyun jasap, oynaman, fun üşin.",
      aboutP4: "Kөproq aqparat üşin qalańyz!",
      portfolioTitle: "Portfolio",
      portfolioP1: "Qazirgi úaqıtta, portfolio bölimi bos.",
      portfolioP2: "Jańa jobalar jäne ideialar jılǵastyrady!",
      contactsTitle: "Bailanys",
      contactsWhatsApp: "87715284444",
      contactsTelegram: "@ink0gn1to_o",
      contactsEmail: "vovovgariaalula@gmail.com",
      contactsTikTok: "@ink0gn1to_o",
      contactsInstagram: "@ink0gn1to_o",
      footer1: "© 2025 AkzhanHub. Barlıq quqqlar qorğalğan.",
      footer2: "Sayt neon stilerin jäne interaktivtılığın körsetuge arnalğan.",
      footer3: "Har qanday qurılmalarda dūrys körsetuge arnalğan adaptiv dizayn.",
      footer4: "Eksperimental jobalama, daimi jañartılıp otıradı. Qosh kelgeniñiz üşin rakhmet!"
    }
  };
  
  function updateContent() {
    const lang = document.body.getAttribute('data-lang');
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
  
  // При загрузке страницы, устанавливаем сохраненный язык
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
      document.body.setAttribute('data-lang', savedLang);
    }
    updateContent();
  });
  
  // Обработчик переключателя языка
  document.getElementById('toggle-lang').addEventListener('click', () => {
    const currentLang = document.body.getAttribute('data-lang');
    const newLang = currentLang === 'ru' ? 'kz' : 'ru';
    document.body.setAttribute('data-lang', newLang);
    localStorage.setItem('preferredLang', newLang);
    updateContent();
  });
  
  // Обработка кнопок контактов через модальное окно
  document.querySelectorAll('.contact-button').forEach(button => {
    button.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      const password = this.getAttribute('data-password');
      if (!password) {
        window.location.href = url;
        return;
      }
      openModal(url, password);
    });
  });
  
  function openModal(url, expectedPassword) {
    const modal = document.getElementById('passwordModal');
    const modalInput = document.getElementById('modalInput');
    const modalSubmit = document.getElementById('modalSubmit');
    modal.style.display = 'block';
    modalInput.value = '';
    modalSubmit.onclick = function() {
      if (modalInput.value === expectedPassword) {
        modal.style.display = 'none';
        window.location.href = url;
      } else {
        alert('Неверный пароль!');
      }
    };
  }
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('passwordModal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('passwordModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  