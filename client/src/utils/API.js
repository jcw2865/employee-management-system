import axios from 'axios';

export default {
    // Get all employees from all departments
    getAll: function () {
        return axios.get("/api/employees")
    }
}