import { emotionList } from "../util/constants.js";
import { getEmotionImages } from "../util/get-emotion-image.js";
import "./Viewer.css";

const Viewer = ({ emotionId, content }) => {
  const emtionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImages(emotionId)} alt="" />
          <div>{emtionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrap">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
