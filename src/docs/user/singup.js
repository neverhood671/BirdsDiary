module.exports = {
    post: {
        tags: ["User operations"],
        description: "SingUp",
        operationId: "SingUp",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/User",
                    },
                },
            },
        },
        responses: {
            409: {
                description: "This username is already taken"
            },
            201: {
                description: "User created successfully",
            },
            500: {
                description: "Server error",
            },
        },
    },
};
