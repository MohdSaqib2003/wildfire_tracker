import React from 'react';

const Loading = () => {
    const load_style = {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        height: '80vh'
        
    }
    return (
        <div style={load_style}>
            <div className="spinner-border" role="status" >
            </div>
        </div>
    )
}
export default Loading;
