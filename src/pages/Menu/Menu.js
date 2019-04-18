import React from 'react'
import $ from 'jquery'

import Layout from 'components/Layout'

import './Menu.scss'

import Store from 'store'
const store = new Store()

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.activate = this.activate.bind(this)

        this.state = {
            upper : 'singapole',
            lower : 'rice'
        }
    }
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <div className="menu-wrapper">
                        <div className="menu-nav">
                            <ul className="category" data-id="upper" id="upper">
                                <li onClick={this.activate} data-id="singapole" className="active singapole">싱가폴</li>
                                <li onClick={this.activate} data-id="vietnam">베트남</li >
                                <li onClick={this.activate} data-id="thailand">태국</li>
                                <li onClick={this.activate} data-id="philippines">필리핀</li>
                                <li onClick={this.activate} data-id="combo">COMBO</li>
                                <li onClick={this.activate} data-id="best" id="best-menu">BEST</li>
                            </ul>
                            <ul className="items">
                                {store.items.map((item, i) => {
                                    if(item.category == this.state.upper) {
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
                                    } else {
                                        return false
                                    }
                                })}
                            </ul>
                        </div>
                        <div className="menu-nav">
                            <ul className="category" data-id="lower" id="lower">
                                <li onClick={this.activate} data-id="rice" className="active">RICE</li>
                                <li onClick={this.activate} data-id="noodle">NOODLE</li>
                                <li onClick={this.activate} data-id="salad">SALAD</li>
                                <li onClick={this.activate} data-id="beverage">BEVERAGE</li>
                                <li onClick={this.activate} data-id="best" id="best-menu">BEST</li>
                            </ul>
                            <ul className="items">
                                {store.items.map((item, i) => {
                                        if(item.category == this.state.lower) {
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
                                        } else {
                                            return false
                                        }
                                    })}
                            </ul>
                        </div>
                    </div> 
                </Layout>
                {console.log(this.state.upper, this.state.lower)}
            </React.Fragment>
        )
    }

    activate(e) {
        const parent = e.target.parentNode

        // Remove activated item
        $(`#${parent.dataset.id} > li.active`).removeClass('active')

        // Update with new active items
        if (parent.dataset.id == 'upper') {
            this.setState({
                upper : e.target.dataset.id
            });
        }
        else {
            this.setState({
                lower : e.target.dataset.id
            });
        }
        
        // Apply new state
        e.target.classList.add('active')

    }
    
}

export default Menu