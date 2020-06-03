import React from 'react';
import CertificationCard from './certificationcard';


let HTML="https://lh3.googleusercontent.com/P5ZYmONNF6pgwbBx-zqQWdWnpgQH0S-RGmDRUHpy8CSeaLHLdIFlFiP6hpCAbp192A";
let CSS="https://lh3.googleusercontent.com/wnbpuJjt9GNcv41rbtfYn-v3G3qEaBG95Ob96t_t3FM-2AO470HRlIQcqNCo3HxC8WZP";
let JavaScript="https://lh3.googleusercontent.com/WPaGf2DLOuiRhKtHzMpJUppuOY3672l2ycmO5xkSoLzq_ShDb4aXbhbX8MJysRvLgB4";
let Java="https://www.xyzapk.com/wp-content/uploads/2020/04/com.sololearn.java_.jpg.png";
let ResponsiveWebDesign="https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png";
let MicrosoftExam480="https://images.youracclaim.com/images/84f513e4-256d-4aa0-a29d-973bcb39d87a/Programming%2Bin%2BHTML5%2Bwith%2BJavaScript%2Band%2BCss3-01.png";
export const Certification = () =>
                <div className="project-grid" id="Certification-grid">
                    <CertificationCard
                    imgmyUrl={MicrosoftExam480}
                    certTitle="Microsoft Exam 480: Programming in HTML5 with JavaScript and CSS3"
                    certURL="https://www.youracclaim.com/badges/9637458f-d1c1-4746-a31d-72cf99cfa647/public_url"
                    />
                    <CertificationCard
                    imgmyUrl={ResponsiveWebDesign}
                    certTitle="Responsive Web Design"
                    certURL="https://www.freecodecamp.org/certification/fcc8eef0fcb-973d-4c54-bba3-c0fc28b43bb7/responsive-web-design"
                    />                    
                    <CertificationCard
                    imgmyUrl={Java}
                    certTitle="Java Tutorial course "
                    certURL="https://www.sololearn.com/Certificate/1068-13208616/pdf/"
                    />
                    <CertificationCard
                    imgmyUrl={HTML}
                    certTitle="HTML Fundamentals course"
                    certURL="https://www.sololearn.com/Certificate/1014-13208616/pdf/"
                    />
                    <CertificationCard
                    imgmyUrl={CSS}
                    certTitle="CSS Fundamentals course"
                    certURL="https://www.sololearn.com/Certificate/1023-13208616/pdf/"
                    />
                    <CertificationCard
                    imgmyUrl={JavaScript}
                    certTitle="JavaScript Tutorial course"
                    certURL="https://www.sololearn.com/Certificate/1024-13208616/pdf/"
                    />
                </div>