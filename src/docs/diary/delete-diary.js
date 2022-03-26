module.exports = {
    delete: {
        tags: ["Diary CRUD operations"],
        description: "Delete the diary by id",
        operationId: "deleteDiary",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "A single observation id",
            },
        ],
        responses: {
            200: {
                description: "Diary is deleted",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Observation",
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