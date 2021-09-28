import React, {useState, useEffect} from 'react';
import Visualizer from './Visualizer.jsx';
const io = require('socket.io-client');

//create a connection
const socket = io('ws://127.0.0.1:3001', {transports: ['websocket']});
socket.on('connect', () => {
    console.log('Connected to server');
});

let socketData = [];
function Page(){
    let [dataState, setData] = useState(socketData);

    useEffect(()=>{
        socket.on('data', (data)=>{
            socketData.push(data);
            setData([...socketData]);
        })
    }, [socket]);

    console.log(dataState);
    return (
        <div className='page-container'>
            <h1>Socket Data Visualizer</h1>
            <Visualizer data={dataState}/>
        </div>
    );
}

export default Page;
