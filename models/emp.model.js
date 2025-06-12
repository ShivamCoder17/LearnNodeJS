const mongoose = require('mongoose');

const EmpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
)

const EmpModel = new mongoose.model('employee',EmpSchema);
module.exports = EmpModel;