document.addEventListener("DOMContentLoaded", ()=>{
    let opciones = document.querySelector("#nav__ul")
    let permiso = true
    let permiso1 = true
    let permiso2 = true
    let permisoone = true
    let permisotwo = true
    let permisothree = true
    let caca3 = true
            // Nav en versión movil
            let logoContainer = document.createElement("li")
            logoContainer.classList.add("nav__ul-li")
            logoContainer.classList.add("nav__ul-li1")
            let logoEnlace = document.createElement("a")
            logoEnlace.classList.add("nav__ul-li-a")
            logoEnlace.classList.add("logo")
            logoEnlace.href = "#header"
            let logoImg = document.createElement("img")
            logoImg.setAttribute("src", "./img/logo5.png")
            logoImg.setAttribute("alt", "Logo Ronaldo")
            logoContainer.appendChild(logoEnlace)
            logoEnlace.appendChild(logoImg)

            let menuContainer = document.createElement("li")
            menuContainer.classList.add("nav__ul-li")
            menuContainer.classList.add("nav__ul-li2")
            let barra = document.createElement("i")
            barra.classList.add("fa-solid")
            barra.classList.add("fa-bars")
            menuContainer.appendChild(barra)

    // Carrusel de imágenes
        let fondos = ["fondo0","fondo1", "fondo2"]
        let fondo = document.getElementById("fondo0")
            function carrusel (){

                let contador = 0
                
                setInterval(()=>{
                    contador += 1
                    fondo.classList.remove(fondos[contador-1])
                    if (contador === fondos.length){
                        contador = 0
                    }
                    fondo.classList.add(fondos[contador])
                },6000)
            }


            //Menú de hamburguesa
            
            let oculto = document.querySelector("#menuO")
            let header1 = document.querySelector("#header")
            document.addEventListener("mousedown", (e)=>{
                if (e.target === barra){
                    oculto.classList.toggle("nav__oculto-visible")
                    header1.classList.toggle("header1")
                    header1.classList.toggle("header")

                }
            })


        let mtm = matchMedia(`(max-width: 800px)`)
        if (mtm.matches === true){
            opciones.appendChild(logoContainer)
    
            opciones.appendChild(menuContainer)
        }
        else {
            // Nav en versión de escritorio
            for (let i = 0; i <= 5; i++){
                let container = document.createElement("li")
                let enlace = document.createElement("a")
                enlace.classList.add("nav__ul-li-a")
                container.appendChild(enlace)
                container.classList.add("nav__ul-li")
                opciones.appendChild(container)
                
            }
            opciones.children[2].insertAdjacentElement("afterend", logoContainer)
            opciones.children[0].children[0].textContent = "Inicio"
            opciones.children[0].children[0].href = "#header"
            opciones.children[1].children[0].textContent = "Sobre mi"
            opciones.children[1].children[0].href = "#section1"
            opciones.children[2].children[0].textContent = "Experiencia"
            opciones.children[2].children[0].href = "#section2"
            opciones.children[4].children[0].textContent = "Trabajos"
            opciones.children[4].children[0].href = "#section3"
            opciones.children[5].children[0].textContent = "Sobre mi trabajo"
            opciones.children[5].children[0].href = "#section4"
            opciones.children[6].children[0].textContent = "Contacto"
            opciones.children[6].children[0].href = "#contact_form_container"
        }
        let switch1 = 0
        let switch2 = 2
        let switch3 = 4
        let switch4 = 5
        let switch5 = 6

        let mtm1 = matchMedia(`(max-width: 470px)`)
        let mtm2 = matchMedia(`(max-width: 680px)`)
        let mtm3 = matchMedia(`(min-width: 680px)`)
        
        let carrusel2 = document.querySelector("#section3__content")
        carrusel2.children[0].classList.add("card1")
        carrusel2.children[1].classList.add("card1")
        carrusel2.children[1].classList.add("card__oculto1")
        
        function carr2 (){
            
            carrusel2.children[1].classList.add("card1")
            carrusel2.children[1].classList.add("card__oculto1")
            carrusel2.children[2].classList.add("card__oculto1")
            carrusel2.children[2].classList.add("card1")
            carrusel2.children[3].classList.add("card__oculto1")
            carrusel2.children[3].classList.add("card1")
            carrusel2.children[4].classList.add("card2")
            carrusel2.children[5].classList.add("card__oculto2")
            carrusel2.children[5].classList.add("card2")
            carrusel2.children[6].classList.add("card__oculto2")
            carrusel2.children[6].classList.add("card2")
            carrusel2.children[7].classList.add("card__oculto2")
            carrusel2.children[7].classList.add("card2")
            
            
            let inter1 = setInterval(()=>{
                if (permiso === true){
                    
                switch1 += 1
                
                if (switch1 === 4){
                    switch1 = 0
                    for (let i = 1; i <= 3; i++){
                        carrusel2.children[i].classList.add("card__oculto1")
                    }  
                }
                carrusel2.children[switch1].classList.remove("card__oculto1")}
                
            },6000)
            let inter2 = setInterval(()=>{
                if (permiso === true){
                    
                switch3 += 1
                if (switch3 === 8){
                    switch3 = 4
                    for (let i = 5; i <= 7; i++){
                        carrusel2.children[i].classList.add("card__oculto2")
                    }  
                }
                carrusel2.children[switch3].classList.remove("card__oculto2")
            }  
            },5000)
            window.addEventListener("resize", (e)=>{
                if (mtm1.matches === false){
                    clearInterval(inter1)
                    clearInterval(inter2)
                }
            })
            
        }
        let inter31
        let inter32
        let inter33
        function carr3 (){
            carrusel2.children[1].classList.add("card1")
            carrusel2.children[1].classList.add("card__oculto1")
            carrusel2.children[2].classList.add("card2")
            carrusel2.children[3].classList.add("card2")
            carrusel2.children[3].classList.add("card__oculto2")
            carrusel2.children[4].classList.add("card2")
            carrusel2.children[4].classList.add("card__oculto2")
            carrusel2.children[5].classList.add("card3")
            carrusel2.children[6].classList.add("card3")
            carrusel2.children[6].classList.add("card__oculto3")
            carrusel2.children[7].classList.add("card3")
            carrusel2.children[7].classList.add("card__oculto3")
            
            let inter3 = setInterval(()=>{
                
                if (permiso1 === true){
                    switch1 += 1
                if (switch1 === 2){
                    switch1 = 0
                    carrusel2.children[1].classList.add("card__oculto1")
                }
                carrusel2.children[switch1].classList.remove("card__oculto1")
            }
            },3000) 
            
            let inter4= setInterval(()=>{
                if (permiso1 === true){
                switch2 += 1
                if (switch2 === 5){
                    switch2 = 2
                    carrusel2.children[3].classList.add("card__oculto2")
                    carrusel2.children[4].classList.add("card__oculto2")
                }
                carrusel2.children[switch2].classList.remove("card__oculto2")}
            },3000)
            let inter5 = setInterval(()=>{
                if (permiso1 === true){
                switch4 +=1
                if (switch4 === 8){
                    switch4 = 5
                    carrusel2.children[6].classList.add("card__oculto3")
                    carrusel2.children[7].classList.add("card__oculto3")
                }
                carrusel2.children[switch4].classList.remove("card__oculto3")}

            },3000)
            window.addEventListener("resize", (e)=>{
                if (mtm2.matches === false || mtm1.matches === true){
                    clearInterval(inter3)
                    clearInterval(inter4)
                    clearInterval(inter5)
                    
                }
            })
            
        }
      
        function carr4 (){
            carrusel2.children[1].classList.add("card1")
            carrusel2.children[1].classList.add("card__oculto1")
            carrusel2.children[2].classList.add("card2")
            carrusel2.children[3].classList.add("card2")
            carrusel2.children[3].classList.add("card__oculto2")
            carrusel2.children[4].classList.add("card3")
            carrusel2.children[5].classList.add("card3")
            carrusel2.children[5].classList.add("card__oculto3")
            carrusel2.children[6].classList.add("card4")
            carrusel2.children[7].classList.add("card4")
            carrusel2.children[7].classList.add("card__oculto4")

            let inter6 =setInterval(()=>{
                if (permiso2 === true){
                switch1 +=1
                if (switch1 === 2){
                    switch1 = 0
                    carrusel2.children[1].classList.add("card__oculto1")
                }
                carrusel2.children[switch1].classList.remove("card__oculto1")}
            },6000)
        
            let inter7 = setInterval(()=>{
                if (permiso2 === true){
                switch2 += 1
                if (switch2 === 4){
                    switch2 = 2
                    carrusel2.children[3].classList.add("card__oculto2") 
                }
                carrusel2.children[switch2].classList.remove("card__oculto2")}
            },6000)
            let inter8 =setInterval(()=>{
                if (permiso2 === true){
                switch3 +=1
                if (switch3 === 6){
                    switch3 = 4
                    carrusel2.children[5].classList.add("card__oculto3")
                }
                carrusel2.children[switch3].classList.remove("card__oculto3")}
            },6000)
            let inter9 =setInterval(()=>{
                if (permiso2 === true){
                switch5 += 1
                if (switch5 === 8){
                    switch5 = 6
                    carrusel2.children[7].classList.add("card__oculto4")
                }
                carrusel2.children[switch5].classList.remove("card__oculto4")}
            },6000)
            window.addEventListener("resize", (e)=>{
                if (mtm3.matches === false){
                    clearInterval(inter6)
                    clearInterval(inter7)
                    clearInterval(inter8)
                    clearInterval(inter9)
                    
                }
            })
        }

        function reset (){
            for (let i = 2; i <= carrusel2.children.length-1; i++){
                if (carrusel2.children[i].classList.contains("card2")=== true || carrusel2.children[i].classList.contains("card3")=== true ||carrusel2.children[i].classList.contains("card4")=== true){
                    
                    carrusel2.children[i].classList.remove("card2")
                    carrusel2.children[i].classList.remove("card3")
                    carrusel2.children[i].classList.remove("card4")
                }
                if (carrusel2.children[i].classList.contains("card__oculto1")=== true || carrusel2.children[i].classList.contains("card__oculto2")=== true || carrusel2.children[i].classList.contains("card__oculto3")=== true ||carrusel2.children[i].classList.contains("card__oculto4")=== true){
                    carrusel2.children[i].classList.remove("card__oculto1")
                    carrusel2.children[i].classList.remove("card__oculto2")
                    carrusel2.children[i].classList.remove("card__oculto3")
                    carrusel2.children[i].classList.remove("card__oculto4")
                }
            }
        }

        
        
        
        if (mtm1.matches === true){
            if (permisoone === true){
                carr2() 
                permisoone = false
            } 
                
        }
        
        if (mtm2.matches === true && mtm1.matches === false){
            if (permisotwo === true){
                carr3() 
                permisotwo = false
            } 
        }
        
        if (mtm3.matches === true){
            if (permisothree === true){ 
                carr4()
                permisothree = false
            } 

        }

        
        window.addEventListener("resize", (e)=>{
            permiso = false
            permiso1 = false
            permiso2 = false
            
            if (mtm.matches === true && opciones.children.length === 7){
                for (let i = opciones.children.length-1; i > -1; i--){
                    opciones.removeChild(opciones.children[i])
                    
                }
            opciones.appendChild(logoContainer)
            opciones.appendChild(menuContainer)  
            }
            
            else if (mtm.matches === false && opciones.children.length === 2){
                for (let i = opciones.children.length-1; i> -1; i--){
                    opciones.removeChild(opciones.children[i])
                }
                oculto.classList.remove("nav__oculto-visible")
                header1.classList.remove("header1")
                header1.classList.add("header")
                for (let i = 0; i <= 5; i++){
                    let container = document.createElement("li")
                    let enlace = document.createElement("a")
                    enlace.classList.add("nav__ul-li-a")
                    container.appendChild(enlace)
                    container.classList.add("nav__ul-li")
                    opciones.appendChild(container)
                    
                }
                opciones.children[2].insertAdjacentElement("afterend", logoContainer)
                opciones.children[0].children[0].textContent = "Inicio"
                opciones.children[1].children[0].textContent = "Sobre mi"
                opciones.children[2].children[0].textContent = "Galería"
                opciones.children[4].children[0].textContent = "Trabajos"
                opciones.children[5].children[0].textContent = "Artículos"
                opciones.children[6].children[0].textContent = "Contacto"
            }
            
            if (mtm1.matches === true){ 
                if (permisoone === true){
                    reset()
                    carr2()
                    permisoone = false
                    switch1 = 0
                    switch3 = 4
                }
                permiso = true      
            }   else{   
                    permisoone = true   
                    }

            if (mtm2.matches === true && mtm1.matches === false){      
                if (permisotwo === true){
                    reset()
                    carr3()
                    permisotwo = false
                    switch1 = 0
                    switch2 = 2
                    switch4 = 5
                } 
                permiso1 = true
            }   else  {
                    permisotwo = true  
                }

            if (mtm3.matches === true ){
                caca3 = true
                if (permisothree === true){
                        reset()
                        carr4()
                        permisothree = false
                        switch1 = 0
                        switch2 = 2
                        switch3 = 4
                        switch5 = 6
                }  
                permiso2 = true  
            }   else {
                    permisothree = true
                }         
        })    
carrusel()
})