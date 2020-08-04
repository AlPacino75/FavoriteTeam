import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './Title/Title';
import About from './About/About';
import Stadium from './Stadium/Stadium';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';
import Search from './Search/Search';



const App = () => {
  const [team, setTeam] = useState('');
  const [fanGallery, setFanGallery] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async (teamName) => {
    const res = await fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + teamName);
    const data = await res.json();

    
    let galleryImages = [];
    // galleryImages.push(data.teams[0].strTeamFanart1)
    // galleryImages.push(data.teams[0].strTeamFanart2)
    // galleryImages.push(data.teams[0].strTeamFanart3)
    // galleryImages.push(data.teams[0].strTeamFanart4)
    
    //INSERT IMAGES TO GALLERY ARRAY
    for (const key of Object.keys(data.teams[0])) {
      if (key.indexOf("strTeamFanart") > -1)  galleryImages.push((data.teams[0][key]));
    }

    //SET THE FAVICON
    document.getElementById("favicon").href= data.teams[0].strTeamBadge;

    setTeam(data.teams[0]);
    setFanGallery(galleryImages);
  }


  useEffect(() => {
    fetchData('new_york_mets');
  }, []);


  const onSearchQueryChange = e => {
    setSearchQuery(e.target.value)
  }

  const onSearch = () => {
    //RETURNING FIRST MATCH ON SEARCH
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
     let filter = result.filter((n,i)=>{
      return (n.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);

      })

      if ((filter.length > 0) && searchQuery.length > 3) fetchData(filter[0].lookup);
    })

  }

  return (
    <main>
      <div className="container">
        
        <Title team={team} />
        
        <Search 
          SearchQuery={searchQuery} 
          onChange={onSearchQueryChange} 
          search={onSearch} 
        />

        <Stadium team={team}/>

        <Gallery GalleryImages={fanGallery} />

        <About team={team}  />

        <Footer 
          Twitter={team.strTwitter} 
          Facebook={team.strFacebook} 
          YouTube={team.strYoutube} 
          Instagram={team.strInstagram}
          />

      </div>
    </main>
  )
}

export default App;
