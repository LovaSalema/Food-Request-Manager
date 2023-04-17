import { useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { useEffect } from "react";
import '../css/Table.css'
import axios from 'axios'
const TableEmployee = ()=>{

        const [employee, setEmployee] = useState([]);
        const BASE_URL= "http://localhost:8080/api/employees";
         const fetch= async ()=>{
            const result= await axios.get(BASE_URL);
            setEmployee(result.data);
         }
        useEffect(()=>{
            fetch()
        }, [])
    return(
    <>
        <div
            style={{
                width:'100%', height: 'screen'
            }}
        >
            <div
                style={{width: '80%', height:'auto', display:'flex', flexDirection:'column', alignItems:'center'}}
            >
                <h1>EMPLOYEE</h1>
                <table

                >
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Firstname
                            </th>
                            <th>
                                Lastname
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map((data)=>(
                                <tr>
                                    <td>
                                        {data.id}
                                    </td>
                                    <td>
                                        {data.firstName}
                                    </td>
                                    <td>
                                        {data.lastName}
                                    </td>
                                    <td>
                                        {data.email}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}
export default TableEmployee;