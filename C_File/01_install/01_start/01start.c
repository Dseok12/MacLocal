#include <stdio.h>

int main (viod) {
  // 싱글 쿼터는 안먹힌다.
  printf("hellow world!\n");

  // 숫자형 데이터 하나 받을 떄 마다 "%d" 선언 해주기
  // %d의 명칭은 서식문자(conversion specifier)라 한다
  printf("%d\n", 1234);
  printf("%d %d\n", 10, 20);

  // 함수가 하나 끝날 때 마다 return 0; 하나씩 작성해주기
  return 0;
}