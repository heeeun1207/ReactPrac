//* lib 프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수들을 보통 src/lib 디렉터리에 작성
import { useState, useEffect } from "react";

//* 의존배열 deps를 파라미터로 받는다. 
export default function usePromise(promiseCreator, deps) {
  // 대기 중/완료/실패에 대한 상태관리 지정하기
  const [loading, setLoading] = useState(false);
  const [resolve, setResolve] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process =async ()=> {
      setLoading(true);
      try {
        const resolve = await promiseCreator();
        setResolve(resolve);
      }catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },deps);
    //* 빠른수정으로 EsLint 비활성화 
    return[loading, resolve, error];
}
