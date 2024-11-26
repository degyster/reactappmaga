import React from 'react';

export default function Map() {
    return (
        <div style={{ margin: '10px' }}>
            <iframe
                width='100%'
                height="350"
                frameBorder="0"
                style={{ borderRadius: '12px' }}
                title='map'
                src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=1234%20Elm%20St,%20Springfield,%20IL,%2062704,%20USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
        </div>
    );
}
