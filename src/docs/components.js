module.exports = {
    components: {
        schemas: {
            id: {
                type: "string",
                format: "uuid"
            },
            User: {
                type: "object",
                properties: {
                    username: {
                        type: "string",
                        minLength: 1,
                        maxLength: 50,
                    },
                    password: {
                        type: "string",
                        minLength: 6,
                    }
                }
            },
            Diary: {
                type: "object",
                properties: {
                    authorId: {
                        type: "string",
                        format: "uuid"
                    },
                    title: {
                        type: "string",
                        maxLength: 50,
                    },
                    description: {
                        type: "string",
                        maxLength: 200,
                    }
                }
            },
            Observation: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "uuid",
                        description: "Observation identification",
                    },
                    datetime: {
                        type: "string",
                        format: "date-time",
                        description: "date and time of the observation",
                    },
                    location: {
                        type: "object",
                        description: "Location of the observation",
                        properties: {
                            lat: {
                                type: "string",
                                pattern: "^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,6})?))$",
                                description: "latitude of observation's location",
                            },
                            long: {
                                type: "string",
                                pattern: "^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,6})?))$",
                                description: "longitude of observation's location",
                            }
                        }
                    },
                    comment: {
                        type: "string",
                        maxLength: 300,
                        description: "comment to the observation",
                    },
                    birdId: {
                        type: "string",
                        format: "uuid",
                        description: "ID of observed bird",
                    },
                    diaryId: {
                        type: "string",
                        format: "uuid",
                        description: "ID of diary that this observation is connected to",
                    }
                },
            },
            Prediction: {
                type: "object",
                properties: {
                    type: "array"
                }
            },
            Error: {
                type: "object",
                properties: {
                    message: {
                        type: "string",
                        description: "Error message",
                        example: "Not found",
                    },
                    internal_code: {
                        type: "string",
                        description: "Error internal code",
                        example: "Invalid parameters",
                    },
                },
            },
        },
    },
};