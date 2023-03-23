// Using  Call back hell 
var countdown = document.querySelector("#countdown") 
var A = 10;
setTimeout( ()=> { 
    console.log("countdown", A) 
    countdown.innerText = A ;
    A--;  
    setTimeout( ()=> { 
        console.log("countdown", A) 
        countdown.innerText = A ;
        A--;  
        setTimeout( ()=> { 
            console.log("countdown", A) 
            countdown.innerText = A ;
            A--;  
            setTimeout( ()=> { 
                console.log("countdown", A) 
                countdown.innerText = A ;
                A--;  
                setTimeout( ()=> { 
                    console.log("countdown", A) 
                    countdown.innerText = A ;
                    A--;  
                    setTimeout( ()=> { 
                        console.log("countdown", A) 
                        countdown.innerText = A ;
                        A--;  
                        setTimeout( ()=> { 
                            console.log("countdown", A) 
                            countdown.innerText = A ;
                            A--;  
                            setTimeout( ()=> { 
                                console.log("countdown", A) 
                                countdown.innerText = A ;
                                A--;  
                                setTimeout( ()=> { 
                                    console.log("countdown", A) 
                                    countdown.innerText = A ;
                                    A--;  
                                    setTimeout( ()=> { 
                                        console.log("countdown", A) 
                                        countdown.innerText = A ;
                                        A--;  
                                        setTimeout( ()=> { 
                                            console.log("result")
                                            countdown.innerText = "HAPPY INDEPENDENCE DAY";  
                                            countdown.style.color = "green";
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
