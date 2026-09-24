import {useState} from 'react'
import './App.css'

function App() {
    const [emojis, setEmojis] = useState(() => {
        const savedEmojis = localStorage.getItem('userEmojis')
        return savedEmojis ? JSON.parse(savedEmojis) : [
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
        ]
    })
    const [winer, setWinner] = useState({
        id: null,
        vote: null,
        className: null,
    })

    return (
        <>
            <p>Голосування за найкращий смайлик</p>
            < Emoji emojisList={emojis} addValue={handleClick}/>
            <button onClick={showResults}>
                Результати голосування:
            </button>
            < Win emoji={winer}/>
            <button className="del" onClick={resetEmojis}>
                Очистити
            </button>
        </>
    )

    function handleClick(id) {
        const newEmojis = [...emojis];
        for (let i in newEmojis) {
            if (newEmojis[i].id === id) {
                newEmojis[i].vote++;
            }
        }
        setEmojis(newEmojis)
        localStorage.setItem('userEmojis', JSON.stringify(newEmojis))
    }

    function resetEmojis() {
        const resetEmojis = [...emojis];
        resetEmojis.forEach((emoji) => {
            emoji.vote = 0
        })
        localStorage.removeItem('userEmojis')
        setEmojis(resetEmojis)
        setWinner({
            id: null,
            vote: null,
            className: null,
        })
    }

    function showResults() {
        const emojisCopy = [...emojis];
        const voteList = [];
        emojisCopy.forEach((emoji) => voteList.push(emoji.vote))

        setWinner(
            emojisCopy.find((emoji) => emoji.vote === Math.max(...voteList)
        ))
    }

}

function Win ({emoji}){
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

function Emoji ({emojisList, addValue}){
    return (
        <>
            <div className="emojies">
                {emojisList.map((emoji) => {
                    return (<div
                        className={emoji.className}
                        onClick={() => {
                            addValue(emoji.id)
                        }}
                        key={emoji.id}>
                        <span>{emoji.vote}</span>
                    </div>)
                })}
            </div>
        </>
    )
}
export default App
