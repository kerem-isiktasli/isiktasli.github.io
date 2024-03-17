document.addEventListener('DOMContentLoaded', function() {
    var categoryLinks = document.querySelectorAll('.category-link');
    var categories = document.querySelectorAll('.category');

    categoryLinks.forEach(function(link) {
        link.addEventListener('mouseover', function(e) {
            this.style.color = '#ff69b4'; /* Kategori üzerine gelindiğinde metin rengi pembe */
        });
        link.addEventListener('mouseout', function(e) {
            this.style.color = '#333'; /* Kategori üzerinden ayrılınca metin rengi siyah */
        });
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetCategory = this.getAttribute('data-category');
            categories.forEach(function(category) {
                if (category.classList.contains(targetCategory)) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            });
        });
    });

    var backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});