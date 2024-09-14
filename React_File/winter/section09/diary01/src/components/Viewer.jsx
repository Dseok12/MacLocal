import { getEmotionImages } from '../util/get-emotion-image';
import './Viewer.css';
const Viewer = () => {
  return (
    <>
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div>
          <img src={getEmotionImages(emotionId)} alt="" />
        </div>
      </section>
      <section className="content_section"></section>
    </>
  );
};

export default Viewer;
