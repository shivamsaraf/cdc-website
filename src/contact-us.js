import React from 'react';
import img1 from './chairman.jpg';
import img2 from './pankajjain.jpg';
import img3 from './sachinksingh.jpg';
import img4 from './scpt1.jpeg';
import img5 from './scpt2.jpeg';
import Header from './Header';
import Footer from './footer';
import './contact-us.css'


export default class ContactUs extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div class="contact_main">
                    <div align="center">
                        <div><h1>Chairman</h1></div>
                        <div class="chairman">
                            <br />
                            <div><img src={img1} alt="chairman_cdc" class="chairman_image" /></div>
                            <br />
                            <div><b>Prof Satish Kumar Sinha</b><br />Phone: +91-326-2235208, 2235231, <br /> Mobile: +91-8002114960, 7808337799 <br />Email: cdc@iitism.ac.in</div>
                        </div>
                    </div>
                    <div align="center">
                        <div class="vice_chairman">
                        <div>
                            <h1>Vice Chairman</h1>
                        <div class="chairman">
                            <br />
                            <div><img src={img2} alt="vice_cr1" class="chairman_image" /></div>
                            <br />
                            <div><b>Dr. Pankaj Kumar Jain</b><br />Phone: +91-326-2235803,<br /> Mobile: +91-7766904994<br />Email: cdc@iitism.ac.in</div>
                        </div>
                        </div>
                        <div>
                            <h1>Vice Chairman</h1>
                        <div class="chairman">

                            <br />
                            <div><img src={img3} alt="vice_cr2" class="chairman_image" /></div>
                            <br />
                            <div><b>Dr. Sachin Kumar Singh</b><br />Phone: +91-326-2295184, 2235176,<br /> Mobile: +91-9102991041<br />Email: cdc@iitism.ac.in</div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div align="center">
                        <div><h1>Students' Coordinator Placement Team (SCPT)</h1></div>
                        <div class="scpt">
                        <div class="chairman">
                            <br />
                            <div><img src={img4} alt="scpt1" class="chairman_image" /></div>
                            <br />
                            <br />
                            <div><b>Prithvi Singh Chauhan</b><br />Mobile: +91-8030281193</div>                           
                        </div>
                        <br />
                        <div class="chairman">
                            <br />
                            <div><img src={img5} alt="scpt2" class="chairman_image" /></div>
                            <br />
                            <br />
                            <div><b>Rishabh Ranjan</b><br />Mobile: +91-9934615950</div>
                        </div>
                        <br />
                        <div class="chairman">
                            <br />
                            <div><img src={img1} alt="vice_cr1" class="chairman_image" /></div>
                            <br />
                            <br />
                            <div><b>Abhinav Bajpai</b><br />Mobile: +91-8827524158</div>
                        </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}