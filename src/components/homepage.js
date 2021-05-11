// import React from 'react';
import './styles/homepage.css'
// import Typical from 'react-typical';

// export default function Navigation() {
//     return (
//         <div>
//             <div className='homepage' id='homepage'>
            
//                 <div className='content'>
//                 I KNOW
//                  <Typical
//                  className='typing'
//                  loop={Infinity}
//                  wrapper='b'
//                  steps={['python',3000,'react js',3000,'java',4000, 'front-end']}>
//                  </Typical>
                 
                 
//                 </div>
                 

//             </div>
        
        
//         </div>
//     )
// }
import React from 'react';

import Typical from 'react-typical';


// const nam={
//         display: 'flex',
//         padding: '25px 8%',
//         fontSize: '32px',
//         backgroundColor: 'rgba(241, 236, 236,.5)',
//         position: 'relative',
//         left: '37%',
//         top: '91px',
//         height:'128px',
// }
function Navigation() {
    return (
        <div className='container' id='homepage'>
            
            
            
            <div className='nam'>
                I KNOW
                <div >
                <Typical loop={Infinity} wrapper='U' steps={['PYTHON',5000,'REACT JS',5000,'CSS',5000,'JAVA',5000]}/> 
                </div>           
            </div>
            <div className='main'>
                <div className='name1'>VARUN SHARMA</div>
              
            </div>
       
            
        </div>

           
    )
}
export default Navigation

