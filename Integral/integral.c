#include <stdio.h>

int main(void) {
  /*Definindo o intevalo */  
  int a=0,b=10;
  /*Definindo a variavel funcãof(x)=x*/
  float x;
  /*Definindo tamanho da base*/
  float base=0.1;
  /*Definindo a soma de Riemann*/
  float soma;
  /*Declarando o contador*/
  float i;
  for(i=0;i<10;i=i+0.1){
    soma=soma+base*i;
  }
printf("%f\n",soma);
  return 0;
}