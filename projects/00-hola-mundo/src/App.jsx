import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App(){
    return(
        <section className="App">
            <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" />
            <TwitterFollowCard userName="kikobeats" name="Kiko Beats" />
        </section>
    )
}