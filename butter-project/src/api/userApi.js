import { BASE_URL } from '../utils/config'
import { getToken } from './auth'; // JWT 토큰 관리 함수

// 회원 가입 API 호출
export const signUp = async (userData) => {
  try {
    const token = getToken(); // JWT 토큰 가져오기
    const response = await fetch(`${BASE_URL}/api/v1/assignment/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // 토큰을 헤더에 추가
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('회원 가입에 실패했습니다.');
    }
  } catch (error) {
    throw new Error(`API 호출 오류: ${error.message}`);
  }
};
