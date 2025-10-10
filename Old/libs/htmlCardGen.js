export const cardGen = (name,age,stuclass,subjects=[]) =>{
    let sub = "";
    subjects?.forEach((ele)=>{
        sub += `<p>${ele}</p>`;
    });


    return`
<div class="card">
            <h1 class="name">${name}</h1>
            <div class="infor">
                <p>Age is : ${age}</p>
                <p>Class is : ${stuclass}</p>
            </div>
            <h3>Subjects</h3>
            <div class="subjects">
                ${sub}
            </div>
        </div>
        `;
    };
 

