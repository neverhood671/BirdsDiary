module.exports = {
    delete: {
        tags: ["Observation CRUD operations"],
        description: "Delete the observation by id",
        operationId: "deleteObservation",
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
                description: "Observation is deleted",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Observation",
                        },
                    },
                },
            },
            404: {
                description: "Observation is not found",
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