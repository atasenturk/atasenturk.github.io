// JavaScript dosyasını oluşturun (script.js) ve aşağıdaki kodları ekleyin:
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1); // Bağlantı hedefi (id) alınır.
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // İlgili bölüme yavaşça kaydırma işlemi
                window.scrollTo({
                    behavior: 'smooth',
                    top: targetSection.offsetTop
                });
            }
        });
    });
});

const scrollFade = document.querySelector(".header");
const text = scrollFade.querySelector(".header-content");
var aboutText = document.getElementById("about-text");
var aboutTextHeader = document.getElementById("section-header");

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const textHeight = text.clientHeight;
  
    // Yüksekliği hesapla
    const maxTranslateY = textHeight - windowHeight;
    const minTranslateY = 0;
  
    let translateY = (scrollPosition / (windowHeight * 0.7)) * maxTranslateY;
  
    // Min ve Max sınırları belirle
    translateY = Math.max(minTranslateY, translateY);
  
    // Opaklık değerini hesapla
    const opacity = 1 - (scrollPosition / (windowHeight * 0.7));
    const fontSize = 14 + (scrollPosition / (windowHeight * 0.7)) * 10;
    const headerFontSize = 26 + (scrollPosition / (windowHeight * 0.7)) * 10;
    if(fontSize < 23)
        aboutText.style.fontSize = `${fontSize}px`;
    if(headerFontSize < 40) {
        aboutTextHeader.style.fontSize = `${headerFontSize}px`;
    }
    text.style.transform = `translateY(-${translateY}px)`;
    text.style.opacity = opacity > 0.2 ? opacity : 0;
});


document.getElementById('downloadButton').addEventListener('click', function() {
    // CV dosyanızın yolunu belirtin
    var cvPath = 'assets/cv.pdf';

    // Anchor elemanı oluşturun
    var link = document.createElement('a');
    link.href = cvPath;

    // Dosya adını belirtin (isteğe bağlı)
    link.download = 'cv.pdf';

    // Anchor elemanını tıklayarak indirme işlemini başlatın
    link.click();
});

function clickNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
