import serviceAction from "../ServiceApi";

const fetchApi = {
    getUsersList: ({ dispatch, params }) => {
        serviceAction(dispatch).fetchApi({
            url: "/",
            params: params,
            method: "GET",
            key: "users",
        });
    },
};
export default fetchApi;
