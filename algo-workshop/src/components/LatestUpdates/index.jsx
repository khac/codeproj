import React from 'react';
import ConsistentHashing from './ConsistentHashing.jsx';
import GossipProtocolsInDatabaseSystems from './GossipProtocolsInDatabaseSystems.jsx';
import IndexesInDatabases from './IndexesInDatabases.jsx';
import TechnicalDetailsNoSQLDatabase from './TechnicalDetailsNoSQLDatabase.jsx';
import SudokuBoardArticle from './SudokuBoardArticle.jsx';
import BloomFilters from './BloomFilters.jsx';
import MapReduce from './MapReduce.jsx';

const LatestUpdates = () => {
    return (
        <div style={{padding:'20px', background: '#d3d3dd'}}>
            <GossipProtocolsInDatabaseSystems />
            <ConsistentHashing />
            <IndexesInDatabases />
            <TechnicalDetailsNoSQLDatabase />
            <SudokuBoardArticle />
            <BloomFilters />
            <MapReduce />
        </div>
    );
};

export default LatestUpdates;