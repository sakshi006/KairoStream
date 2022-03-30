export const filterVideosByTag = (videos, selectedTag) => {

    const {all,badminton,basketball,football,cricket} = selectedTag;

    if(all)
     return videos;
    
     let badmintonFiltered = [], basketballFiltered=[],footballFiltered=[],cricketFiltered=[];


     if(badminton){
        badmintonFiltered = videos.filter(item=>item.category==="badminton")
     }
     if(basketball){
        basketballFiltered = videos.filter(item=>item.category==="basketball")
     }
     if(football){
        footballFiltered = videos.filter(item=>item.category==="football")
     }
     if(cricket){
        cricketFiltered = videos.filter(item=>item.category==="cricket")
     }

     return [...badmintonFiltered,...basketballFiltered,...footballFiltered,...cricketFiltered]
  };