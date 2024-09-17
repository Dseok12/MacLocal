import emo1 from "./../assets/emotion1.png";
import emo2 from "./../assets/emotion2.png";
import emo3 from "./../assets/emotion3.png";
import emo4 from "./../assets/emotion4.png";
import emo5 from "./../assets/emotion5.png";

export function getEmotionImages(emotionId) {
  switch (emotionId) {
    case 1:
      return emo1;
    case 2:
      return emo2;
    case 3:
      return emo3;
    case 4:
      return emo4;
    case 5:
      return emo5;
    default:
      return null;
  }
}
