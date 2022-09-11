#include <stdio.h>

int main (void) {

  char ch1='A', ch2=65;
  int ch3='Z', ch4=90;

  // %c의 서식문자는 문자의 형태로 데이터를 출력(또는 입력)하라. 라는 뜻.
  printf("%c %d\n", ch1, ch2);
  printf("%c %d\n", ch2, ch2);
  printf("%c %d\n", ch3, ch3);
  printf("%c %d\n", ch4, ch4);

  return 0;
}