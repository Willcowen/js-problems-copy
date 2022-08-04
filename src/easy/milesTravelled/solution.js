function milesTravelled (mins, mph) {
    console.log('mins:', mins, 'mph:', mph)
    const hours = (mins / 60).toFixed(2)
    console.log('hours:', hours)
    console.log(Math.ceil(hours * mph))
    return Math.ceil(hours * mph)
}

milesTravelled(130, 50)