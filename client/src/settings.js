/*
* Normal link
https://www.youtube.com/watch?v=DDU-rZs-Ic4
* Embed link
https://www.youtube.com/embed/DDU-rZs-Ic4

<iframe width="560" height="315" src="https://www.youtube.com/embed/DDU-rZs-Ic4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/

const videoId = "DDU-rZs-Ic4";

export const LiveUrl =
  "https://www.youtube.com/embed/" + videoId + "/?autoplay=1";

export const YoutubeUrl =
  "https://www.youtube.com/watch?v=" + videoId + "&autoplay=1";

export const WeddingDate = +new Date(`04/24/2021 16:00:00`);

//* Itt kell átyírni a test-et false-ra és a video ID-t
//* Majd ide feltölteni:
//* https://app.netlify.com/sites/adriandviktor/overview
export const test = false;
