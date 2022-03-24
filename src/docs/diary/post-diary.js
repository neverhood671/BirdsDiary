module.exports = {
    post: {
        tags: ["Diary CRUD operations"],
        description: "Create diary",
        operationId: "createDiary",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Diary",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Diary created successfully",
            },
            500: {
                description: "Server error",
            },
        },
    },
};
