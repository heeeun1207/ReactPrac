
## backend 이용하기

```
fetch('http://localhost:9999/topics')
      .then((resp)=>{
          return resp.json();
      })
      .then(result=>{
          console.log('result', result);
      });
```
