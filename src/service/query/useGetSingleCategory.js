import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetSingleCategory = () => {
    return useQuery({
        queryKey: ['single'],
        queryFn: async () => request
            .get('/ноутбуки')
            .then(res => res.data)
        }      
    )
}