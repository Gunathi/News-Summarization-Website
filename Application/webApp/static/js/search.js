  // Get references to the search input, button, and results container
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const newsResults = document.getElementById("newsResults");

const newsArticles = [];

async function fetchNewsArticles(searchQuery) {
  const response = await fetch('/search_news/?q=' + encodeURIComponent(searchQuery));
  const newsArticles = await response.json();
  return newsArticles;
}
  
  // Add an event listener to the search button
  searchBtn.addEventListener("click", performSearch);
  
  // Perform the search
  async function performSearch() {
    const searchQuery = searchInput.value.toLowerCase();
    
    // Fetch the filtered articles based on the search query
    const filteredArticles = await fetchNewsArticles(searchQuery);
    
    // Clear previous search results
    newsResults.innerHTML = "";

    // Display filtered articles
    filteredArticles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.innerHTML = `
            <div class="col-cl-3">
            <h3>${article['news_article__title']}</h3>
            ${article['news_article__image_url'] ? `<img src="${article['news_article__image_url']}" alt="news image" style="margin-bottom: 20px; width: 500px;">` : ''}
            <div class="blog-content">
            <p>By Echo Express</p>
            <p>${article['news_article__publish_date']}</p>
            <p>${article['Summary_text']}</p>
            <div class="blog-meta"><a href="#"><i class="far fa-user"></i>By - Echo Express</a>
                <i class="fa-solid fa-calendar-days"></i>${article['news_article__publish_date']}
            </div>
            
        </div>
        `;
        newsResults.appendChild(articleElement);
    });

  }