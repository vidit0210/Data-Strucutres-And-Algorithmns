// const arr = s.slice(0, 8).split(':');
// arr[0] = (s.indexOf('PM') > -1) ?
//     (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
//     (arr[0] == 12 ? '00' : arr[0]);
// return arr.join(':');

// 07:05:45PM -->19:05:45
function timeConversion(s) {
    const arr = s.slice(0, 8).split(':');
    arr[0] = (s.indexOf('PM') > -1) ? (arr[0] == 12 ? '12' : Number(arr[0]) + 12) : (arr[0] == 12 ? '00' : arr[0])
    return arr.join(':')

}