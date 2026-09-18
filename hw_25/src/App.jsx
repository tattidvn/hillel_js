import {Component} from 'react'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        const savedEmoji = JSON.parse(localStorage.getItem('userEmojisList'));
        this.state = {
            emojis: savedEmoji || [
                {
                    id: 1,
                    vote: 0,
                    className: 'emj-1'
                },
                {
                    id: 2,
                    vote: 0,
                    className: 'emj-2'
                },
                {
                    id: 3,
                    vote: 0,
                    className: 'emj-3'
                },
                {
                    id: 4,
                    vote: 0,
                    className: 'emj-4'
                },
                {
                    id: 5,
                    vote: 0,
                    className: 'emj-5'
                }
            ],
            winer: {
                id: null,
                vote: null,
                className: null,
            }
        }
        this.handleClick = this.handleClick.bind(this);
        this.resetEmojis = this.resetEmojis.bind(this);
        this.showRes = this.showRes.bind(this);
    }

    handleClick(id) {
        const newEmojis = [...this.state.emojis];
        for (let i in newEmojis) {
            if (newEmojis[i].id === id) {
                newEmojis[i].vote++;
            }
        }
        localStorage.setItem('userEmojisList', JSON.stringify(newEmojis));
        this.setState({
            emojis: newEmojis
        })
    }

    resetEmojis() {
        const resetEmojis = [...this.state.emojis];
        resetEmojis.forEach((emoji) => {
            emoji.vote = 0
        })
        localStorage.clear()
        this.setState({
            emojis: resetEmojis,
            winer: {
                id: null,
                vote: null,
                className: null,
            }
        })
    }

    showRes() {
        const emojisCopy = [...this.state.emojis];
        const voteList = [];
        emojisCopy.forEach((emoji) => {
            return voteList.push(emoji.vote)
        })
        const newWiner = emojisCopy.find((emoji) => {
            return emoji.vote === Math.max(...voteList)
        })
        this.setState({
            winer: newWiner
        })

    }

    render() {
        return (
            <>
                <p>Голосування за найкращий смайлик</p>
                < Emoji emojisList={this.state.emojis} addValue={this.handleClick}/>
                <button onClick={this.showRes}>
                    Результати голосування:
                </button>
                < Win emoji = {this.state.winer} />
                <button className="del" onClick={this.resetEmojis}>
                    Очистити
                </button>
            </>
        )
    }
}

class Win extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {emoji} = this.props;
        return (
            <>
                <div className="result">
                    <p>Переможець: id : {emoji.id} </p>
                    <div className={`resImg ${emoji.className}`}><span></span></div>
                    <p>Кількість голосів: {emoji.vote}</p>
                </div>
            </>
        )
    }
}

class Emoji extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {emojisList, addValue} = this.props;
        return (
            <>
                <div className="emojies">
                    {emojisList.map((emoji) => {
                        return (<div
                            className={emoji.className}
                            onClick={()=>{addValue(emoji.id)}}
                            key={emoji.id}>
                            <span>{emoji.vote}</span>
                        </div>)
                    })}
                </div>
            </>
        )
    }
}

export default App
