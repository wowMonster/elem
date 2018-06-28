import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content';
import './stylesheet/conStyle.css'
import './stylesheet/conBstyle.css'
ReactDOM.render(<Content/>,document.getElementById('out'))

!function(window, undefined) {
	
	var response = window.response || {};

    response._size = function() {
        var width = document.documentElement.clientWidth ? document.documentElement.clientWidth : 750;
        if(width>750) {
        	    width = 750;
        }
        var ratio = ( width / 750 ) * 100;
            document.getElementsByTagName('html')[0].style.fontSize = ratio + "px";
            document.getElementsByTagName('html')[0].setAttribute("base", width);
    };

    response._resize = function(){
        if(window.addEventListener) {   
            window.addEventListener('resize', response._size, false);   
        }else if(window.attachEvent) {   
            window.attachEvent('resize', response._size);   
        }
    };

    response._size();
    response._resize();

}(window);