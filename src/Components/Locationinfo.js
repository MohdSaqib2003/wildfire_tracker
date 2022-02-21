import React from 'react';

const Locationinfo = ({ info }) => {
    console.log('INFFFFFFOOOOO : ', info)
    return (
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title"> Location Info </h5>
                    <p class="card-text">
                        <li>ID: {info.id}</li>
                        <li>Title: {info.title}</li>
                    </p>
                </div>
            </div>
    );
}
export default Locationinfo;