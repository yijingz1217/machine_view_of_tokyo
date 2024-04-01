var mapconsoleID = document.getElementById("mapconsole");
var mapID = document.getElementById("map");
var controlCenterID = document.getElementById("controlCenter");
var sizebuttonID = document.getElementById("sizebutton");
var largerID = document.getElementById("larger");
var smallerID = document.getElementById("smaller");
var upID = document.getElementById("up");
var downID = document.getElementById("down");
var leftID = document.getElementById("left");
var rightID = document.getElementById("right");
var searchCenterID = document.getElementById("searchCenter");
var searchboxID = document.getElementById("searchbox");
var popID = document.getElementById("pop");
var buttonID = document.getElementById("button");
var pinID = document.getElementById("pin");
var locID = document.getElementById("loc");
var closeID = document.getElementById("close");
var switchID = document.getElementById("switch");
var welcomeID = document.getElementById("welcome");
var shadeID = document.getElementById("shade");
var window_h = window.innerHeight;
var window_w = window.innerWidth;

var original_h = 2466, original_w = 4758;
var cur_location;

var mapArray = [
    {   filename: "map.gif",
        width: window_h / original_h * original_w,
        height: window_h,
    },

    {   filename: "map.gif",
        width: window_h / original_h * original_w * 1.4,
        height: window_h * 1.4,
    },

    {   filename: "map.gif",
        width: window_h / original_h * original_w * 1.8,
        height: window_h * 1.8,
    },

    {   filename: "map.gif",
        width: window_h / original_h * original_w * 2.2,
        height: window_h * 2.2,
    },

    {   filename: "map.gif",
        width: window_h / original_h * original_w * 2.6,
        height: window_h * 2.6,
    },

    {   filename: "map.gif",
        width: window_h / original_h * original_w * 3,
        height: window_h * 3,
    },
    
];

var locationArray = [
    {   name: "Ikebukuro",
        x: "1450",
        y: "258",
    },

    {   name: "Shinjuku",
        x: "1292",
        y: "1022",
    },

    {   name: "Shibuya",
        x: "1290",
        y: "1600",
    },

    {   name: "Harajuku",
        x: "1318",
        y: "1414",
    },

    {   name: "Akihabara",
        x: "2420",
        y: "853",
    },

    {   name: "Roppongi",
        x: "1819",
        y: "1545",
    },

    {   name: "Ginza",
        x: "2322",
        y: "1317",
    },

    {   name: "Ueno",
        x: "2481",
        y: "554",
    },

    {   name: "Home",
        x: "1519",
        y: "1755",
    },
];

var console_width, console_height;
var cur = 1;

var ml, mt, mr, mb;
var map_width, map_height;
var prev;

