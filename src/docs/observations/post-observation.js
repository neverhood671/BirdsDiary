module.exports = {
    post: {
        tags: ["Observation CRUD operations"],
        description: "Create observation",
        operationId: "createObservation",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Observation",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Observation created successfully",
            },
            500: {
                description: "Server error",
            },
        },
    },
};
