import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import $ from 'jquery'

import Layout from 'components/Layout'

import './Menu.scss'

import Store from 'store'

const store = new Store()

@observer
class Menu extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <div className="menu-wrapper">
                        <div className="menu-nav">
                            <ul className="category">
                                <li className="active singapole" id="singapole">싱가폴</li>
                                <li>베트남</li>
                                <li>태국</li>
                                <li>COMBO</li>
                                <li className="best-menu">BEST</li>
                            </ul>
                            <ul className="items">
                                {store.items.map((item, i) => {
                                    console.log($('.category > li.active').hasClass('singapole'))
                                    return (
                                        <li key={i}>
                                            <img src={item.imageUrl} />
                                            <div className='info'>
                                                <span className="title">{item.title}</span><br/>
                                                <span className="subTitle">{item.subTitle}</span><br/>
                                                <span className="description">{item.description}</span>
                                            </div>
                                        </li>
                                    )
                                    
                                })}
                            </ul>
                        </div>
                        <div className="menu-nav">
                            <ul className="category">
                                <li className="active"><a href="#rice">RICE</a></li>
                                <li><a href="#noodle">NOODLE</a></li>
                                <li><a href="#salad">SALAD</a></li>
                                <li><a href="#beverage">BEVERAGE</a></li>
                                <li className="best-menu"><a href="#best">BEST</a></li>
                            </ul>
                            <ul className="items">

                            </ul>
                        </div>
                    </div> 
                </Layout>
            </React.Fragment>
        )
    }
}

export default Menu