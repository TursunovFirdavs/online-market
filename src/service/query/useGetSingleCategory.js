import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetSingleCategory = (name) => {
    return useQuery({
        queryKey: ['single', name],
        queryFn: async () => request
            .get(`/${name}`)
            .then(res => res.data)
        }      
    )
}