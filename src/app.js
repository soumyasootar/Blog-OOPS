class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }
  addDescription() {
    let description_card = `<p id="blog-description">${this.detail}</p>`;
    document.getElementById('card-text').innerHTML += description_card;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
let toggle = 1;
function helperAddPost() {
  if (toggle == 1) {
    document.getElementById('popupContact').style.display = 'inline';
    toggle = 0;
  } else {
    document.getElementById('popupContact').style.display = 'none';
    toggle = 1;
  }
}
// 2. `helperPost()`
function helperPost() {
  let title = document.getElementById('title').value;
  let detail = document.getElementById('detail').value;
  let blog = new Blog(title, detail);
  console.log(title);
  console.log(detail);
  blog.addTitle();
  blog.addDescription();
}
