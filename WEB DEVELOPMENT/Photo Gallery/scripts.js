let imagesByDate = {};

// Check for saved theme preference in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const files = event.target.files;
    const gallery = document.getElementById('gallery');

    Array.from(files).forEach(file => {
        const date = new Date().toISOString().split('T')[0];  // Current date in YYYY-MM-DD format
        const reader = new FileReader();

        reader.onload = function(e) {
            if (!imagesByDate[date]) {
                imagesByDate[date] = [];
            }

            imagesByDate[date].push({
                src: e.target.result,
                dateUploaded: new Date()
            });

            renderGallery(imagesByDate, gallery);
        };

        reader.readAsDataURL(file);
    });
});

function renderGallery(imagesByDate, gallery) {
    gallery.innerHTML = '';

    Object.keys(imagesByDate).sort().forEach(date => {
        const dateGroup = document.createElement('div');
        dateGroup.classList.add('mb-8');

        const dateHeader = document.createElement('h2');
        dateHeader.classList.add('text-2xl', 'font-semibold', 'mb-4', 'text-gray-700', 'dark:text-gray-200');
        dateHeader.textContent = date;

        dateGroup.appendChild(dateHeader);

        const dateGallery = document.createElement('div');
        dateGallery.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-4', 'gap-4');

        imagesByDate[date].sort((a, b) => a.dateUploaded - b.dateUploaded).forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('relative', 'w-full', 'h-48', 'overflow-hidden', 'rounded', 'shadow-lg', 'cursor-pointer', 'group', 'bg-gray-100', 'dark:bg-gray-700');

            galleryItem.innerHTML = `
                <img src="${image.src}" alt="Photo" class="object-cover w-full h-full transition-transform transform group-hover:scale-105">
                <button class="delete-btn absolute top-2 right-2 bg-red-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Delete</button>
            `;

            galleryItem.querySelector('img').addEventListener('click', () => {
                openLightbox(image.src);
            });

            galleryItem.querySelector('.delete-btn').addEventListener('click', (event) => {
                event.stopPropagation();
                const index = imagesByDate[date].indexOf(image);
                if (index > -1) {
                    imagesByDate[date].splice(index, 1);
                }
                renderGallery(imagesByDate, gallery);
            });

            dateGallery.appendChild(galleryItem);
        });

        dateGroup.appendChild(dateGallery);
        gallery.appendChild(dateGroup);
    });
}

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc;
    lightbox.classList.remove('hidden');
}

document.getElementById('lightboxClose').addEventListener('click', function() {
    document.getElementById('lightbox').classList.add('hidden');
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    // Save the theme preference in local storage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
