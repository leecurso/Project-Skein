import styled from 'styled-components';

// 네비게이션 바 스타일
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between; // 좌우 정렬
  align-items: center;
  padding: 10px 20px;
  background-color: #B3907A;
  color: #fff;
  position: fixed;  // 상단 고정
  top: 0;
  left: 0;
  width: 100%;  // 화면 전체 너비
  z-index: 1000;  // 다른 요소들 위에 표시
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);  // 그림자 효과
`;

// 로고 스타일
export const Logo = styled.h1`
  cursor: pointer;
  font-size: 24px;
  color: #F5F5EB
  }
`;

// 로그아웃 버튼
export const LogoutButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    color: #B3907A;
    background-color: #F5F5EB;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #E1DACA;
        }

`;