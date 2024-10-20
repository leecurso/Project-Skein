import dayjs from 'dayjs';
import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { toggleCreateNoteModal } from '../../../store/modal/modalSlice';
import { setEditNote, setMainNotes } from '../../../store/notesList/notesListSlice';
import { ButtonFill } from '../../../styles/styles';
import { ButtonOutline } from '../../../styles/styles';
import { Note } from '../../../types/note';
import Editor from '../../../Editor/Editor';
import { DeleteBox, FixedContainer } from '../Modal.styles';
import { Box, OptionsBox, StyledInput, TopBox } from './EditorModal.styles';

// 인터페이스 정의 추가: EditorModal에 필요한 props 타입 정의
interface EditorModalProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
}

const EditorModal: React.FC<EditorModalProps> = ({ value, setValue, onClose }) => {
  const dispatch = useAppDispatch();

  const { editNote } = useAppSelector((state) => state.notesList);

  const [noteTitle, setNoteTitle] = useState(editNote?.title || "");
  const [noteColor, setNoteColor] = useState(editNote?.color || "");
  const [priority, setPriority] = useState(editNote?.priority || "low");

  const closeCreateNoteModal = () => {
    dispatch(toggleCreateNoteModal(false));
    dispatch(setEditNote(null));
    onClose(); // 외부에서 전달받은 onClose 함수 호출
  };

  const createNoteHandler = () => {
    if (!noteTitle) {
      toast.error('제목을 적어주세요.');
      return;
    } else if (value === "<p><br></p>") {
      toast.error('내용을 작성해주세요.');
      return;
    }

    const date = dayjs().format("DD/MM/YY h:mm A");

    let note: Partial<Note> = {
      title: noteTitle,
      content: value,
      color: noteColor,
      priority,
      editedTime: new Date().getTime(),
    };

    if (editNote) {
      note = { ...editNote, ...note };
    } else {
      note = {
        ...note,
        date,
        createdTime: new Date().getTime(),
        editedTime: null,
        isPinned: false,
        isRead: false,
        id: uuidv4(),
      };
    }

    dispatch(setMainNotes(note));
    dispatch(toggleCreateNoteModal(false));
    dispatch(setEditNote(null));
    onClose(); // 모달을 닫는 외부 함수 호출
  };

  return (
    <FixedContainer>
      <Box>
        <TopBox>
          <div className="createNote_title">Create a new one!</div>
          <DeleteBox
            className="createNote__close-btn"
            onClick={closeCreateNoteModal}
          >
            <FaTimes />
          </DeleteBox>
        </TopBox>

        <StyledInput
          type="text"
          value={noteTitle}
          name="title"
          placeholder="제목..."
          onChange={(e) => setNoteTitle(e.target.value)}
        />

        <div>
          <Editor color={noteColor} value={value} setValue={setValue} />
        </div>

        <div className="createNote__create-btn">
          <ButtonFill onClick={createNoteHandler}>
          {editNote ? <span> Save </span> : <span> Create </span>}
          </ButtonFill>
        </div>
      </Box>
    </FixedContainer>
  );
};

export default EditorModal;
