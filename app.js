


const getSports = async () => {
  
  let sports = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw&language=en&categories=sports')
  console.log(sports.data.data)

  try {
    sports.data.data.forEach(sportArticle => {
      let container = document.querySelector('.categories')
      let articleContainer = document.createElement('div')
      container.append(articleContainer)
      
      let title = document.createElement('h1')
      title.textContent = sportArticle.title
      articleContainer.append(title)
      
      let description = document.createElement('p')
      description.textContent = sportArticle.description
      articleContainer.append(description)

      let image = document.createElement('img')
      image.scr = sportArticle.image_url
      articleContainer.append(image)
      
      let url = document.createElement('url')
      url.textContent = sportArticle.url
      articleContainer.append(url)
      
    })
  } catch (error) {
    console.log(error)
  }
}

getSports()

let sportButton = document.querySelector('.sports')
sportButton.addEventListener('click', getSports)