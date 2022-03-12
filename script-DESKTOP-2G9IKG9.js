window.addEventListener('load', function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
        .then(function (response) {
            return response.json();
        }).then(function (response) {
            console.log(response);
            //push out each astronaut to the screen

            let myContainer = document.getElementById('container')
            for (let i = 0; i < response.length; i++) {

                let myHtml = `
                <div class="astronaut">
                    <div class="bio">
                        <h3> ${response[i].firstName} ${response[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${response[i].hoursInSpace}</li>
                             <li>Active: ${response[i].active}}</li>
                            <li>Skills: ${response[i].skills}</li>
                        </ul>
                    </div>
                     <img class="avatar" src="${response[i].picture}">
                 </div>
                `;
                
                myContainer.innerHTML += myHtml;

            }

        })

});




// window.addEventListener('load', function () {
//     fetch("https://handlers.education.launchcode.org/static/astronauts.json")
//         .then(function (response) {
//             response.json().then(function (json) {

//                 for (let i = 0; i < json.length; i++) {

//                     let skillsStr = json[i].skills.join(", ");
//                     let div = document.getElementById("container");
//                     div.innerHTML = `
//                 <div class="astronaut">
//                     <div class="bio">

// <div>
// <img class="avatar" src="${json[i].picture}">
// </div>

// <h3><li>${json[i].firstName} ${json[i].lastName}</li><h3/>
// <ul>
// <li>Hours in space: ${json[i].hoursInSpace}</li>
// <li>Active: ${json[i].active}</li>
// <li>skills: ${skillsStr}</li>
// </ul>
// `;
//                 };
//             });


//         });

// });