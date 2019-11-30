import axios from "axios"

const KEY = "AIzaSyBXY0Ggmbw3xsgRBQ09B_wr7OJqb_OwnpI"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part:"snippet",
        maxResults:5,
        key: KEY
    },
})