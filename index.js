// code your solution here
const record = [
    { year: '2015', result: 'W' },
    { year: '2014', result: 'N/A' },
    { year: '2013', result: 'L' }
];

function superbowlWin(array) {
    const yearWithWin = array.find((element) => element.result === 'W');
    if (yearWithWin) {
        return yearWithWin.year;
    } else {
        return undefined;
    }
};

superbowlWin(record);