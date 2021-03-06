module.exports = {
    get: {
        tags: ["Observation CRUD operations"],
        description: "Get all observations",
        operationId: "getObservations",
        parameters: [],
        responses: {
            200: {
                description: "Observations were obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Observation",
                        },
                    },
                },
            },
        },
    },
};