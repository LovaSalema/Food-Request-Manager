import axios from "axios";

const BASE_URL= "http://localhost:8080/api/employees";
 class  EmployeeService {
    getAllEmployees (){
        return axios.get(BASE_URL)
    }
} 

export default EmployeeService;