// user actions

//add user
export const addUser = (
    {
        email = "",
        password = "",
        createdAt = 0,
        active = true,
        admin = false
    } = {}
    ) => ({
    type: "ADD_USER",
    user: {
        //TODO add auto increment _id from mongoDB
        email,
        password,
        createdAt,
        active,
        admin
    } 
});
    