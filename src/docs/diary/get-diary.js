module.exports = {
    get: {
        tags: ["Diary CRUD operations"],
        description: "Get a diary by id",
        operationId: "getObservation",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "A single diary id",
            },
        ],
        responses: {
            200: {
                description: "Diary is obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Diary",
                        },
                    },
                },
            },
            404: {
                description: "Diary is not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error",
                        },
                    },
                },
            },
        },
    },
};