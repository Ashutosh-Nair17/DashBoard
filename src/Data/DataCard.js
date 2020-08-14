import React from 'react';
import {Card,CardDeck} from 'react-bootstrap';
import donations from './donations.jpg';
import doctors from './doctors.jpg';
import patients from './patients.jpg';
import './style.scss';

const DataCard =() =>{

  return(

    <CardDeck className="deck">
  <Card className="dimn shadow-5-l grow">
  <Card.Img className="img" variant="top" src={donations} />
    <Card.Body>
      <h3 style={{marginTop:"5px"}} className="text">Donations</h3>
      <h4 className="text">$20000</h4>
    </Card.Body>
  </Card>
  <Card className="dimn shadow-5-l grow">
  <Card.Img className="img" variant="top" src={doctors} />
    <Card.Body>
    <h3 style={{marginTop:"5px"}} className="text">Doctors and Health Care Workers</h3>
      <h4 className="text">1500</h4>
    </Card.Body>
  </Card>
  <Card className="dimn shadow-5-l grow">
  <Card.Img className="img" variant="top" src={patients} />
    <Card.Body>
    <h3 style={{marginTop:"5px"}} className="text">Patients</h3>
      <h4 className="text">2000</h4>
    </Card.Body>
  </Card>
</CardDeck>
  );

}

export default DataCard;