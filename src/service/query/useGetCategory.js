import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const UseGetCategory = (name) => {
    // console.log(title);
    return useQuery({
        queryKey: ['category', name],
        queryFn: async () => {
            return (
                request
            .get(`/${name}`)
            .then(res => res.data)
            )
        }})
}