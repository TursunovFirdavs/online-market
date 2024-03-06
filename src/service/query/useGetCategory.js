import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const UseGetCategory = () => {
    // console.log(title);
    return useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            return (
                request
            .get('/category')
            .then(res => res.data)
            )
        }})
}