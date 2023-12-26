export const YOUTUBE_API_KEY = "AIzaSyC00r2eEXiXlIf_do5NVKg5v04P9_hSYr4";
export const YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;
export const YOUTUBE_API_SEARCH_URL = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YOUTUBE_MOVIE_DETAIL_API = "https://youtube.googleapis.com/youtube/v3/videos?part=id%2Cstatistics%2Csnippet&id=[VIDEO_ID]&key="+YOUTUBE_API_KEY
// "https://www.googleapis.com/youtube/v3/search"=YOUTUBE_API_KEY;
export const YOUTUBE_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=[VIDEO_ID]&maxResults=500&key="+YOUTUBE_API_KEY
export const YOUTUBE_SEARCH_BY_KEYWORD_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=[QUERY]&key="+YOUTUBE_API_KEY