function loadSize() {

    console_width = window.innerWidth - 20;
    console_height = window.innerHeight - 20;

    searchCenterID.style.display = "none";
    controlCenterID.style.display = "none";

    mapID.src = "icon.gif";
    mapID.style.left = console_width  / 2 - 330 +"px";
    mapID.style.top  = console_height / 2 - 240 +"px";
    mapID.style.width = "640px";
    mapID.style.height = "480px";

    welcomeID.innerHTML = "Welcome to Human VS. Machine's View of Tokyo";
    welcomeID.style.color = "white";
    welcomeID.style.fontSize = "40pt";
    welcomeID.style.position = "absolute";
    welcomeID.style.left = console_width  / 2 - 550 +"px";
    welcomeID.style.top  = console_height / 2 - 300 +"px";

    map_width = mapArray[cur].width;
    map_height = mapArray[cur].height;
    // mr = console_width - map_width - console_width / 2;
    // mb = console_height - map_height - console_height / 2;
    ml = 0 - mapArray[cur].width / 2 + console_width / 2;
    mt = 0 - mapArray[cur].height / 2 + console_height / 2;

    if(ml > console_width/2) ml = console_width/2;
    if(mt > console_height/2) mt = console_height/2;
    
    // if(ml < mr ) ml = mr;
    // if(mt < mb) mt = mb;

    // ml = 0;
    // mt = 0;
    mr = console_width - map_width;
    mb = console_height - map_height;

    // if(ml > 0) ml = 0;
    // if(mt > 0) mt = 0;
    
    if(ml < mr) ml = mr;
    if(mt < mb) mt = mb;

    mapconsoleID.style.position = "absolute";
    mapconsoleID.style.top = "0px";
    mapconsoleID.style.left = "0px";
    mapconsoleID.style.width = console_width + "px";
    mapconsoleID.style.height = console_height + "px";
    mapconsoleID.style.border = "10px solid gray";
    mapconsoleID.style.overflow = "hidden";

    setTimeout("mapID.src = mapArray[cur].filename;", 1500);

    setTimeout(function() {
        // mapID.src = mapArray[cur].filename;
        mapID.style.width = map_width + "px";
        mapID.style.height = map_height + "px";
        mapID.style.left = ml + "px";
        mapID.style.top = mt + "px";
        welcomeID.style.display = "none";
        searchCenterID.style.display = "block";
        controlCenterID.style.display = "block";
    }, 1500);

    controlCenterID.style.position = "absolute";
    controlCenterID.style.left = console_width + "px";
    controlCenterID.style.top = console_height + "px";
    
    smallerID.style.position = "absolute";
    smallerID.style.left = "-75px";
    smallerID.style.top = "-104px";
    smallerID.style.width = "48px";
    smallerID.style.height = "46px";

    largerID.style.position = "absolute";
    largerID.style.left = "-75px";
    largerID.style.top = "-150px";
    largerID.style.width = "48px";
    largerID.style.height = "46px";

    sizebuttonID.style.position = "absolute";
    sizebuttonID.style.left = "-75px";
    sizebuttonID.style.top = "-150px";

    upID.style.position = "absolute";
    upID.style.top = "-185px";
    upID.style.left = "-200px";

    downID.style.position = "absolute";
    downID.style.top = "-90px";
    downID.style.left = "-200px";

    leftID.style.position = "absolute";
    leftID.style.top = "-145px";
    leftID.style.left = "-245px";

    rightID.style.position = "absolute";
    rightID.style.top = "-145px";
    rightID.style.left = "-140px";

    searchCenterID.style.position = "absolute";
    searchCenterID.style.left = "100px";
    searchCenterID.style.top = "50px"
    searchboxID.style.width = "405px";
    searchboxID.style.height = "34px";

    popID.style.position = "absolute";
    popID.style.left = "100px";
    popID.style.top = "100px"
    // popID.style.width = "480px";
    // popID.style.height = "600px";
    popID.style.width = console_width / 4 + 150 + "px";
    popID.style.height = console_height - 200 + "px";
    popID.style.backgroundColor = "cornsilk";
    popID.style.border = "5px solid gray";
    popID.style.display = "none";

    closeID.style.position = "absolute";
    closeID.style.left = console_width / 4 + 110 + "px";
    closeID.style.top = "0px"
    closeID.style.display = "none";

    switchID.style.position = "absolute";
    switchID.style.left = console_width / 4 - 15 + "px";
    switchID.style.top = "0px"
    switchID.style.width = "125px";
    switchID.style.display = "none";

    locID.style.margin = "10px";

    buttonID.style.position = "absolute";
    buttonID.style.left = "410px";
    buttonID.style.top = "0px";
    buttonID.style.width = "80px";
    buttonID.style.height = "35px";

    pinID.src = "none.png";
    pinID.style.position = "absolute";
    pinID.style.left = console_width/2 - 120 + "px";
    pinID.style.top = console_height/2 - 95 + "px";
    pinID.style.width = "60px";
    pinID.style.height = "60px";
}

function handleResize() {
    var original_width = console_width, orginal_height = console_height;
    console_width = window.innerWidth - 20;
    console_height = window.innerHeight - 20;
    mr = mr - (original_width / 2 - console_width / 2);
    mb = mb - (orginal_height / 2 - console_height / 2);
    ml = ml - (original_width / 2 - console_width / 2);
    mt = mt - (orginal_height / 2 - console_height / 2);

    if(ml > console_width / 2) ml = console_width / 2;
    if(mt > console_height / 2) mt = console_height / 2;
    
    if(ml < mr ) ml = mr;
    if(mt < mb) mt = mb;

    mapconsoleID.style.position = "absolute";
    mapconsoleID.style.top = "0px";
    mapconsoleID.style.left = "0px";
    mapconsoleID.style.width = console_width + "px";
    mapconsoleID.style.height = console_height + "px";
    mapconsoleID.style.border = "10px solid gray";
    mapconsoleID.style.overflow = "hidden";
    
    mapID.style.left = ml + "px";
    mapID.style.top = mt + "px";

    controlCenterID.style.position = "absolute";
    controlCenterID.style.left = console_width + "px";
    controlCenterID.style.top = console_height + "px";
    
    smallerID.style.position = "absolute";
    smallerID.style.left = "-75px";
    smallerID.style.top = "-104px";
    smallerID.style.width = "48px";
    smallerID.style.height = "46px";

    largerID.style.position = "absolute";
    largerID.style.left = "-75px";
    largerID.style.top = "-150px";
    largerID.style.width = "48px";
    largerID.style.height = "46px";

    sizebuttonID.style.position = "absolute";
    sizebuttonID.style.left = "-75px";
    sizebuttonID.style.top = "-150px";

    upID.style.position = "absolute";
    upID.style.top = "-185px";
    upID.style.left = "-200px";

    downID.style.position = "absolute";
    downID.style.top = "-90px";
    downID.style.left = "-200px";

    leftID.style.position = "absolute";
    leftID.style.top = "-145px";
    leftID.style.left = "-245px";

    rightID.style.position = "absolute";
    rightID.style.top = "-145px";
    rightID.style.left = "-140px";

    buttonID.style.position = "absolute";
    buttonID.style.left = "410px";
    buttonID.style.top = "0px";
    buttonID.style.width = "80px";
    buttonID.style.height = "35px";

    pinID.src = "none.png";
    pinID.style.position = "absolute";
    pinID.style.left = console_width/2 - 120 + "px";
    pinID.style.top = console_height/2 - 95 + "px";
    pinID.style.width = "60px";
    pinID.style.height = "60px";
}

