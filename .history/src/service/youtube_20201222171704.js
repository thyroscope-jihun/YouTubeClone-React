import axios from 'axios';

class Youtube{
    constructor(key){
        this.key = key;
    }
    mostPopular(){
        const key = process.env.REACT_APP_YOUTUBE_API_KEY;
        return axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&type=video&key=${key}`)
        .then(result => result.data.items);
    }
    search(url)
    {
        const key = process.env.REACT_APP_YOUTUBE_API_KEY;
        return axios.get(url)
        .then(result => console.log(items.data.items));
    }
}

export default Youtube;