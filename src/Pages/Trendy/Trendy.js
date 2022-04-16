import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import trend from '../../assets/group-skate_1920X.jpg'

import './Trendy.css'
const Trendy = () => {
    return (
        <div className="bg-dark text-white">
            <div className="p-5 text-start ">
                <h1 >Trendy skateboard for your <br /> <span style={{ color: "#ff5209" }}>next rides</span></h1>
                <p className="fw-lighter">Cras pretium risus ac tempor ultrices. Phasellus pretium ex odio, <br /> sit amet ultricies nulla accumsan quis.</p>
            </div >
            <div className=" container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <Card className="border-0  text-white trend-card py-2 px-5">

                            <Card.Body>
                                <Card.Title> <h4 className="text-start"> <span style={{ color: "#ff5209" }}>Evolve skateboards</span> - Skaterz GT Supersurf next level skateboard</h4></Card.Title>
                                <Card.Text>
                                    <p className="text-start fw-lighter">Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam feugiat fermentum finibus. <br /> <br />

                                        Aenean in sapien eu nisi porta ullamcorper a nec quam. Pellentesque enim dolor, varius vitae tincidunt a, mattis eu neque curabitur at justo.</p>
                                    <Button className=" btn text-white" >SHOP NOW</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-6 col-12 ">
                        <img className="img-fluid" src={trend} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trendy;