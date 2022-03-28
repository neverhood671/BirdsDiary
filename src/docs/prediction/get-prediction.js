module.exports = {
    get: {
        tags: ["Prediction"],
        description: "Get prediction for current location and date",
        operationId: "getPrediction",
        parameters: [
            {
                name: "regionCode",
                in: "path",
                schema: {
                    type: "string"
                },
                required: true,
                description: "For example: 'RU-SPE' is a code for Botanical Gardens of Peter the Great in SPb. The full list of regions can be found here: https://confluence.cornell.edu/display/CLOISAPI/eBird-1.1-HotSpotsByRegion"
            },
            {
                name: "year",
                in: "path",
                schema: {
                    type: "number",
                    minValue: 1800,
                    maxValue: new Date().getFullYear()
                },
                required: true,
            },
            {
                name: "month",
                in: "path",
                schema: {
                    type: "number",
                    minValue: 1,
                    maxValue: 12
                },
                required: true,
            },
            {
                name: "day",
                in: "path",
                schema: {
                    type: "number",
                    minValue: 1,
                    maxValue: 31
                },
                required: true,
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