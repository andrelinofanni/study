lado1 = 10
lado2 = 10
lado3 = 10

somalado = lado1 + lado2 + lado3


tipotri = ""

console.log("O tamanho do triangulo é: ", somalado)

if (lado3 == lado2 && lado1 == lado2 && lado1 == lado3){
  tipotri ="equilatero"
}else if (lado3 == lado1 || lado3 == lado2 || lado1 == lado2){
  tipotri ="escaleno"
}else{
  tipotri ="isoceles"
}

switch(tipotri){
  case "equilatero":
    console.log("Os três lados são iguais")
    break;
  case "escaleno":
    console.log("Apenas dois lados são iguais")
    break;
  case "isoceles":
    console.log("Os três lados são diferentes")
    break;
}
  