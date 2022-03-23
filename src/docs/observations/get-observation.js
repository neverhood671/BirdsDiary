module.exports = {
    get: {
        tags: ["Observation CRUD operations"],
        description: "Get an observation",
        operationId: "getObservation",
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
                description: "Observation is obtained",
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