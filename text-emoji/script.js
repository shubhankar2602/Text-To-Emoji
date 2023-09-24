var clutter = ""


function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click",function(){
        //getting input
        var input = document.getElementById("txtmsg").value
        console.log(input)

        //getting password
        var password = document.getElementById("password").value
        console.log(password)

        const str = input.split("")
        console.log(str)

        str.forEach(element => {
            clutter+=`&#128${element.charCodeAt()} `
        });

        console.log(clutter)

        document.querySelector("#result").innerHTML = clutter

        var dataArr = []

        if(JSON.parse(localStorage.getItem('data1'))){
            dataArr = JSON.parse(localStorage.getItem('data1'))
            dataArr.push({"pass":password,"input":input,"clutter":clutter})
        }
        else{
            dataArr = [{"pass":password,"input":input,"clutter":clutter}]
        }
        
        localStorage.setItem('data1',JSON.stringify(dataArr))
        localStorage.clear()

    })
}
encryption()



function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click",function(){
        var clutter2 = ""
        var input2 = document.getElementById("emojimsg").value
        console.log(input2)
        var password2 = document.getElementById("finalpassword").value
        console.log(password2)

        var user = JSON.parse(localStorage.getItem('data1'))
        // console.log(user)

        var str2 = input2.split(" ")
        str2.forEach(element => {
            clutter2+=`&#${element.codePointAt(0)} `
        })
        console.log(clutter2)

        var found
        for(let i of user){
            if(i.clutter == clutter2){
                found = i
                console.log(i)
            }
        }
        if(found.clutter == clutter2){
            document.querySelector("#result").style.display = "block"
            document.querySelector("#result").style.backgroundColor = "#1c1c1c"
            document.querySelector("#result").innerHTML = found.input
        }
        else{
            document.querySelector("#result").innerHTML = "NO INFO FOUND"
        }
    })
}

decryption()

function btnclick(){
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display="block"
        document.querySelector("#encryption").style.display="none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1>span>img").style.rotate = "270deg"
        document.querySelector("#result").style.display = "none"

    })
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display="block"
        document.querySelector("#decryption").style.display="none"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#main>h1>span>img").style.rotate = "90deg"
        document.querySelector("#result").style.display = "none"

    })


    document.querySelector("#encrypt-btn").addEventListener("click",function(){
        document.querySelector("#result").style.display = "block"
    })
    document.querySelector("#decrypt-btn").addEventListener("click",function(){
        document.querySelector("#result").style.display = "block"
    })
}

btnclick()




// localStorage.clear()





























/*
// this is the part for the local storage

// localStorage.clear()

// localStorage.setItem("username","shubhankar")
// localStorage.setItem("age","19")

// var a = localStorage.getItem("username")

// console.log(a)

localStorage.clear()

var arr = ["Shubhakar",3,true,'S']

console.log(arr)
localStorage.setItem('array',JSON.stringify(arr))

console.log(JSON.parse(localStorage.getItem('array')))
*/