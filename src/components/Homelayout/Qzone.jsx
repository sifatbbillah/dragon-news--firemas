import React from 'react';
import SI from "../../assets/swimming.png"
import ci from "../../assets/class.png"
import pi from "../../assets/playground.png"
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>
                QZone

            </h2>
<div className="space-y-4">
<img src={SI} alt="" />
<img src={ci} alt="" />
<img src={pi} alt="" />


</div>



        </div>
    );
};

export default Qzone;