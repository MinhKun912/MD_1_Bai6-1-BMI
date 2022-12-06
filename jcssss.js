function bmi(){
    let canNang=document.getElementById('cannang').value;
    let chieuCao=document.getElementById('chieucao').value;
    let Bim=canNang/(chieuCao**2);
 document.getElementById('dis').innerHTML = Bim;
 if (Bim<18){
        document.getElementById('ty').innerHTML='Underweight'
    }else  if(Bim<15){
        document.getElementById('ty').innerHTML='Normal'
    }else  if (Bim<30){
        document.getElementById('ty').innerHTML='Overweight'
    }else  {
        document.getElementById('ty').innerHTML='Obese'
    }
}
