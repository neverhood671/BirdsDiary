module.exports = {
    get: {
        tags: ["Recognition"],
        description: "Get to know what bird you met by its description",
        operationId: "getRecognition",
        parameters: [
            {
                name: "description",
                in: "path",
                schema: {
                    type: "string"
                },
                required: true,
                description: "Describe your bird. E.g. 'sparrow-sized with red spot on the head'"
            },
        ],
        responses: {
            200: {
                description: "Bird is recognized",
                content: {
                    "application/json": {
                        schema: {
                            type: "string"
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