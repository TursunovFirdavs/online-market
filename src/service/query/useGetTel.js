import { useQuery } from "@tanstack/react-query"
import { request } from "../../config/request"

export const useGetTel = () => {
    return useQuery({
        queryKey: ['phones'],
        queryFn: () => request
            .get('/tel')
            .then(res => res.data)
    })
}