import React from 'react'
import Layout from 'components/Layout'
import sr from './ScrollReveal'

import './Home.scss'

import Store from 'store'
const store = new Store()

class Home extends React.Component {
    componentDidMount = () => {
        const config = {
            origin: 'bottom',
            duration: 1000,
            delay: 150,
            distance: '50px',
            easing: 'ease'
        }

        sr.reveal(this.refs.box1, config)
    }
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <section className="main-banner">
                        <div className="banner-title-wrapper">
                            <h1 className="banner-title" ref="box1">
                                동남아의 맛을 여행하다!<br/>
                                도심 속 휴양지 트립아시아<br/>
                                <span>
                                    태국﹒베트남﹒싱가폴﹒필리핀 4개국 위주의 아시아 퀴진 레스토랑입니다.
                                </span>
                            </h1>
                        </div>
                    </section>

                    <section className="best-menu">
                        <div className="title-container"></div>
                        <div className="scroll-box-wrapper">
                            <a herf="/menu" id="more">메뉴 더보기</a>
                            <div className="scroll-box">
                                <ul>
                                    {store.items.map((item, i) => {
                                        if (true) {
                                            return (
                                                <li key={i}>
                                                    <img src={item.imageUrl} />
                                                    <div className='info'>
                                                        <span className="title">{item.category}</span><br/>
                                                        <span className="subTitle">{item.subTitle}</span><br/>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="brand-story">

                    </section>

                    <section className="store-info">

                    </section>

                    <section className="instagram">

                    </section>

                    <footer>

                    </footer>
                </Layout>
            </React.Fragment>
        )
    }
}

export default Home