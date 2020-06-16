import React from 'react';
import { Table } from 'reactstrap';

const AllTable = (props) => {
    return (
        <div>
            <h1>Welcome to the Ministry of Magic Employee Management System!</h1>
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Supervisor?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>asdf</td>
                        <td>asdf</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>asdf</td>
                        <td>asdf</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>asdf</td>
                        <td>asdf</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default AllTable;