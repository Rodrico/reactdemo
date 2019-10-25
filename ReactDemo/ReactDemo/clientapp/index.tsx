import * as React from 'react';
import {
    CircularProgressbar
} from 'react-circular-progressbar';



class TestComponents extends React.Component {
    render() {
        return <CircularProgressbar value={60} />;
    }
}