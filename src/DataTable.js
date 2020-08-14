import React from 'react';
import {Table} from 'semantic-ui-react';
import {Card} from 'react-bootstrap';

const DataTable=()=>{

    return(

        <div style={{marginTop:"50px", marginLeft:"270px", width:"800px",height:"182px"}} className="shadow-5-l">
    <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={5}>Location</Table.HeaderCell>
            <Table.HeaderCell width={5}>Amount Given</Table.HeaderCell>
            <Table.HeaderCell width={5}>Remaining Amount</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell style={{cursor:"pointer"}}>Myanmar</Table.Cell>
            <Table.Cell>$5000</Table.Cell>
            <Table.Cell>$15000</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={{cursor:"pointer"}}>Congo</Table.Cell>
            <Table.Cell>$6000</Table.Cell>
            <Table.Cell>$9000</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={{cursor:"pointer"}}>Nigeria</Table.Cell>
            <Table.Cell>$7000</Table.Cell>
            <Table.Cell>$2000</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table> 
  </div>
    );
}

export default DataTable;