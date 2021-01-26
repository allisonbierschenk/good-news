
// const domain = 'https://api.thenewsapi.com/v1/news/all?'
let params = {
  api_token: 'lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw',
  categories: 'food,travel,entertainment,sports',
  language: 'en',
  limit: 5
}

const getSports = async () => {
  try {
    let sports = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw&language=en&categories=sports')
    // console.log(sports)
  } catch (error) {
    console.log(error)
  }
}
getSports()
