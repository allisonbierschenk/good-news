//Newsletter sign up reset ***MY FAVORITE CODE***
//https://stackoverflow.com/questions/16198652/clearing-a-form-field-in-javascript-upon-click
let newsletterButton = document.querySelector('button')
newsletterButton.addEventListener('click', clearForm )
let form = document.querySelector('.form')
function clearForm() {
  document.getElementById('output').value = '';
}

// TOP NEWS
async function fetchTopNews () {
  const url = `https://api.thenewsapi.com/v1/news/top?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw&language=en&categories=food,travel,science,health&exclude_categories=general&limit=2`
  try {
    let response = await axios.get(url)
    response.data.data.forEach((topNews, index) => {
    let container = document.querySelector('.top-stories')
    let topStoryContainer = document.createElement('div')
      topStoryContainer.classList.add('toparticle-container')
      topStoryContainer.classList.add(`toparticle-container${index}`)
      container.append(topStoryContainer)
      
      let image = document.createElement('img')
      image.src = topNews.image_url
      image.classList.add('image-custom')
      topStoryContainer.append(image)

      let titleContainer = document.createElement('div')
      titleContainer.classList.add('title-orientation')
      topStoryContainer.append(titleContainer)

      let title = document.createElement('h1')
      title.textContent = topNews.title
      title.classList.add('title-custom')
      titleContainer.append(title)

      let description = document.createElement('p')
      description.textContent = topNews.description
      description.classList.add('description-custom')
      titleContainer.append(description)

      let button = document.createElement('button')
      button.classList.add('button-style')
      button.classList.add('button-style-top')
      topStoryContainer.append(button)

      let a = document.createElement('a')
      a.classList.add('readmore-button-text')
      a.href = topNews.url
      let link = document.createTextNode('Read More')
      button.append(a)
      a.appendChild(link)

    })

  } catch (error) {
    console.log(error)

  }
}
fetchTopNews()


//SPORTS
const getSports = async () => {
  let sports = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw&language=en&categories=sports&exclude_categories=general&locale=us')
  removeArticles()
  try {
    sports.data.data.forEach(sportArticle => {
      let container = document.querySelector('.all-articles-container')
      let articleContainer = document.createElement('div')
      articleContainer.classList.add('article-container')
      container.append(articleContainer)

      let image = document.createElement('img')
      image.src = sportArticle.image_url
      image.classList.add('image-custom')
      articleContainer.append(image)

      let titleContainer = document.createElement('div')
      titleContainer.classList.add('title-orientation')
      articleContainer.append(titleContainer)

      let title = document.createElement('h1')
      title.textContent = sportArticle.title
      title.classList.add('title-custom')
      titleContainer.append(title)

      let description = document.createElement('p')
      description.textContent = sportArticle.description
      description.classList.add('description-custom')
      titleContainer.append(description)

      let button = document.createElement('button')
      button.classList.add('button-style')
      articleContainer.append(button)

      let a = document.createElement('a')
      a.classList.add('readmore-button-text')
      a.href = sportArticle.url
      let link = document.createTextNode('Read More')
      button.append(a)
      a.appendChild(link)

  })
} catch (error) {
    console.log(error)
  }
}
const removeArticles = () => {
  let articleRemove = document.querySelector('.all-articles-container')
  while (articleRemove.lastChild) {
    articleRemove.removeChild(articleRemove.lastChild)
  }
}
let sportButton = document.querySelector('.sports')
sportButton.addEventListener('click', getSports)
  

  //ENTERTAINMENT
  const getEntertainment = async () => {
    let entertainment = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw&language=en&categories=entertainment&exclude_categories=general&locale=us')
    removeArticles()
    try {
      entertainment.data.data.forEach(entertainmentArticle => {
        let container = document.querySelector('.all-articles-container')
        let articleContainer = document.createElement('div')
        articleContainer.classList.add('article-container')
        container.append(articleContainer)
  
        let image = document.createElement('img')
        image.src = entertainmentArticle.image_url
        image.classList.add('image-custom')
        articleContainer.append(image)
  
        let titleContainer = document.createElement('div')
        titleContainer.classList.add('title-orientation')
        articleContainer.append(titleContainer)
  
        let title = document.createElement('h1')
        title.textContent = entertainmentArticle.title
        title.classList.add('title-custom')
        titleContainer.append(title)
  
        let description = document.createElement('p')
        description.textContent = entertainmentArticle.description
        description.classList.add('description-custom')
        titleContainer.append(description)
  
        let button = document.createElement('button')
        button.classList.add('button-style')
        articleContainer.append(button)
  
        let a = document.createElement('a')
        a.classList.add('readmore-button-text')
        a.href = entertainmentArticle.url
        let link = document.createTextNode('Read More')
        button.append(a)
        a.appendChild(link)
      })
    } catch (error) {
      console.log(error)
    }
  }
