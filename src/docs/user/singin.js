module.exports = {
    post: {
        tags: ["User operations"],
        description: "SingIn",
        operationId: "SingIn",
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
            401: {
                description: "Invalid username or password",
            },
            500: {
                description: "Server error",
            },
        },
    },
};
