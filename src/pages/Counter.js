import React, {useState, useEffect} from 'react';

const Counter = () => {
const [value, setValue] = useState(0);


// useEffect (()=>{
//     console.log('마운트될때')
// },[])

// useEffect (()=>{
//     console.log('value값이 바뀔때')
// },[value])

// useEffect (()=>{
//     console.log('다른 값들이 바뀔때마다 실행 뒤에 [] 삭제')
// })

useEffect(()=> {
    console.log('뒷정리 반환');
    return () => {
         console.log('cleanup')
    }   
})

const handleIncrease = e => {
    setValue(value + 1)
}   
const handleDecrease = e => {
    if(value === 0) return; 
    setValue(value - 1)
}
  return (
    <div>
       <p>현재 카운터 값 <b>{value}</b></p>
       <button type="button" onClick={handleIncrease}> 증가 </button>
       <button type="button" onClick={handleDecrease}> 감소 </button>
    </div>
  )
}

export default Counter;