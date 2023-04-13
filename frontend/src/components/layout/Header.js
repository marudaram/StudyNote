import styled from "./Header.module.css";
import {Outlet} from "react-router-dom";
const Header = () => {

    return (
        <header id="header">
            <nav className={styled.nav}>
                <div className={styled.uniqueColorHeader}>
                    <h4 className={styled.headerTitle}>TIME TO CHANGE</h4>
                </div>
                <div className={styled.whiteHeader}>
                    <ul className={styled.headerBox}>
                        <li className={styled.login} style={{paddingRight: '30px'}}>LOGIN</li>
                        <li className={styled.todo} style={{paddingRight: '10px'}}>TODO LIST</li>
                        <li className={styled.dict} style={{paddingRight: '50px'}}>DICTIONARY</li>
                        <li className={styled.vocab} style={{paddingRight: '55px'}}>VOCABULARY</li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </header>
    )
}

export default Header;