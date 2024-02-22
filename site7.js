function filterNews(category) {
  const newsItems = document.querySelectorAll('.news');
  
  if (category === 'all') {
    
    newsItems.forEach(item => item.style.display = 'block');
  } else {

    newsItems.forEach(item => item.style.display = 'none');
    
    const filteredNews = document.querySelectorAll('.news.' + category);
    filteredNews.forEach(item => item.style.display = 'block');
  }
}

