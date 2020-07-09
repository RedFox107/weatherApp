import React from 'react';
import s from './App.module.css'
import Header from "../Header/Header";
import Main from "../Main/Main";

function App(props) {
    return (
        <div className={s.backgroundBlock}>
            <div className={s.mainBlock}>
                <Header/>
                <Main/>
                <footer>
                    <span>@copyright 2020</span>
                </footer>
            </div>
        </div>
    );
}





export default App;
