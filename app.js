

// calculator Start
// get elements


let dataCal = [];
let calvalue = (value) => {
    dataCal.push(value);

    // console.log(dataCal.join(''));
    // dataCal.join()
    document.querySelector('.moTop').innerHTML = dataCal.join('');
    document.querySelector('.mobuttom').innerHTML = 0;
}
let oneclear = () => {
    dataCal.pop();
    document.querySelector('.moTop').innerHTML = dataCal.join('');
    document.querySelector('.mobuttom').innerHTML = 0;

}
let finalresult = () => {
    let cal_string = dataCal.join('');
    document.querySelector('.mobuttom').innerHTML =  eval(cal_string).toFixed(2); // on for aviodein overflow-display
}

let allClear = () => {
    dataCal = [];
    document.querySelector('.moTop').innerHTML = 0;
    document.querySelector('.mobuttom').innerHTML = "";

}

// calculator End