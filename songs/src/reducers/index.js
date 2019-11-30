import { combineReducers } from "redux"

const songsListReducer = () => {
    return [
        {title: "Hakunamtata", duration:'3.05'},
        {title: "Macarina", duration:'4.05'},
        {title: "Girl like you", duration:'3.15'},
        {title: "One nation", duration:'4.35'},
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SELECT_SONG') {
        return action.payload;
    }else {
        return selectedSong;
    }
}

export default combineReducers({
    songs : songsListReducer,
    selectedSong : selectedSongReducer
})