document.querySelector('.btn').addEventListener('click',()=>{
    
    
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let previousBtn = document.querySelector('.prvbtn');
    let nextBtn = document.querySelector('.newbtn');
    document.querySelector('.mnth').innerHTML = `${monthsList[currentMonth]}-${currentYear}`;

    // document.querySelector('.calender').style.display = 'block';
    document.querySelector('.mnth').appendChild(previousBtn)
    document.querySelector('.mnth').appendChild(nextBtn)
    previousBtn.addEventListener('click', () => {
        changeMonth(-1);
    });

    nextBtn.addEventListener('click', () => {   
        changeMonth(1);
    });

    function changeMonth(delta) {
        currentMonth += delta;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        } else if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        createMonth(currentYear, currentMonth);
    }

    function createMonth(year, month) {
        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = 32 - new Date(year, month, 32).getDate();
        let dayList = document.querySelector('.daylist');
        let previousBtn = document.querySelector('.prvbtn');
        let nextBtn = document.querySelector('.newbtn');
        
        document.querySelector('.mnth').textContent = `${currentYear} - ${monthsList[currentMonth]}`;
        document.querySelector('.mnth').appendChild(previousBtn)
        document.querySelector('.mnth').appendChild(nextBtn)
        dayList.innerHTML = '';
        let today = new Date().getDate();
        let thisMonth = new Date().getMonth();
        let thisYear = new Date().getFullYear();

        for (let i = 0; i < firstDay; i++) {
            let li = document.createElement('li');
            dayList.appendChild(li);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            let li = document.createElement('li');
            li.textContent = i;
            if (i === today && thisMonth === month && thisYear === year) {
                li.className = 'first';
                console.log('ll');
            }
            dayList.appendChild(li);
        }
    }
    createMonth(currentYear, currentMonth);
})
document.querySelector('.btn1').addEventListener('click', () => {
    let text = document.querySelector('.inp').value;
    let container = document.querySelector(".add-container");
    let newField = document.createElement('div');

    const radioButton = document.createElement('input');
    radioButton.type = 'checkbox';
    radioButton.name = 'dynamicCheckbox';
    radioButton.className = 'Radio-b';

    let label = document.createElement('label');
    label.textContent = text;
    label.className = 'Radio-la';

    newField.className = 'Newf';
    newField.appendChild(radioButton);
    newField.appendChild(label);

    let cross = document.createElement('button');
    cross.innerHTML = 'X';
    cross.className = 'Cross';
    newField.appendChild(cross);
    container.appendChild(newField);
    container.style.display = 'block';
    container.style.marginBottom = '10px';
    document.querySelector(".inp").value = '';

    cross.addEventListener('click', () => {
        newField.remove();
    });
});
