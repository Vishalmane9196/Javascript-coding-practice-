function reverseWords (str) {

    console.log( str.trim()
        .split(/\s+/)
        .reverse()
        .join(' ')
    )
}

reverseWords('Hello World                                  ')
