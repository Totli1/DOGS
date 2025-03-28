const petsData = [
  {
      id: 1,
      name: "Барсик",
      type: "Кот",
      gender: "Мальчик",
      age: "2 года",
      mainImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      images: [
          "https://images.unsplash.com/photo-1511044568932-338cba0ad803",
          "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13"
      ],
      description: "Ласковый и игривый кот, обожает сидеть на коленях и играть с мячиком.",
      character: "Дружелюбный, активный, любознательный",
      vaccinated: true,
      sterilized: true,
      specialNeeds: null
  },
  {
      id: 2,
      name: "Хтун Лут II",
      type: "Кот",
      gender: "Мальчик",
      age: "4 месяца",
      mainImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Bc_bZh432Cdf3UmywUhKrHfv4OFLdYpjzw&s",
      images: [
          "https://images.unsplash.com/photo-1583511655826-05700d52f4d9",
          "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
      ],
      description: "Энергичный и преданный пёс, отлично ладит с детьми и обожает прогулки.",
      character: "Преданный, умный, любит долгие прогулки",
      vaccinated: true,
      sterilized: false,
      specialNeeds: "Не ест пошли 6, вообще топовый шарит"
  },
{
   id: 3,
      name: "Витя",
      type: "Собака",
      gender: "Мальчик",
      age: "22 года",
      mainImage: "https://disk.yandex.ru/i/j2EMp7cfrtarnw",
      images: [
          "https://images.unsplash.com/photo-1583511655826-05700d52f4d9",
          "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
      ],
      description: "Энергичный и преданный, отлично ладит с детьми и обожает прогулки.",
      character: "Преданный, умный, любит долгие прогулки",
      vaccinated: true,
      sterilized: true,
      specialNeeds: "Любит когда его выгуливают"
  
  
},
{
   id: 4,
      name: "Рекс",
      type: "Собака",
      gender: "Мальчик",
      age: "3 года",
      mainImage: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      images: [
          "https://images.unsplash.com/photo-1583511655826-05700d52f4d9",
          "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
      ],
      description: "Энергичный и преданный пёс, отлично ладит с детьми и обожает прогулки.",
      character: "Преданный, умный, любит долгие прогулки",
      vaccinated: true,
      sterilized: true,
      specialNeeds: "Требуется активный выгул"
  
  
},
{
   id: 5,
      name: "Рекс",
      type: "Собака",
      gender: "Мальчик",
      age: "3 года",
      mainImage: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      images: [
          "https://images.unsplash.com/photo-1583511655826-05700d52f4d9",
          "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
      ],
      description: "Энергичный и преданный пёс, отлично ладит с детьми и обожает прогулки.",
      character: "Преданный, умный, любит долгие прогулки",
      vaccinated: true,
      sterilized: true,
      specialNeeds: "Требуется активный выгул"
  
  
},
{
   id: 6,
      name: "Ксюхарик",
      type: "Собака",
      gender: "Девочка",
      age: "3 года",
      mainImage: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      images: [
          "https://images.unsplash.com/photo-1583511655826-05700d52f4d9",
          "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
      ],
      description: "Энергичный и преданный пёс, отлично ладит с детьми и обожает прогулки.",
      character: "Преданный, умный, любит долгие прогулки",
      vaccinated: true,
      sterilized: true,
      specialNeeds: "Требуется активный выгул"
  
  
}
];

// Маршрутизация
function router() {
  const path = window.location.hash.substring(1).split('/');
  
  const app = document.getElementById('app');
  
  if (path[0] === 'pet' && path[1]) {
      const petId = parseInt(path[1]);
      const pet = petsData.find(p => p.id === petId);
      if (pet) {
          app.innerHTML = renderPetPage(pet);
          initGallery();
      } else {
          app.innerHTML = '<h2>Питомец не найден</h2>';
      }
  } else {
      app.innerHTML = renderHomePage();
  }
}

