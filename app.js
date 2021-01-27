//SPORTS
const getSports = async () => {
  let sports = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=ri3ZcpEipezAtwaf7lvk6o5r5hNFFBkPmND5ISaw&language=en&categories=sports')
  console.log(sports.data.data)
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
      let title = document.createElement('h1')
      title.textContent = sportArticle.title
      title.classList.add('title-custom')
      articleContainer.append(title)
      let description = document.createElement('p')
      description.textContent = sportArticle.description
      description.classList.add('description-custom')
      articleContainer.append(description)
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
    let entertainment = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw&language=en&categories=entertainment')
    console.log(entertainment.data.data)
    removeArticles()
    try {
      entertainment.data.data.forEach(entertainmentArticle => {
        let container = document.querySelector('.all-articles-container')
        let articleContainer = document.createElement('div')
        container.append(articleContainer)
        let title = document.createElement('h1')
        title.textContent = entertainmentArticle.title
        articleContainer.append(title)
        let description = document.createElement('p')
        description.textContent = entertainmentArticle.description
        articleContainer.append(description)
        let image = document.createElement('img')
        image.src = entertainmentArticle.image_url
        articleContainer.append(image)
        let url = document.createElement('url')
        url.textContent = entertainmentArticle.url
        articleContainer.append(url)
      })
    } catch (error) {
      console.log(error)
    }
  }
  let entertainmentButton = document.querySelector('.entertainment')
  entertainmentButton.addEventListener('click', getEntertainment)
  //TRAVEL
  const getTravel = async () => {
    let travel = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw&language=en&categories=travel')
    console.log(travel.data.data)
    removeArticles()
    try {
      travel.data.data.forEach(travelArticle => {
        let container = document.querySelector('.all-articles-container')
        let articleContainer = document.createElement('div')
        container.append(articleContainer)
        let title = document.createElement('h1')
        title.textContent = travelArticle.title
        articleContainer.append(title)
        let description = document.createElement('p')
        description.textContent = travelArticle.description
        articleContainer.append(description)
        let image = document.createElement('img')
        image.src = travelArticle.image_url
        articleContainer.append(image)
        let url = document.createElement('url')
        url.textContent = foodArticle.url
        articleContainer.append(url)
      })
    } catch (error) {
      console.log(error)
    }
  }
  let travelButton = document.querySelector('.travel')
  travelButton.addEventListener('click', getTravel)
  //FOOD
  const getFood = async () => {
    let food = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw&language=en&categories=food')
    console.log(food.data.data)
    removeArticles()
    try {
      food.data.data.forEach(foodArticle => {
        let container = document.querySelector('.all-articles-container')
        let articleContainer = document.createElement('div')
        container.append(articleContainer)
        let title = document.createElement('h1')
        title.textContent = foodArticle.title
        articleContainer.append(title)
        let description = document.createElement('p')
        description.textContent = foodArticle.description
        articleContainer.append(description)
        let image = document.createElement('img')
        image.src = foodArticle.image_url
        articleContainer.append(image)
        let url = document.createElement('url')
        url.textContent = foodArticle.url
        articleContainer.append(url)
      })
    } catch (error) {
      console.log(error)
    }
  }
  let foodButton = document.querySelector('.food')
  foodButton.addEventListener('click', getFood)