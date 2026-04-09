let username;
let freezeCount = false;

let count = 0;

document.getElementById("increaseCount").onclick = function(){
    if (!freezeCount) count ++;
    document.getElementById("myH1").textContent = `Count: ${count}`
}

document.getElementById("freezeCount").onclick = function(){
    freezeCount = !freezeCount;
    if (document.getElementById("freezeCount").textContent === "unfreeze count")
        document.getElementById("freezeCount").textContent = "freeze count"
    else document.getElementById("freezeCount").textContent = "unfreeze count"
}

document.getElementById("decreaseCount").onclick = function(){
    if (!freezeCount) count --;
    document.getElementById("myH1").textContent = `Count: ${count}`
}

// accountability partner

