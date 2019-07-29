// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Navbar,NavDropdown , Nav, Carousel, Form, FormControl, Button } from 'react-bootstrap';

const comic = {
  "code": 200,
  "status": "Ok",
  "copyright": "© 2019 MARVEL",
  "attributionText": "Data provided by Marvel. © 2019 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2019 MARVEL</a>",
  "etag": "0604ddba0b5adcd5e626b93cb6909a2ceea51a1d",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 1,
    "count": 1,
    "results": [
      {
        "id": 70757,
        "digitalId": 0,
        "title": "Deadpool (2018) #15",
        "issueNumber": 15,
        "variantDescription": "",
        "description": null,
        "modified": "2019-07-17T09:02:17-0400",
        "isbn": "",
        "upc": "75960609035801511",
        "diamondCode": "MAY190902",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 40,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/70757",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/70757/deadpool_2018_15?utm_campaign=apiRef&utm_source=26381ad4533f11c6dae788be1091bdc3"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Deadpool-15/digital-comic/51953?utm_campaign=apiRef&utm_source=26381ad4533f11c6dae788be1091bdc3"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/24294",
          "name": "Deadpool (2018 - Present)"
        },
        "variants": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/77216",
            "name": "Deadpool (2018) #15 (Variant)"
          }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2019-07-17T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2019-06-24T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 4.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/f0/5d25ef21eaf31",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/f0/5d25ef21eaf31",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/70757/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/974",
              "name": "Jeff Eckleberry",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12298",
              "name": "Scott Hepburn",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12996",
              "name": "Ian Herring",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4989",
              "name": "Nic Klein",
              "role": "penciler (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11921",
              "name": "Jacob Thomas",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/7190",
              "name": "Skottie Young",
              "role": "writer"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/70757/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
              "name": "Deadpool"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/70757/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/157491",
              "name": "cover from Deadpool (2018) #15",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/157492",
              "name": "story from Deadpool (2018) #15",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/70757/events",
          "items": [],
          "returned": 0
        }
      }
    ]
  }
}


  var styles1 = {
    // width: '20px',
    // height: '20px',
    color: 'white',
  };


function App() {
   
  const metaData = comic.data.results[0];
  const {thumbnail, issueNumber, pageCount, dates,  prices} = metaData;

  return (
    <div className="App">
<div className="header">

</div>

    <Navbar id="bar" bg="dark" expand="lg">
  {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" style={styles1}>Home</Nav.Link>
      <Nav.Link href="#link" style={styles1}>Movies Database</Nav.Link>
      <Nav.Link href="#home" style={styles1}>MCU Time Line</Nav.Link>
      <Nav.Link href="#link" style={styles1}>Online Media</Nav.Link>
      <Nav.Link href="#home" style={styles1}>M-shop</Nav.Link>
      
    </Nav>
    <Form inline>
    <Form method="get" action="https://en.wikipedia.org/w/index.php"className="searchform" method="get" name="searchform" target="_blank">
          <input type="text" name="search" placeholder="search about marvel"></input>
          <input type="submit"></input>
        </Form>
    </Form>
  </Navbar.Collapse>
</Navbar>

<div className="wrap">
  <h1>Editors Choice of the Month</h1>
  <h2>Deadpool</h2>
<Carousel id="slider">
  <Carousel.Item>
    <img
      className="d-block w-100 comic1"
      src="https://pixel.nymag.com/imgs/daily/vulture/2016/02/05/05-marvel-deadpool.w1200.h630.jpg" 
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 comic1"
      src="https://i.kinja-img.com/gawker-media/image/upload/s--ErWK-_uT--/c_scale,f_auto,fl_progressive,q_80,w_800/qtwsrkh9cbttfnpqf2vp.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 comic1"
      src="https://i.ytimg.com/vi/mz7ChB9IMbg/maxresdefault.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <br>
    </br>
    <br>
    </br>
<div class= "row">
  <div class="col-md-4">
  <img
      className="comic2"
      src="https://static1.squarespace.com/static/52922ecfe4b07735ce1a0386/52936f97e4b043b1879a98e8/52936f99e4b043b1879a9bc5/1385394077908/"
      alt="Third slide"
    />
    <h2>wade wilson</h2>
  </div>
  <div class="col-md-8">
    <p>Created by artist/writer Rob Liefeld and writer Fabian Nicieza, Deadpool made his first appearance in the pages of The New Mutants #98 cover dated February 1991.According to Nicieza, Liefeld came up with the character's visual design and name, and Nicieza himself came up with the character's speech mannerisms.

Liefeld's favorite comic title before X-Men was Avengers, which featured weapons like Captain America's shield, Thor's hammer and Hawkeye's bow and arrow, he decided to give weapons to his new characters as well. Liefeld, also a fan of the Teen Titans comics, showed his new character to then-writer Fabian Nicieza. Upon seeing the costume and noting his characteristics (killer with super agility), Nicieza contacted Liefeld, saying "this is Deathstroke from Teen Titans". Nicieza gave Deadpool the real name of "Wade Wilson" as an inside-joke to being "related" to "Slade Wilson", Deathstroke.[17]

Other inspirations were Spider-Man and Wolverine. Liefeld states: "Wolverine and Spider-Man were the two properties I was competing with at all times. I didn't have those, I didn't have access to those. I had to make my own Spider-Man and Wolverine. That's what Cable and Deadpool were meant to be, my own Spider-Man and my own Wolverine."

Both Deadpool and Cable were also meant to be tied into Wolverine's history already from the start, as Liefeld describes: "Wolverine was my guy. If I could tie anything into Wolverine, I was winning." Like Wolverine, Deadpool is (or is thought to be) Canadian. The original story had him joining the Weapon X program after being kicked out of the U.S. Army Special Forces and given an artificial healing factor based on Wolverine's thanks to Dr. Emrys Killebrew, one of the head scientists.</p>
  </div>
</div>

  <h2 id="comic-title">Comic Picks:</h2>
<div className="comic">
      <div className="comic-thumbnail-container">
     <img className="comic-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} />
      </div>
      <div className="comic-data-container">
     <h1>{metaData.title}</h1> 
     <p>Issue: {issueNumber}</p>
     <p>pages: {pageCount}</p>
     <p>Date: {new Date(dates[0].date).toLocaleString()}</p>
     <p>Prices: ${prices[0].price}</p>
     </div>
     <br></br>
     <br></br>
     <br></br>
     
     <h5>PAY THE DEVIL HIS DUE! Mephisto and Weasel have come for Deadpool! Will Good Night finally get his vengeance?
        Can Deadpool survive? And what will be left of him?</h5>
    </div>
</div>


</div>



      
  );
}

export default App;
// export default ColorBlock;