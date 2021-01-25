let date = new Date();

/**
 * get current date
 */
function getCurrentDate() {
    let nowMonth = date.getMonth() + 1;
    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
        nowMonth = "0" + nowMonth;
    }
    let strDate = date.getDate();
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return date.getFullYear() + "-" + nowMonth + "-" + strDate;
}

/**
 * get current time
 */
function getCurrentTime() {
    return date.toLocaleTimeString();
}

/**
 * get current full time
 */
function getCurrentFullTime() {
    return '' + getCurrentDate() + ' ' + getCurrentTime();
}


module.exports = {
    getCurrentDate: getCurrentDate,
    getCurrentTime: getCurrentTime,
    getCurrentFullTime: getCurrentFullTime,
};
