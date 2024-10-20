import React from 'react';
import ReactQuill from 'react-quill';
import { Container } from './Editor.styles'; // 스타일 파일 불러오기
import 'react-quill/dist/quill.snow.css'; // Quill 스타일 불러오기

interface EditorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  color: string;
}

const Editor = ({ color, value, setValue }: EditorProps) => {
  console.log('Editor는 돌아감.'); // 로그 확인용

  return (
    <Container noteColor={color}>
      <ReactQuill
        value={value}
        onChange={setValue}
        theme="snow"
      />
    </Container>
  );
};

export default Editor;