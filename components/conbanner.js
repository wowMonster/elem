import React from 'react';

class ConBanner extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id='conBanner'>
                <div className='conBannerTop'>
                    <h2>---小吃精选---</h2>
                </div>
                <div className='conBannerCenter'>
                    <ul className='conList'>
                        <li className='conList1'>
                            <div>图</div>
                            <p>梁老三鸡头</p>
                            <span>立即购买</span>
                        </li>
                        <li className='conList1'>
                            <div>图</div>
                            <p>梁老三鸡头</p>
                            <span>立即购买</span>
                        </li>
                        <li className='conList1'>
                            <div>图</div>
                            <p>梁老三鸡头</p>
                            <span>立即购买</span>
                        </li>
                        <li className='conList1'>
                            <div>图</div>
                            <p>梁老三鸡头</p>
                            <span>立即购买</span>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default ConBanner;