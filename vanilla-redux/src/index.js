import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;


const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    console.log(count)
    return count+1;
  } else if (action.type === "MINUS") {
    console.log(count)
    return count-1;
  } else {
    return count;
  }
};

const countStore = legacy_createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);


const handleAdd = () => {
  countStore.dispatch({type: "ADD"});
};

const handleMinus = () => {
  countStore.dispatch({type: "MINUS"});
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);



/* 
흐름 알기
store는 상태관리를 할 수 있는 공간
Modifier는 상태를 변화시킬 수 있는 유일한 방법
dispatch에 액션을 주면 리덕스가 Modifier를 부름 -> 
Modifier에서 dispatch로 주어진 액션을 통해 상태를 변화시킴

*/




// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count += 1;
//   updateText();
//   console.log(number)
// };

// const handleMinus = () => {
//   count -= 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);