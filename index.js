// Code your solution in this file!


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']


const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = (drivers) => drivers.slice(2,4)


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (multiplier) {
    return (fare) => multiplier * fare
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

// function selectDifferentDrivers(arrayOfDrivers, function)

const selectDifferentDrivers = (arrayOfDrivers, returnDrivers) => returnDrivers(arrayOfDrivers)