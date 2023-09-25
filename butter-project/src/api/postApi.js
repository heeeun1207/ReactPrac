// src/api/auth.js
let authToken = null; // 토큰을 저장할 변수

// 토큰 저장 함수
export const saveToken = (token) => {
  authToken = token;
};

// 토큰 가져오기 함수
export const getToken = () => {
  return authToken;
};
