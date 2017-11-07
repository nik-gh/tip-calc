function calculateTip() {
    let billAmnt, serviceQlty, numPeople, total;
    
    billAmnt = document.getElementById("billAmnt").value;
    serviceQlty = document.getElementById("serviceQlty").value;
    numPeople = document.getElementById("totalPeople").value;
    
    if(billAmnt === "" || serviceQlty === 0) {
        alert("Enter values");
        return;
    }
    
    if(numPeople === "" || numPeople < 2) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    
    total = (billAmnt * serviceQlty) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
};