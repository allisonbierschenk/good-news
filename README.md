# Project Overview

## GoodDay News 

## Project Description

The GoodDay News App is a place where people come to see news that brightens up their day and inspires them to daydream. The app will consist of 4 filter options - Food, Travel, Entertainment, and Sports. 

## API and Data Sample
[API link](https://www.thenewsapi.com/account/dashboard)

[API with key link](https://api.thenewsapi.com/v1/news/all?api_token=lP5M2Cl2kxTGETo0jr47ofrTkKI0F36z4lIzIBhw)

```{
    "meta": {
        "found": 14856528,
        "returned": 5,
        "limit": 5,
        "page": 1
    },
    "data": [
        {
            "uuid": "4e2e404e-8f14-43a7-8e6d-e6962daa845a",
            "title": "SK와이번스 '구단 매각설, 아직 우린 아는 내용이 없다' : 클리앙",
            "description": "SK와이번스 구단 관계자는 25일 “구단 매각설에 대해 우리는 아직 아는 게 없다”며 “SK텔레콤 홍보실에서 미디어 대응?...",
            "keywords": "",
            "snippet": "SK와이번스 구단 관계자는 25일 “구단 매각설에 대해 우리는 아직 아는 게 없다”며 “SK텔레콤 홍보실에서 미디어 대응?...",
            "url": "https://www.clien.net/service/board/park/15830922",
            "image_url": "https://www.clien.net/service/image/favicon.ico",
            "language": "ko",
            "published_at": "2021-01-25T17:08:24.000000Z",
            "source": "clien.net",
            "categories": [
                "tech"
            ],
            "relevance_score": null
        },
        {
            "uuid": "9badf970-259d-49ca-b17f-5fa82e617c53",
            "title": "“현대건설, 4분기 어닝쇼크 영향으로 올해 성장폭 커질 것”",
            "description": "[인포스탁데일리=박상철 기자] 현대건설이 지난해 4분기 어닝쇼크의 영향으로 오히려 올해 큰 폭의 성장세를 보일 것이?...",
            "keywords": "현대건설, 어닝쇼크, 대신증권, 카타르 루사일, 두바이, 쿠웨이트 LNG터미널",
            "snippet": "현대건설 사옥 전경. 사진=현대건설 제공\n\n[인포스탁데일리=박상철 기자] 현대건설이 지난해 4분기 어닝쇼크의 영향으로 ...",
            "url": "http://www.infostockdaily.co.kr/news/articleView.html?idxno=124575",
            "image_url": "http://www.infostockdaily.co.kr/news/thumbnail/202101/124575_77154_3532_v150.jpg",
            "language": "ko",
            "published_at": "2021-01-25T17:08:22.000000Z",
            "source": "infostockdaily.co.kr",
            "categories": [
                "general"
            ],
            "relevance_score": null
        }
    ]
}
```

## Wireframes
[Wireframe](https://wireframe.cc/pro/pp/ee036e204409937)




### MVP/PostMVP

#### MVP 
- button features
- 5 articles appear on click of 'category'
- images included in article links

#### PostMVP  
- Sticky category side bar
- remove articles when a new category is clicked
- link out to full article
- top result to be highlighted in a speical border box
- newsletter sign up

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 26| Project Approval | Complete
|Jan 27| Core Application Structure (HTML, CSS, etc.) | Complete
|Jan 28| Initial Clickable Model  | Complete
|Jan 29| MVP | Complete
|Feb 1| Presentations/Project Submission | Complete

## Priority Matrix
[Priority Matrix](https://wireframe.cc/pro/pp/3a2d2487a409959)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Add baseline HTML | H | 1hr| n/a | 30 min |
| Add baseline JS to call on API | H | 3hrs| n/a | 4hrs |
| Testing and tweaking JS to fit the API | H | 3hrs| n/a | 1hr |
| Add event listener to button options | H | 3hrs| n/a | 1hr |
| Customize HTML | H | 1hr| n/a | 45min |
| Basic CSS | H | 2hrs| n/a | 2hrs |
| Load more button | L | 3hrs| n/a | 2hrs |
| Load URL for each article | L | 2hrs| n/a | 3hrs |
| Open read more link in a new tab | L | 2hrs| n/a | 2hrs |
| Delete past results function | M | 2hrs| n/a | 30min |
| Flexbox | H | 2hrs| n/a | 4hrs |
| Customize sidebar buttons | L | 2hrs| n/a | 2hrs |
| Customize CSS for results section | L | 3hrs| n/a | 3hrs |
| Make the sidebar sticky | L | 2hrs| n/a | 10min |
| Mobile friendly CSS | H | 3hrs| n/a | 4hrs |
| Final debugging | H | 3hrs| n/a | 2hrs |
| Go live | H | 2hrs| n/a | ??? |
| Total | H | 39hrs| n/a | n/a |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
let newsletterButton = document.querySelector('button')
newsletterButton.addEventListener('click', clearForm )
let form = document.querySelector('.form')
function clearForm() {
  document.getElementById('output').value = '';
}
```
I am proud of this code because I knew what I wnated to do and I was able to come up with this block of code entirely by myself based on what I had learned in unit 1.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

 1. changed the dropdown to a list of buttons 
 2. going to attempt to add a top news section
 3. removed load more option after spending 2 hours on it
