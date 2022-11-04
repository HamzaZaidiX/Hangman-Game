type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {

    return (
        <div style={{
            display: 'flex',
            gap: '.25em',
            fontSize: '6rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
            userSelect: 'none'
        }}>
            {wordToGuess.split("").map((letter, index) => (
                <span style={{ borderBottom: '.1em solid #45df16df', userSelect: 'none' }} key={index}>
                    <span style={{
                        visibility: guessedLetters.includes(letter) || reveal
                            ? 'visible'
                            : 'hidden',
                        color:
                            !guessedLetters.includes(letter) && reveal ? "#df1616b5" : "#156831",
                    }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}