let entertainmentButton = document.querySelector('.entertainment')
entertainmentButton.addEventListener('click', getEntertainment)
  

  //TRAVEL
  const getTravel = async () => {
    let travel = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw&language=en&categories=travel&exclude_categories=general&locale=us')
    removeArticles()
    try {
      travel.data.data.forEach(travelArticle => {
        let container = document.querySelector('.all-articles-container')
        let articleContainer = document.createElement('div')
        articleContainer.classList.add('article-container')
        container.append(articleContainer)
  
        let image = document.createElement('img')
        image.src = travelArticle.image_url
        image.classList.add('image-custom')
        articleContainer.append(image)
  
        let titleContainer = document.createElement('div')
        titleContainer.classList.add('title-orientation')
        articleContainer.append(titleContainer)
  
        let title = document.createElement('h1')
        title.textContent = travelArticle.title
        title.classList.add('title-custom')
        titleContainer.append(title)
  
        let description = document.createElement('p')
        description.textContent = travelArticle.description
        description.classList.add('description-custom')
        titleContainer.append(description)
  
        let button = document.createElement('button')
        button.classList.add('button-style')
        articleContainer.append(button)
  
        let a = document.createElement('a')
        a.classList.add('readmore-button-text')
        a.href = travelArticle.url
        let link = document.createTextNode('Read More')
        button.append(a)
        a.appendChild(link)
      })
    } catch (error) {
      console.log(error)
    }
  }
let travelButton = document.querySelector('.travel')
travelButton.addEventListener('click', getTravel)
  

  //FOOD
  const getFood = async () => {
    let food = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw&language=en&categories=food&exclude_categories=general&locale=us')
    removeArticles()
    try {
      food.data.data.forEach(foodArticle => {
        let container = document.querySelector('.all-articles-container')
        let articleContainer = document.createElement('div')
        articleContainer.classList.add('article-container')
        container.append(articleContainer)
  
        let image = document.createElement('img')
        image.src = foodArticle.image_url
        image.classList.add('image-custom')
        articleContainer.append(image)
  
        let titleContainer = document.createElement('div')
        titleContainer.classList.add('title-orientation')
        articleContainer.append(titleContainer)
  
        let title = document.createElement('h1')
        title.textContent = foodArticle.title
        title.classList.add('title-custom')
        titleContainer.append(title)
  
        let description = document.createElement('p')
        description.textContent = foodArticle.description
        description.classList.add('description-custom')
        titleContainer.append(description)
  
        let button = document.createElement('button')
        button.classList.add('button-style')
        articleContainer.append(button)
  
        let a = document.createElement('a')
        a.classList.add('readmore-button-text')
        a.href = foodArticle.url
        let link = document.createTextNode('Read More')
        button.append(a)
        a.appendChild(link)
      })
    } catch (error) {
      console.log(error)
    }
  }
  let foodButton = document.querySelector('.food')
  foodButton.addEventListener('click', getFood)