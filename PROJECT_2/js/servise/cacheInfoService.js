var cachedInfoStorage = {}
var wasInitialized = false


function Initialization(){
    ReadLocalStorage()
    ScheduleAllCheckInfo()
    wasInitialized = true
}

function GetTimeToLive(infoObject){
    var currentTimestamp = Date.now()
    var updateTimestamp = infoObject.timestamp
    var timeToLive = 120000 - (currentTimestamp - updateTimestamp)
    return timeToLive
}

function ScheduleCheckInfo(infoObject){
    console.log(`ScheduleCheckInfo(${infoObject.id}) timeToLive: ${GetTimeToLive(infoObject) / 1000}`)
    setTimeout(CheckCachedInfo, GetTimeToLive(infoObject), infoObject.id)
}

function ScheduleAllCheckInfo(){
    for(cachedInfo in cachedInfoStorage){
        ScheduleCheckInfo(cachedInfoStorage[cachedInfo])
    }
}

function ReadLocalStorage(){
    if(localStorage.cachedInfoStorage)
        cachedInfoStorage = JSON.parse(localStorage.getItem("cachedInfoStorage"));
}

function UpdateLocalStorage(){
    localStorage.setItem("cachedInfoStorage", JSON.stringify(cachedInfoStorage));
}

function FindCachedInfo(id){
    if (cachedInfoStorage[id] == null){
        return null
    }
    else {
        return cachedInfoStorage[id]
    }
}

async function FetchInfoFromAPI(id){
    const searchUrl = `https://api.coingecko.com/api/v3/coins/${id}`;
    let response = await fetch(searchUrl, {
        method: "GET",
    });
    var fetchedObject = await response.json();
    fetchedObject.timestamp = Date.now()
    UpdateInfo(fetchedObject)
    ScheduleCheckInfo(fetchedObject)
    return fetchedObject
}

function UpdateInfo(infoObject){
    cachedInfoStorage[infoObject.id] = infoObject
    UpdateLocalStorage()
}

function DeleteInfo(infoObject){
    console.log(`DeleteInfo(${infoObject.id}) timeToLive: ${GetTimeToLive(infoObject) / 1000}`)
    delete cachedInfoStorage[infoObject.id]
    UpdateLocalStorage()
}

function IsCacheExpired(infoObject){
    if (GetTimeToLive(infoObject) < 0)
        return true
    else
        return false
}

function CheckCachedInfo(id){
    var cachedInfo = FindCachedInfo(id)
    if (cachedInfo != null && IsCacheExpired(cachedInfo)) {
        DeleteInfo(cachedInfo)
    }
}

// MAIN FUNCTION
function GetInfo(id){
    if (!wasInitialized)
        Initialization()
    
    var cachedInfo = FindCachedInfo(id)
    if (cachedInfo === null || IsCacheExpired(cachedInfo)) {
        console.log(`GetInfo(${id}) fetching object`)
        cachedInfo = FetchInfoFromAPI(id)
    }
    else {
        console.log(`GetInfo(${id}) return cached object, timeToLive: ${GetTimeToLive(cachedInfo) / 1000}`)
    }
    return cachedInfo;
}