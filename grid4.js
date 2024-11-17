const sound = new Audio()
let bestRecords = JSON.parse(localStorage.getItem('bestRecords')) || [];

function storeLowestTime(timeUsed, percentage) {
    const minimumScore = 90.00;

    // Only store the time if the percentage is above the minimum score
    if (percentage >= minimumScore) {
        bestRecords.push(timeUsed);
        removeTime(-1)
        bestRecords.sort((a, b) => a - b);
        // Save the updated array to local storage
        if(bestRecords.length>5){
            bestRecords.pop()
        }
        localStorage.setItem('bestRecords', JSON.stringify(bestRecords));
    }

    displayBestTime();
}

function displayBestTime() {
    const timerElement = document.getElementById('timer-5');
    if (bestRecords.length > 0) {
        timerElement.innerText = `${bestRecords[0]}s`;
        console.log(`Displaying lowest time: ${bestRecords[0]}s`);
    } else {
        timerElement.innerText = 'No lowest time found';
        console.log('No lowest time found in localStorage');
    }
}

function removeTime(timeToRemove) {
    bestRecords = bestRecords.filter(time => time !== timeToRemove);
    localStorage.setItem('bestRecords', JSON.stringify(bestRecords));
}

// Initial display of the best time on page load
displayBestTime();
console.log(bestRecords);
window.onload = displayBestTime;

