// Realice un programa para convertir fechas en texto a año.mes.dia

var fecha = "febrero 27, 2022 10:55 pm"

function cambiarFormato(data){
    // var indice = data.indexOf(" ")
    var arreglo = data.split(" ")
    var mes=arreglo[0]
    var diaMes=arreglo[1]
    var year=arreglo[2]
    var hora=arreglo[3]
    var jornada=arreglo[4]

    if(mes=="enero" || mes=="Enero"){
        mes="01"
    }else if(mes=="febrero" || mes=="Febrero"){
        mes="02"
    }else if(mes=="marzo" || mes=="Marzo"){
        mes="03"
    }else if(mes=="abril" || mes=="Abril"){
        mes="04"
    }else if(mes=="mayo" || mes=="Mayo"){
        mes="05"
    }else if(mes=="junio" || mes=="Junio"){
        mes="06"
    }else if(mes=="julio" || mes=="Julio"){
        mes="07"
    }else if(mes=="agosto" || mes=="Agosto"){
        mes="08"
    }else if(mes=="septiembre" || mes=="Septiembre"){
        mes="09"
    }else if(mes=="octubre" || mes=="Octubre"){
        mes="10"
    }else if(mes=="noviembre" || mes=="Noviembre"){
        mes="11"
    }else if(mes=="diciembre" || mes=="Diciembre"){
        mes="12"
    }

    console.log(`${year}.${mes}.${diaMes}${hora}${jornada}`)
}

cambiarFormato(fecha)
// new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
// console.log(fecha)