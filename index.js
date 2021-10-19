

function baoyang() {
    var baoyangResult = document.getElementById("baoyangResult");
    var isGonglishu = document.getElementById("isGonglishu")
    if (isGonglishu.checked) {
        var kaigonglishu = document.getElementById("kaigonglishu").value;

        if (kaigonglishu < 20000 && kaigonglishu > 0) {

            baoyangResult.innerText = "结果:" + 200
        } else if (kaigonglishu < 100000 && kaigonglishu >= 20000) {

            baoyangResult.innerText = "结果:" + 400
        } else if (kaigonglishu >= 100000) {

            baoyangResult.innerText = "结果:" + 600
        }

    } else {

        var notGonglishu = document.getElementsByName("notGonglishu");
        for (let index = 0; index < notGonglishu.length; index++) {
            const element = notGonglishu[index];
            if (element.checked) {
                baoyangResult.innerText = "结果:" + element.value
            }
        }

    }
}

function isGonglishu() {
    var isGonglishu = document.getElementById("isGonglishu")
    var gonglishu = document.getElementsByClassName("gonglishu");
    var notGonglishu = document.getElementsByClassName("notGonglishu");
    if (isGonglishu.checked) {
        for (let index = 0; index < notGonglishu.length; index++) {
            notGonglishu[index].style.display = "none";

        }
        for (let index = 0; index < gonglishu.length; index++) {
            gonglishu[index].style.display = "";

        }
    } else {
        for (let index = 0; index < notGonglishu.length; index++) {
            notGonglishu[index].style.display = "";

        }
        for (let index = 0; index < gonglishu.length; index++) {
            gonglishu[index].style.display = "none";

        }
    }
}


function qiyou() {
    var nainlichen = document.getElementById("nainlichen").value
    var yibai_sheng = document.getElementById("yibai_sheng").value
    var qiyouType = document.getElementById("qiyouType").value

    var qiyouResult = document.getElementById("qiyouResult")

    qiyouResult.innerText = "结果:" + ((nainlichen / 100 * yibai_sheng) * qiyouType)

}

function disanzhezerenxian() {
    document.getElementById("disanzhezerenxianResult").innerText = "结果:" + document.getElementById("disanzhezerenxian").value + "元"
}

function sunshixian() {
    var chejia_sunshixian = document.getElementById("chejia_sunshixian").value
    var sunshixianResult = document.getElementById("sunshixianResult")
    sunshixianResult.innerText = "结果:" + ((chejia_sunshixian * 0.009) + 342)

}

function jiaozhizerenxian() {
    var zuoweishu = document.getElementById("zuoweishu").value
    var jiaozhizerenxianResult = document.getElementById("jiaozhizerenxianResult")
    if (zuoweishu <= 6) {
        jiaozhizerenxianResult.innerText = "结果: 950元/年"
    } else {
        jiaozhizerenxianResult.innerText = "结果: 1100元/年"
    }
}

function gouzhi() {
    var isShui = document.getElementById("isShui").value
    var gouzhijia = document.getElementById("gouzhijia").value
    var gouzhishiResult = document.getElementById("gouzhishiResult")

    if (isShui === "true") {
        gouzhishiResult.innerText = "结果:" + gouzhijia / 1.17 * 0.1
    } else {
        gouzhishiResult.innerText = "结果:" + gouzhijia * 0.1
    }
}

function daikuan(elId) {
    var chejia = document.getElementById("chejia").value
    var shoufubili = document.getElementById("shoufubili").value / 10.0
    var daikuannian = document.getElementById("daikuannian").value
    var resultDaikuan = document.getElementById("resultDaikuan")
    //首付
    var shoufu = chejia * (shoufubili / 10)

    //利息
    var li = 0.0;
    if (daikuannian === "1") {
        li = 0.04;
    } else if (daikuannian === "2") {
        li = 0.08;
    } else if (daikuannian === "3") {
        li = 0.12;
    }

    var lixi = (chejia - shoufu) * li
    var zonge = (chejia - shoufu) + lixi;
    var yuegong = zonge / (daikuannian * 12)

    // if('huandaizonge' == elId){
        document.getElementById("huandaizonge").innerText =   zonge
    // }else if('lixizonge' == elId){
        document.getElementById("lixizonge").innerText =  lixi
    // }else if('yuegongjine' == elId){
        document.getElementById("yuegongjine").innerText =  yuegong
    
}

function getNextBaoYangTime(){
    var peijian = document.getElementById("peijian").value
    var lastBaoYangTime = document.getElementById("lastBaoYangTime").value

    var nextBaoYangTimeEl = document.getElementById("nextBaoYangTime")
   
    nextBaoYangTimeEl.innerText = addMonth(lastBaoYangTime,peijian).toLocaleDateString()
}

function addMonth(date,monthCount){
    var tempDate = dateToDate(date);
    var count = parseInt(monthCount);
    if(count < 0){
        return new Date();
    }
    var oldYear = tempDate.getFullYear();
    var oldMonth = tempDate.getMonth();
    var oldDate = tempDate.getDate();
    var newMonth = oldMonth + count;
    var newDate = new Date(oldYear, newMonth, oldDate);
    //防止月份数不一致，进行微调
    while (newDate.getMonth() != (newMonth % 12)) {
        oldDate--;
        newDate = new Date(oldYear, newMonth, oldDate);
    }
    return newDate;
}

function dateToDate(date) {
    var sDate = new Date();
    if (typeof date == 'object' && typeof new Date().getMonth == "function") {
        sDate = date;
    } else if (typeof date == "string") {
        var arr = date.split('-');
        if (arr.length == 3) {
            sDate = new Date(arr[0] + '-' + arr[1] + '-' + arr[2]);
        }
    }
    return sDate;
};