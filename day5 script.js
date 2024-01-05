// 1)

const resume = {
    "name": "Gangatharan",
    "contact":{
        "email": "gangatharankbcitgamil.com",
        "phone": "9361290773",
        "adress": "2/16 chellam nagar"
    },
    "education": [
        {
            "degree": "BScit",
            "school": "nanjappa municipal higer secondary school",
            "gradutionYear": 2019
        }
    ],
};
console.log(JSON.stringify(resume));

//  2)


// for loop

for (let key in resume){
    if (resume.hasOwnProperty(key)){
        console.log(`${key}: ${resume[key]}`);
    }
}


// for in loop

for (let key in resume) {
    if(resume.hasOwnProperty(key)){
        console.log(`${key}: ${resume[key]}`);
    }
}

// for of loop

for (let value of Object.values(resume)){
    console.log(value)
}

// for each loop
Object.values(resume).forEach(value => {
    console.log(value)
});
