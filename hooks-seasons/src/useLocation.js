import { useState, useEffect} from "react";

export default () => {
    const [latitude, setLatitude] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(()=> {
        window.navigator.geolocation.getCurrentPosition(
            position => setLatitude(position.coords.latitude),
            (err) => setErrorMsg(err.message)
        );
    }, []);

    return [latitude, errorMsg]
}