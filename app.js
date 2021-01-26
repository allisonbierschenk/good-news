

const domain = 'https://api.thenewsapi.com/v1/news/all?'
let params = {
  api_token: 'lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw',
  categories: 'food,travel,entertainment,sports',
  language: 'en',
  limit: 5
}

const getTheNews = async () => {
  try {
    let requestResponse = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw')
    // console.log(response.data)
    let esc = encodeURIComponent
    let articles = Object.keys(params).map(function(k) {return esc(k) + '=' + esc(params[k]);})
      .join('&');
    fetch("https://api.thenewsapi.com/v1/news/all?" + articles, requestResponse)
      .then(response => response.text())
      // .then(result => console.log(result))
    //https://www.thenewsapi.com/documentation
    console.log(articles)
  } catch (error) {
    console.log(error)
  }
}
getTheNews()
