import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Locationmarker = ({ title, onClick }) => {
    return (
        <div onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" className="icon" />
        </div>
    );
}
export default Locationmarker;