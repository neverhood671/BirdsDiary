module.exports = {
    components: {
        schemas: {
            Observation: {
                type: "object",
                properties: {
                    id: {
                        type: "UUID",
                        description: "Observation identification",
                    },
                    datetime: {
                        type: "datetime",
                        description: "date and time of the observation",
                    },
                    location: {
                        type: "object",
                        description: "Location of the observation",
                        properties: {
                            lat: {
                                type: "float",
                                description: "latitude of observation's location",
                            },
                            long: {
                                type: "float",
                                description: "longitude of observation's location",
                            }
                        }
                    },
                    comment: {
                        type: "string",
                        description: "comment to the observation",
                    },
                    birdId: {
                        type: "UUID",
                        description: "ID of observed bird",
                    },
                    diaryId: {
                        type: "UUID",
                        description: "ID of diary that this observation is connected to",
                    }
                },
            },
        },
    },
};