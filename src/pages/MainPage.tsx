import React, { useState, useEffect } from 'react';
import EditorModal from '../components/Modal/EditorModal/EditorModal';

interface MainPageProps {
  goToMain: () => void;
}

const MainPage: React.FC<MainPageProps> = ({ goToMain }) => {
  const [isWriting, setIsWriting] = useState(false); // 글쓰기
  const [text, setText] = useState(''); // 작성한 텍스트 저장용
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  useEffect(() => {
    console.log('isWriting 상태:', isWriting);
  }, [isWriting]);

  const handleOpenModal = () => {
    setIsModalOpen(true);  // 모달 열기
    setIsWriting(true);    // 글쓰기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setIsWriting(false);   // 글쓰기 종료
  };

  return (
    <div>
      <main>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <button
            style={{ width: '200px', height: '200px' }}
            onClick={handleOpenModal}  // 모달 열기
          >
            + Create
          </button>
          <div style={{ width: '200px', height: '200px', backgroundColor: 'beige', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            바뀐 폰트 확인용 박스
          </div>
        </div>
        {isModalOpen && (  // 모달이 열리면 에디터
          <EditorModal
            value={text}
            setValue={setText}
            onClose={handleCloseModal}  // 모달 닫기
          />
        )}
      </main>
    </div>
  );
};

export default MainPage;
