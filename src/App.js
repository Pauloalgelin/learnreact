import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            who: "folks"
        }
    }
    render() {
        return(
            <div>
                <Header />
                <MainContent />
                <p>That's all {this.state.who}</p>
                <Footer />
            </div>
        )
    }
}

export default App