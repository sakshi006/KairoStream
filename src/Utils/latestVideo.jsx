export const latestVideoFunction =(videos, latest)=>{
    if (latest) {
        return videos.sort(function (a, b) {
          return new Date(b.published) - new Date(a.published);
        });
      } else {
        return videos.sort(() => Math.random() - 0.5);
      }
}