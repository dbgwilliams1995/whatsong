import { environment } from 'src/environments/environment';


export const apiRoutes = {
    getEnquiryPosts: (limit: number,
                     offset: number, 
                     sortBy: string
                     ) => environment.wotSongApiUrl 
                     + `/enquiry/posts?limit=${limit}&offset=${offset}&sort_by=${sortBy}`
}