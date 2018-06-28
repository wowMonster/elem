import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheet/conStyle.css'
import ConBanner from './conbanner'
 class Content extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            return(
                <div id='con'>
                    <div className="con-top">
                        <div>图</div>
                        <div>图</div>
                    </div>
                    <div className='con-center'>
                        <div>小图</div>
                        <div>小图</div>
                        <div>小图</div>

                    </div>
                    <div className='con-bottom'>
                        <div>长图</div>

                    </div>
                    <ConBanner/>

                </div>
            )
        }
}
export default Content;