function newMap() {
    mapID.src = mapArray[cur].filename;
    mapID.style.width = mapArray[cur].width + "px";
    mapID.style.height = mapArray[cur].height + "px";
    // mr = console_width - mapArray[cur].width - console_width / 2;
    // mb = console_height - mapArray[cur].height - console_height / 2;
    mr = console_width - mapArray[cur].width;
    mb = console_height - mapArray[cur].height;

    var xx = 0 - (console_width/2 - ml) / mapArray[prev].width * mapArray[cur].width + console_width / 2;
    var yy = 0 - (console_height/2 - mt) / mapArray[prev].height * mapArray[cur].height + console_height / 2;

    // if(xx > console_width/2) xx = console_width/2;
    if(xx > 0) xx = 0;
    if(xx < mr ) xx = mr;

    // if(yy > console_height/2) yy = console_height/2;
    if(yy > 0) yy = 0;
    if(yy < mb) yy = mb;

    mapID.style.left = xx + "px";
    mapID.style.top = yy + "px";    

    ml = xx;
    mt = yy;
}

function getHeight() {
	return parseInt(mapconsoleID.style.height);
}

function getWidth() {
	return parseInt(mapconsoleID.style.width);
}

function getTop() {
	return parseInt(mapconsoleID.style.top);
}

function getLeft() {
	return parseInt(mapconsoleID.style.left);
}

function inMap(x,y) {
    if( x >= 50 && y >= 50 && x <= 450 && y <= 80) return false;

	return (x >= getLeft() && x <= getLeft() + getWidth() && y >= getTop() && y <= getTop() + getHeight());
}

var isDragging = false;
var x,y;

function handleMouseDown(evt) {
    pinID.src = "none.png";
    x = evt.clientX;
    y = evt.clientY;
    mapID.style.transition = "none";

	if (inMap(x,y) && !isDragging) {
        isDragging = true;
        evt.preventDefault();

        document.body.style.cursor = "move";
	}
}

function handleMouseUp(evt) {
	if (isDragging) {
        
        var xx = evt.clientX - (x - ml), yy = evt.clientY - (y - mt);

        // if(xx > console_width/2) xx = console_width/2;
        if(xx > 0) xx = 0;
        if(xx < mr ) xx = mr;

        // if(yy > console_height/2) yy = console_height/2;
        if(yy > 0) yy = 0;
        if(yy < mb) yy = mb;

        mapID.style.left = xx + "px";
        mapID.style.top = yy + "px";

        isDragging = false;	
        document.body.style.cursor = "default";

        ml = xx;
        mt = yy;
	}
}

function handleMouseMove(evt) {
    if (isDragging) {

        var xx = evt.clientX - (x - ml), yy = evt.clientY - (y - mt);

        // if(xx > console_width/2) xx = console_width/2;
        if(xx > 0)  xx = 0;
        if(xx < mr) xx = mr;

        // if(yy > console_height/2) yy = console_height/2;
        if(yy > 0)  yy = 0;
        if(yy < mb) yy = mb;

        mapID.style.left = xx + "px";
        mapID.style.top = yy + "px";

        evt.preventDefault();
    }
}

function doubleClick(evt) {
    var xx = console_width / 2 + 10 - evt.clientX, yy = console_height / 2 + 10 -evt.clientY;

    ml = ml + xx;
    mt = mt + yy;

    // if(ml > console_width/2) ml = console_width/2;
    // if(mt > console_height/2) mt = console_height/2;

    if(ml > 0) ml = 0;
    if(mt > 0) mt = 0;
    
    if(ml < mr ) ml = mr;
    if(mt < mb) mt = mb;

    mapID.style.left = ml + "px";
    mapID.style.top = mt + "px";
    mapID.style.transition = "left 1.2s linear, top 1.2s linear";
}

