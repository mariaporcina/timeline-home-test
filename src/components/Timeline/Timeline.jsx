import React, { useState } from 'react';
import assignLanes from "../../assignLanes.js";
import timelineItems from "../../timelineItems.js";
import './style.css';

const Timeline = () => {
    const [timeLanes, setTimeLanes] = useState(assignLanes(timelineItems));

    const colors = [
        '#2a9d8f',
        '#e9c46a',
        '#f4a261',
        '#e76f51',
        '#90be6d',
        '#94d2bd',
        '#ae2012'
    ];
    const getColor = (index) => {
        return colors[index % colors.length];
    };

    return (
        <div className='timeline'>
            { timeLanes.map((lane, index) => (
                <div key={index} className='timeline__lane' style={{ left: `${lane.daysFromStart * 25}px` }}>
                    {lane.lane.map((item, itemIndex) => (
                        <div key={itemIndex} className='timeline__item' style={{ width: `${item.days * 20}px`, backgroundColor: getColor(index) }}>
                            <h4>{item.name}</h4>
                            <p><strong>Date period: </strong>{item.start} - {item.end}</p>
                        </div>
                    ))}
                </div>
            )) }
        </div>
    );
};

export default Timeline;
