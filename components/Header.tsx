import type { NextPage } from 'next'
import '../styles/Home.module.css'

const Header: NextPage = () => {
    return (
        <div className="header">
            <div className="header__title">
                <h3><a href="https://www.icc-cricket.com/world-test-championship" target="_blank">WTC</a></h3>
            </div>
            <div className="header__anchor1">
                <a>Results</a>
            </div>
            <div className="header__anchor2">
                <a>Fixtures</a>
            </div>
            <div className="header__anchor3">
                <a>Stats</a>
            </div>
            <div className="header__anchor4">
                <a>Standings</a>
            </div>
        </div>
    )
}

export default Header