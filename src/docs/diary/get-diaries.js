module.exports = {
    get: {
        tags: ["Diary CRUD operations"],
        description: "Get all diaries",
        operationId: "getDiaries",
        parameters: [],
        responses: {
            200: {
                description: "Diaries were obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Diary",
                        },
                    },
                },
            },
        },
    },
};