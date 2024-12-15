let apps = [
    {
        id: 1,
        name: 'Instagram',
        image: 'D:/app-aggregator/apps-images/Instagram_icon.png.webp',
        link: 'https://www.instagram.com',
        categories: ['Trending', 'SocialMedia']
    },
    {
        id: 2,
        name: 'Youtube',
        image: 'D:/app-aggregator/apps-images/youtube-icon.png',
        link: 'https://www.youtube.com',
        categories: ['Trending', 'SocialMedia']
    },
    {
        id: 3,
        name: 'Amazon',
        image: 'D:/app-aggregator/apps-images/amazon-icon.png',
        link: 'https://www.amazon.in',
        categories: ['Trending']
    },
    {
        id: 4,
        name: 'Canva',
        image: 'D:/app-aggregator/apps-images/Canva_logo..png',
        link: 'https://www.canva.com',
        categories: ['Trending']
    },
    {
        id: 5,
        name: 'ChatGPT',
        image: 'D:/app-aggregator/apps-images/chatgpt-icon.webp',
        link: 'https://chatgpt.com/',
        categories: ['AI']
    },
    {
        id: 6,
        name: 'DeepMind',
        image: 'D:/app-aggregator/apps-images/deepmind-icon.png',
        link: 'https://www.deepmind.com',
        categories: ['AI']
    },
    {
        id: 7,
        name: 'Gemini AI',
        image: 'D:/app-aggregator/apps-images/gemini-ai-icon.png',
        link: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwivwbjz8_uGAxU_q2YCHf87CfQYABAAGgJzbQ&co=1&ase=2&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv7SA3fAVF87ygysY_6bcLPSpmTiz6gcRg_E1b3Zy8I3F9EPBCPjD5xoCyFYQAvD_BwE&ohost=www.google.com&cid=CAESVuD2MILocNc2Q1htzDvW_P9I5V6KuapoghubuDad2-Ym_E9nHLgLvd2DJ_On2hgK8NWEhpNpg1txvhg0PXE_qvMxsRTSgS6SP58tMcRUAeKx9Mz6I5JD&sig=AOD64_2bpsvxt0xxf8AQE0nqkZgXcaGDFQ&q&nis=4&adurl&ved=2ahUKEwj6ubPz8_uGAxXeS2wGHZaMCIcQ0Qx6BAgIEAE',
        categories: ['AI']
    },
    {
        id: 8,
        name: 'Adobe FireFly',
        image: 'D:/app-aggregator/apps-images/adobe-firefly-icon.png',
        link: 'https://www.adobe.com/products/firefly.html',
        categories: ['AI']
    },
    {
        id: 9,
        name: 'MidJourney',
        image: 'D:/app-aggregator/apps-images/midjourney-icon.jpg',
        link: 'https://www.midjourney.com/',
        categories: ['AI']
    },
    {
        id: 10,
        name: 'LinkedIn',
        image: 'D:/app-aggregator/apps-images/linked-icon.png',
        link: 'https://in.linkedin.com/',
        categories: ['SocialMedia']
    },
    {
        id: 11,
        name: 'Twitter',
        image: 'D:/app-aggregator/apps-images/twitter-icon.webp',
        link: 'https://twitter.com/?lang=en',
        categories: ['SocialMedia']
    },
    {
        id: 12,
        name: 'Facebook',
        image: 'D:/app-aggregator/apps-images/facebook-icon.png',
        link: 'https://www.facebook.com/',
        categories: ['SocialMedia']
    },
    {
        id: 13,
        name: 'Messenger',
        image: 'D:/app-aggregator/apps-images/messenger-icon.jpg',
        link: 'https://www.messenger.com/',
        categories: ['SocialMedia']
    },
    {
        id: 14,
        name: 'Whatsapp',
        image: 'D:/app-aggregator/apps-images/whatsapp-icon.webp',
        link: 'https://web.whatsapp.com/',
        categories: ['SocialMedia']
    },
    {
        id: 15,
        name: 'SnapChat',
        image: 'D:/app-aggregator/apps-images/snapchat-icon.png',
        link: 'https://www.snapchat.com/',
        categories: ['SocialMedia']
    },
    {
        id: 16,
        name: 'Pinterest',
        image: 'D:/app-aggregator/apps-images/pinterest-icon.png',
        link: 'https://in.pinterest.com/',
        categories: ['SocialMedia']
    },
    {
        id: 17,
        name: 'Reddit',
        image: 'D:/app-aggregator/apps-images/reddit-icon.png',
        link: 'https://www.reddit.com/',
        categories: ['SocialMedia']
    },
    {
        id: 18,
        name: 'Telegram',
        image: 'D:/app-aggregator/apps-images/telegram-icon.png',
        link: 'https://web.telegram.org/',
        categories: ['SocialMedia']
    }
];





function showHomePage() {
    let categories = document.querySelectorAll('.slide');
    categories.forEach(cat => cat.style.display = 'none');
    document.getElementById('home').style.display = 'block';
}

function showCategory(category) {
    let categories = document.querySelectorAll('.slide');
    categories.forEach(cat => cat.style.display = 'none');
    document.getElementById(category).style.display = 'block';
    if (category === 'News') {
        loadNews();
    } else {
        loadApps(category);
    }
}

function loadApps(category) {
    let container = document.getElementById(`${category.toLowerCase()}-container`);
    container.innerHTML = ''; // Clear previous icons
    let html = '';
    apps.forEach(app => {
        if (app.categories.includes(category)) {
            let html1 = `
            <div class="apps">
                <div class='app-icons'>
                    <a href="${app.link}" target="_blank">
                        <img src="${app.image}" alt="${app.name}" class='app-icons'>
                    </a>
                </div>
            </div>`;
            html += html1;
        }
    });
    container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
    showHomePage(); // Show home page content on page load

    // Add event listener for Enter key on search input
    document.getElementById('search-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            searchApps();
        }
    });
});

function changestyles() {
    var link = document.getElementById('stylesheet');
    if (link.getAttribute("href") === "styles1.css") {
        link.setAttribute("href", "styles2.css");
    } else {
        link.setAttribute("href", "styles1.css");
    }
}

function searchApps() {
    let searchTerm = document.getElementById('search-input').value.toLowerCase();
    let searchResults = apps.filter(app => app.name.toLowerCase().includes(searchTerm));
    displaySearchResults(searchResults);
}

function displaySearchResults(results) {
    let container = document.getElementById('search-container');
    container.innerHTML = ''; // Clear previous search results
    let html = '';
    results.forEach(app => {
        let html1 = `
        <div class="apps">
            <div class='app-icons'>
                <a href="${app.link}" target="_blank">
                    <img src="${app.image}" alt="${app.name}" class='app-icons'>
                </a>
            </div>
        </div>`;
        html += html1;
    });
    container.innerHTML = html;
    let categories = document.querySelectorAll('.slide');
    categories.forEach(cat => cat.style.display = 'none');
    document.getElementById('search-results').style.display = 'block';
}

function loadNews() {
    const apiKey = 'Enter Your API key';
    const url = `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('NewsAPI response:', data); // Log the full response
            displayNews(data);
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
}

function displayNews(data) {
    if (!data.articles) {
        console.error('No articles found in the response');
        return;
    }

    let container = document.getElementById('news-container');
    container.innerHTML = ''; // Clear previous news

    data.articles.forEach(article => {
        let html = `
        <div class="news-item">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        </div>`;
        container.innerHTML += html;
    });
}
