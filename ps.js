const timeout = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

timeout(3000)
    .then(function() {
        console.log('Passou 3 segundos')
    })
