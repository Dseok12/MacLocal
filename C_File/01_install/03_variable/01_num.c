#include <stdio.h>

int main (void) {

  int num1, num2; // 번수 num1, num2의 선언
  int num3=30, num4=40; // 변수 num3, num4의 선언 및 초기화

  printf("num1: %d, num2: %d \n", num1, num2);
  num1 = 10; // num1의 초기화
  num2 = 20; // num2의 초기화

  printf("num1: %d, num2: %d \n", num1, num2);
  printf("num3: %d, num4: %d \n", num3, num4);

  return 0;
}