import React from 'react';
import Cards from './Cards';

const GeneratedCards = ({curList}) => {
    console.log(curList.reverse());
    return (
        curList.reverse().map((element) => {
            console.log(element.split('\n\n'))
            const [heading, subheading, ...body] = element.split('\n\n');
            return (<Cards heading={heading} subheading={subheading} body={body} />);
        }        
    ));
};

export default GeneratedCards;