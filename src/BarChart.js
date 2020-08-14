import { Chart } from "react-google-charts";
import {Card} from 'react-bootstrap';
import React from 'react';

const BarChart = () =>{

    return(
        <div style={{marginTop:"50px", marginLeft:"350px"}}>
            <Card 
            style={{
                width:"650px",
                height:"530px",
                borderRadius:"12px",
                borderWidth:"2px",
                }}
                
            className="shadow-5-l">
    <Card.Body>
    <Chart
        width={'600px'}
        height={'500px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
            ['Month', 'Patients', 'Docotors', 'Diagnostics'],
            ['August', 200, 1000, 400],
            ['September', 250, 1170, 450],
            ['October', 300, 1120, 600],
            ['November', 350, 1030, 550],
        ]}
        options={{
            // Material design options
            chart: {
            title: 'Spend Analysis',
            subtitle: 'Patients, Doctors, Diagnostics and X-rays',
            },
        }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
        />
    </Card.Body>
  </Card>
        
        </div>
    );
}

export default BarChart;