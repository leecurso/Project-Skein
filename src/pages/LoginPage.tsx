import { useNavigate } from 'react-router-dom';
import { Container, Form, Input, Button, WelcomeMessage } from '../styles/Loginpage.styles';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 나중에 서버구현 예정
    navigate('/main'); // 로그인 성공 시 메인 페이지로 이동
  };

  return (
    <Container>
      <WelcomeMessage>Welcome!</WelcomeMessage>
      <Form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button onClick={handleLogin}>Login</Button> {/* 로그인 버튼 */}
        <Button>Sign Up</Button> {/* 회원가입 버튼 */}
      </Form>
    </Container>
  );
};

export default LoginPage;
