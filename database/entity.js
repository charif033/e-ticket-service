const { EntitySchema } = require('typeorm');

const User = new EntitySchema({
    name: "User",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true
        },
        firstName: {
            type: "varchar"
        },
        lastName: {
            type: "varchar"
        },
        isActive: {
            type: "boolean",
            default: true
        }
    }
});

module.exports = {
    User
};