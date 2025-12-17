// // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // const USER_API = "http://localhost:8080/api/v1/users";

// // export const authApi = createApi({
// //     reducerPath: "authApi",
// //     baseQuery: fetchBaseQuery({
// //         baseUrl: USER_API,
// //         credentials: "include"
// //     }),
// //     endpoints: (builder) => ({
// //         registerUser: builder.mutation({
// //             query: (inputData) => ({
// //                 url: "/registerUser",
// //                 method: "POST",
// //                 body: inputData
// //             })

// //         }),
// //         loginUser: builder.mutation({
// //             query: (inputData) => ({
// //                 url: "/login",
// //                 method: "POST",
// //                 body: inputData
// //             }),
// //             async onQueryStarted(arg, { dispatch, queryFulfilled }) {
// //                 try {
// //                     const result = await queryFulfilled;
// //                     dispatch(userLoggedIn({ user: result.data.user }));
// //                 } catch (error) {
// //                     console.log(error);
// //                 }
// //             }

// //         }),

// //         loadUser: builder.query({
// //             query: () => ({
// //                 url: "/profile",
// //                 method: "GET"
// //             })
// //         })
// //     })
// // });

// // export const { useRegisterUserMutation, useLoginUserMutation, useLoadUserQuery } = authApi;
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // YE LINE PURI DELETE KAR DO YA COMMENT KAR DO
// // const USER_API = "http://localhost:8080/api/v1/users";

// export const authApi = createApi({
//     reducerPath: "authApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://localhost:8080/api/v1/users",        // YE CHANGE KAR DO!!!
//         credentials: "include"
//     }),
//     // baseQuery: fetchBaseQuery({
//     // baseUrl: "http://localhost:8080/api/v1/users",   // पूरा URL डाल दिया
//     // credentials: "include"
// // }),
//     endpoints: (builder) => ({
//         registerUser: builder.mutation({
//             query: (inputData) => ({
//                 url: "/registerUser",
//                 method: "POST",
//                 body: inputData
//             })
//         }),
//         loginUser: builder.mutation({
//             query: (inputData) => ({
//                 url: "/login",
//                 method: "POST",
//                 body: inputData
//             }),
//             async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//                 try {
//                     const result = await queryFulfilled;
//                     dispatch(userLoggedIn({ user: result.data.user }));
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//         }),
//         loadUser: builder.query({
//             query: () => "/profile"   // ye bhi simple string kar sakta hai
//         }),
//         updateUser: builder.mutation({
//             query: (formData) => ({
//                 url: "profile/update",
//                 method: "PUT",
//                 body: formData,
//                 credentials: "include"
//             })
//         })
//     })
// });

// export const { useRegisterUserMutation, useLoginUserMutation, useLoadUserQuery, useUpdateUserMutation } = authApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/users",   // ← IP यूज़ किया, localhost की समस्या नहीं आएगी
        credentials: "include"
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) => ({
                url: "/registerUser",
                method: "POST",
                body: inputData
            })
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
                url: "/login",
                method: "POST",
                body: inputData
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(userLoggedIn({ user: result.data.user }));
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        loadUser: builder.query({
            query: () => "/profile"
        }),
        updateUser: builder.mutation({
            query: (formData) => ({
                url: "profile/update",
                method: "PUT",
                body: formData,
                credentials: "include"
            })
        })
    })
});

export const { useRegisterUserMutation, useLoginUserMutation, useLoadUserQuery, useUpdateUserMutation } = authApi;