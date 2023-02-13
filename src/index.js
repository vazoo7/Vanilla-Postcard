// The getAPI will pull the data from the canonical WordPress API provided.
const getAPI = async () => {
  const response = await fetch(
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json",
  );
  const data = await response.json();
  return data;
};


// The blogPost function will map the list of blog post card pulled from the API.
async function blogPost() {
  const blogs = await getAPI();
  if (blogs && blogs.length > 0) {
    let toRender = "";
    const headerTitle = [blogs[0]["_embedded"]["wp:term"][2][0].name, blogs[1]["_embedded"]["wp:term"][3][1].name, blogs[2]["_embedded"]["wp:term"][1][0].name]
    blogs.forEach((card, i) => {
      let element = ""
      // Given that there are only 3 blog post to be made (only 3 cases)
      switch (i % 3) {
        case 0: element = `<div class="row">${mapBlogPost(card, headerTitle[i])}`; break;
        case 1: element = mapBlogPost(card, headerTitle[i]); break;
        case 2: element = `${mapBlogPost(card, headerTitle[i])}</div>`; break
      }
      element = (i === blogs.length - 1 && i % 3 !== 2) ? element + "</div>" : element;
      toRender += element
    });
    document.querySelector(".content").innerHTML = toRender
  }
}


// mapBlogPost function is used to design a single blog post.
function mapBlogPost(card, headerTitle) {
  let d = new Date(card.date)
  d = d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  return `
  <div class="col-4 u-equal-height">
    <div class="p-card--highlighted">
      <p>${headerTitle.toUpperCase()}</p>
      <hr class ="u-sv1">
      <div class="p-card__inner">
        <div class="p-card__content">
          <a href="${card.link}">
            <img class="p-card__image" src="${card.featured_media}" alt=""/>
          </a>
          <h3><a href="${card.link}">${card.title.rendered}</a></h3>
          <i class="u-sv1">By <a href="${card["_embedded"]["author"][0]["link"]}">${card["_embedded"]["author"][0]["name"]}</a> ${d}</i>
        </div>
      </div>
      <footer>
        <hr class ="u-sv1">
        <p>${card["_embedded"]["wp:term"][0][0].name}</p>
      </footer>
    </div>
  </div>
  `;
}


// main function call
blogPost();