// import { Html5QrcodeScanner } from "html5-qrcode";
// import React from 'react';
// const qrcodeRegionId = "html5qr-code-full-region";

// class Scan extends React.Component {
  
//     render() {
//         // let rs = this.context
//         return (
//           <>
//           {/* {rs.result.UserID} */}
//             <div id={qrcodeRegionId} />
//           </>
//         );
//     }
    
//     componentWillUnmount() {
//         // TODO(mebjas): See if there is a better way to handle
//         //  promise in `componentWillUnmount`.
//         this.html5QrcodeScanner.clear().catch(error => {
//             console.error("Failed to clear html5QrcodeScanner. ", error);
//         });
//     }

//     componentDidMount() {
//         // Creates the configuration object for Html5QrcodeScanner.
//         function createConfig(props) {
//             var config = {focusMode:'continous',advanced:[{zoom: 1.5}],facingMode: "1" };
//             if (props.fps) {
//             config.fps = props.fps;
//             }
//             if (props.qrbox) {
//             config.qrbox = props.qrbox;
//             }
//             if (props.aspectRatio) {
//             config.aspectRatio = props.aspectRatio;
//             }
//             if (props.disableFlip !== undefined) {
//             config.disableFlip = props.disableFlip;
//             }
          
//             return config;
//         }
      
//         var config = createConfig(this.props);
//         var verbose = this.props.verbose === true;

//         // Suceess callback is required.
//         if (!(this.props.qrCodeSuccessCallback )) {
//             // throw "qrCodeSuccessCallback is required callback.";
//         }
        

//         this.html5QrcodeScanner = new Html5QrcodeScanner(
//             qrcodeRegionId, config, verbose);
//         this.html5QrcodeScanner.render(
//             this.props.qrCodeSuccessCallback,
//             this.props.qrCodeErrorCallback);
           
//     }
// };
// export default Scan;

import React, {useState} from 'react'
// import { Link } from "react-router-dom";
import {QrReader} from 'react-qr-reader'

function QRscanner() {

    const [qrscan, setQrscan] = useState(null);
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }
var id =10
    return (
      <div>
            {qrscan!=null?qrscan.user=id:'no'}
            <span>QR Scanner</span>
            
            <center>
                <div style={{width:'100%'}}>

                <QrReader
                    
                    delay={300}
                    constraints={{
                        facingMode: 'environment'
                    }}
                    onError={handleError}
                    onResult={handleScan}
                    // onScan={handleScan}
                    
                />
                </div>
         
            </center>

       
      </div>
    );
  }
  
  export default QRscanner;
  