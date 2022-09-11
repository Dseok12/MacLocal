#include <stdio.h>

int main (void) {

  int num1, num2, num3;
  int result;

  printf("뺄셈 앞 숫자: ");
  scanf("%d", &num1);

  printf("뺄셈 뒷 숫자: ");
  scanf("%d", &num2);

  printf("%d - %d = %d\n", num1, num2, num1-num2);

  printf("곱셈 앞 숫자: ");
  scanf("%d", &num1);

  printf("곱셈 뒷 숫자: ");
  scanf("%d", &num2);

  printf("%d X %d = %d\n", num1, num2, num1*num2);

  printf("세 개의 정수 입력: ");
  scanf("%d %d %d", &num1, &num2, &num3);
  result=num1*num2+num3;
  printf("%d X %d + %d = %d\n", num1, num2, num3, result);

  printf("제곱 수: ");
  scanf("%d", &num1);
  result=num1*num1;
  printf("%d의 제곱수는: %d\n", num1, result);

  printf("두 개의 정수 입력: ");
  scanf("%d %d", &num1, &num2);
  printf("몫은 %d, 나머지: %d \n", num1/num2, num1%num2);

  return 0;
}