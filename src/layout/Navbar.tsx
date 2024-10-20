import React from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate import
import { NavbarContainer, Logo, LogoutButton } from './Navbar.styles'; // 스타일 import

interface NavbarProps {
  goToMain: () => void;  // 홈으로 이동
}

const Navbar: React.FC<NavbarProps> = ({ goToMain }) => {
  const navigate = useNavigate();  // useNavigate 훅 사용

  const handleLogout = () => {
    // 로그아웃 처리 후 로그인 페이지로 이동
    console.log('로그아웃 되었습니다.');
    navigate('/');  // 로그인 페이지로 이동
  };

  return (
    <NavbarContainer>
      <Logo onClick={goToMain}>
        Skein
      </Logo>

      <LogoutButton onClick={handleLogout}>
        LogOut
      </LogoutButton>
    </NavbarContainer>
  );
};

export default Navbar;