// Рендер главной страницы
function renderHomePage() {
  return `
     
      
      <section id="pets">
        
          
          <div class="pets-grid">
              ${petsData.map(pet => `
                  <div class="pet-card" onclick="window.location.href='#pet/${pet.id}'">
                      <img src="${pet.mainImage}" alt="${pet.name}">
                      <div class="pet-info">
                          <h3>${pet.name}</h3>
                          <div class="pet-meta">
                              <span><i class="fas fa-${pet.type === 'Кот' ? 'cat' : 'dog'}"></i> ${pet.type}</span>
                              <span><i class="fas fa-${pet.gender === 'Мальчик' ? 'mars' : 'venus'}"></i> ${pet.gender}</span>
                              <span><i class="fas fa-calendar-alt"></i> ${pet.age}</span>
                          </div>
                          <p class = pet-description>${pet.description}</p>
                          <a href="#pet/${pet.id}" class="btn">Подробнее</a>
                      </div>
                  </div>
              `).join('')}
          </div>
      </section>
  `;
}

// Рендер страницы питомца
function renderPetPage(pet) {
  return `
      <div class="pet-profile">
          <div class="pet-images">
              <img src="${pet.mainImage}" alt="${pet.name}" class="main-image" id="main-pet-image">
              <div class="pet-gallery">
                  ${pet.images.map(img => `
                      <img src="${img}" alt="${pet.name}">
                  `).join('')}
              </div>
          </div>
          
          <div class="pet-info">
              <h1>${pet.name}</h1>
              <div class="pet-meta">
                  <span><i class="fas fa-${pet.type === 'Кот' ? 'cat' : 'dog'}"></i> ${pet.type}</span>
                  <span><i class="fas fa-${pet.gender === 'Мальчик' ? 'mars' : 'venus'}"></i> ${pet.gender}</span>
                  <span><i class="fas fa-calendar-alt"></i> ${pet.age}</span>
                  <span><i class="fas fa-syringe"></i> ${pet.vaccinated ? 'Вакцинирован' : 'Требуется вакцинация'}</span>
                  ${pet.sterilized ? '<span><i class="fas fa-stethoscope"></i> Стерилизован</span>' : ''}
              </div>
              
              <h2>О ${pet.name}</h2>
              <p>${pet.description}</p>
              
              <h2>Характер</h2>
              <p>${pet.character}</p>
              
              ${pet.specialNeeds ? `
                  <h2>Особые потребности</h2>
                  <p>${pet.specialNeeds}</p>
              ` : ''}
              
          <div class="pet-actions">
  <button class="adopt-btn">Забрать домой</button>
  <a href="#" class="btn back-btn">Назад</a>
</div>
      </div>
  `;
}

// Инициализация галереи
function initGallery() {
  document.querySelectorAll('.pet-gallery img').forEach(img => {
      img.addEventListener('click', () => {
          document.getElementById('main-pet-image').src = img.src;
      });
  });
  
  // Обработчик кнопки "Назад"
  document.querySelector('.back-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = "#poop";
  });
  
  // Обработчик кнопки adoption
  document.querySelector('.adopt-btn')?.addEventListener('click', () => {
      alert(`Спасибо за ваш интерес к adoption! Скоро с вами свяжется наш сотрудник.`);
  });
}

// Инициализация приложения
window.addEventListener('load', router);
window.addEventListener('hashchange', router);
function setActiveNavLink() {
  const currentPage = getCurrentPage();
  document.querySelectorAll('.nav-links a').forEach(link => {
      if (link.getAttribute('href').includes(currentPage)) {
          link.classList.add('active');
      }
  });
}
// Функция для подсветки активной ссылки
function highlightActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (currentPage === linkPage) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  highlightActiveNavLink();
  
  // Плавные переходы между страницами
  document.querySelectorAll('a[href^=""]').forEach(link => {
      link.addEventListener('click', function(e) {
          if (this.getAttribute('href').endsWith('.html')) {
              e.preventDefault();
              document.body.classList.add('page-transition-out');
              
              setTimeout(() => {
                  window.location.href = this.getAttribute('href');
              }, 300);
          }
      });
  });
});

// Анимация загрузки новой страницы
window.addEventListener('load', function() {
  document.body.classList.remove('page-transition-out');
  document.body.classList.add('page-transition-in');
});