function larger() {
    if(cur < 4) {
        prev = cur;
        cur = cur + 1;
        newMap();
    }
}

function smaller() {
    if(cur > 0) {
        prev = cur;
        cur = cur - 1;
        newMap();
    }
}

function lefter() {
    ml = ml + 20;

    // if(ml > console_width/2) ml = console_width/2;
    if(ml > 0) ml = 0;

    mapID.style.left = ml + "px";
    mapID.style.transition = "left 0.2s linear";
}

function righter() {
    ml = ml - 20;

    if(ml < mr) ml = mr;

    mapID.style.left = ml + "px";
    mapID.style.transition = "none";
    mapID.style.transition = "left 0.2s linear";
}

function upper() {
    mt = mt + 20;

    // if(mt > console_height/2) mt = console_height/2;
    if(mt > 0) mt = 0;

    mapID.style.top = mt + "px";
    mapID.style.transition = "top 0.2s linear";
}

function downer() {
    mt = mt - 20;

    if(mt < mb) mt = mb;

    mapID.style.top = mt + "px";
    mapID.style.transition = "top 0.2s linear";
}

function search() {
    for(var i = 0; i < locationArray.length; i++) {
        if(locationArray[i].name == searchboxID.value) {
            cur_location = locationArray[i].name;

            var xx = locationArray[i].x / original_w * mapArray[cur].width;
            var yy = locationArray[i].y / original_h * mapArray[cur].height;
            // var xx = locationArray[i].x / mapArray[0].width * mapArray[cur].width;
            // var yy = locationArray[i].y / mapArray[0].width * mapArray[cur].height;

            xx = xx - (console_width/2 - ml);
            yy = yy - (console_height/2 - mt);

            ml = ml - xx;
            mt = mt - yy;

            if(ml > console_width/2) ml = console_width/2;
            if(mt > console_height/2) mt = console_height/2;

            // ml += (console_width/2  - ml - xx);
            // mt += (console_height/2 - mt - yy);

            if(ml > 0) {
                pinID.style.left = console_width/2 - 120 - ml + "px";
                ml = 0;
            }
            else if(ml < mr) {
                pinID.style.left = console_width/2 - 120 + (mr - ml) + "px";
                ml = mr;
            }
            else {
                pinID.style.left = console_width/2 - 120 + "px";
            }

            if(mt > 0) {
                pinID.style.top = console_height/2 - 95 - mt + "px";
                mt = 0;
            }
            else if(mt < mb) {
                pinID.style.top = console_height/2 - 95 + (mb - mt) + "px";
                mt = mb;
                // buttonID.value = "hELLO";
            }
            else {
                pinID.style.top = console_height/2 - 95 + "px";
            }

            
            // if(ml < mr) {
            //     // pinID.style.left = console_width/2 - 120 + "px";
            //     ml = mr;
            // }
            // else {
            //     // pinID.style.left = console_width/2 - 120 + "px";
            // }
            // if(mt < mb) {
            //     // pinID.style.left = console_width/2 - 120 + "px";
            //     mt = mb;
            // }
            // else {
            //     // pinID.style.top = console_height/2 - 95 + "px";
            // }

            mapID.style.left = ml + "px";
            mapID.style.top = mt + "px";
            mapID.style.transition = "left 1.2s linear, top 1.2s linear";

            setTimeout("pinID.src = 'pin.png';",1201);
            setTimeout("pop();",1201);
        }
    }
}

function pop() {
    popID.style.display = "block";
    closeID.style.display = "block";
    switchID.style.display = "block";
    pinID.src = "pin.png";
    locID.innerHTML = cur_location; 
}

function close_pop() {
    closeID.style.display = "none";
    popID.style.display = "none";
    switchID.style.display = "none";
}

function switch_button() {
    if(switchID.value == "Switch to Machine") {
        switchID.value = "Switch to Reality";
        switch_machine();
    }
    else {
        switchID.value = "Switch to Machine";
        switch_real();
    }
}

function switch_machine() {

}

function switch_real() {

}

window.onload = loadSize();
window.addEventListener("resize",handleResize,false);

document.getElementById("mapconsole").addEventListener('dblclick', doubleClick,false);
document.addEventListener("mousedown",handleMouseDown,false);
document.addEventListener("mouseup",handleMouseUp,false);
document.addEventListener("mousemove",handleMouseMove,false);