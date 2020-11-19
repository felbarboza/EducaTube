import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=10',
// });

axios.get('https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=10',  {
  params: {
    key: 'AIzaSyD7BTtKC0gL9K8wpGNdp2WGHB_FRIc4mVs', }}).then(response=>
      {
        for(var i in response.data.items){
          var item = response.data.items[i];
          console.log(item);
        }
      });

