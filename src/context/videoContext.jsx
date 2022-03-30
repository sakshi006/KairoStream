import { useContext,createContext, useState, useEffect } from "react";
import axios from "axios"

const VideoContext = createContext();

const useVideoContext = () => useContext(VideoContext)

const VideoContextProvider = ({children})=>{

    const [video,setVideo] = useState([]);

    const getVideo = async()=>{
        try{
            const reponseFromServer = await axios.get("/api/videos");
            setVideo(reponseFromServer.data.videos)
        }catch(err){
            console.error(err)
        }
    }
    useEffect(()=>{
        getVideo();
    },[])

    return(
        <VideoContext.Provider value = {{video,setVideo}}>
            {children}
        </VideoContext.Provider>
    )
}

export {useVideoContext,VideoContextProvider} ;