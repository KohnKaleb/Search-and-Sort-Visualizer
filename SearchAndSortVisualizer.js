function generateRandomList() {
    // let user choose length of list
    let chosenLength = 10;
    let list = [];
    let listDiv = document.getElementById("list");
    for (let i = 0; i < chosenLength; ++i) {
        let randomNum = Math.floor(Math.random() * 500);
        list.push(randomNum);
    }

    for (let i = 0; i < list.length; ++i) {
        listDiv.innerHTML += "<div id=" + i + ">" + list[i] + "</div>";
        let num = document.getElementById(i.toString());
        num.classList.add("nums");
        num.style.height = list[i].toString() + "px";
    }
}

window : onload = function() {
    generateRandomList();
}

async function selectionSort(delay = 100) {
    let nums = document.querySelectorAll(".nums");
    for (let i = 0; i < nums.length - 1; ++i) {
        let minIdx = i;
        nums[minIdx].style.backgroundColor = "red";
        for (let j = 1 + i; j < nums.length; ++j) {
            nums[j].style.backgroundColor = "green";
            
            /*
            https://www.geeksforgeeks.org/selection-sort-visualizer-in-javascript/
            use of promise statement copied
            */
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 100)
            );

            let valI = parseInt(nums[minIdx].innerHTML);
            let valJ = parseInt(nums[j].innerHTML);

            if (valJ < valI) {
                minIdx = j
            }
            nums[j].style.backgroundColor = "blue";
        }


        let tempHeight = nums[minIdx].style.height;
        let tempVal = nums[minIdx].innerHTML;
        nums[minIdx].style.height = nums[i].style.height;
        nums[minIdx].innerHTML = nums[i].innerHTML;
        nums[i].style.height = tempHeight;
        nums[i].innerHTML = tempVal;
        await new Promise((resolve) =>
            setTimeout(() => {
            resolve();
            }, 100)
        );
        
        nums[i].style.backgroundColor= "purple";
    }

    nums[nums.length - 1].style.backgroundColor = "purple";
}

async function insertionSort() {
    let nums = document.querySelectorAll(".nums")

    for (let i = 1; i < nums.length; ++i) {
        nums[i].style.backgroundColor = "red";
        let j = i - 1;
        let key = nums[i];
        while (j >= 0 && parseInt(nums[j].innerHTML) > parseInt(key.innerHTML)) {
            nums[j].style.backgroundColor = "green";

            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 100)
            );

            let tempHeight = nums[j + 1].style.height;
            let tempVal = nums[j + 1].innerHTML;
            nums[j + 1].style.height = nums[j].style.height;
            nums[j + 1].innerHTML = nums[j].innerHTML;
            nums[j].innerHTML = tempVal;
            nums[j].style.height = tempHeight;
            nums[j].style.backgroundColor = "blue";

            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 100)
            );

            key = nums[j]
            j = j - 1;
        }
        nums[i].style.backgroundColor = "blue";
    }
}
