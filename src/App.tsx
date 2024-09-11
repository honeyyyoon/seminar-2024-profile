import './App.css';

import honeyEmoji from './assets/honeyEmoji.png';
import profileImage from './assets/profileImage.jpg';

function App() {
  return (
    <div className="app-container">
      <div className="image-container">
        <a
          href="https://www.instagram.com/honeyyyyyoon/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={profileImage} className="profile-image" alt="Profile" />
        </a>
      </div>
      <div className="content-container">
        <a
          href="https://www.instagram.com/honeyyyyyoon/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={honeyEmoji} className="logo react" alt="React logo" />
        </a>
        <h1>|| 윤 시 헌 ||</h1>
        <ul className="info-list">
          <li> 자유전공학부 22학번 </li>
          <li> 컴퓨터공학과 경제학을 공부하고 있습니다 </li>
          <li> 춤과 음악과 영화를 좋아합니다! </li>
          <li> 이번 방학에 드럼을 배우기 시작했습니다 </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
