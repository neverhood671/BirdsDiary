module.exports = {
    get: {
        tags: ["Observation CRUD operations"],
        description: "Get observation",
        operationId: "getObservation",
        parameters: [],
        responses: {
            200: {
                description: "Observation were obtained",
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