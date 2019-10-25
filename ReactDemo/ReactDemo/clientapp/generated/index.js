"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_circular_progressbar_1 = require("react-circular-progressbar");
class TestComponents extends React.Component {
    render() {
        return React.createElement(react_circular_progressbar_1.CircularProgressbar, { value: 60 });
    }
}
