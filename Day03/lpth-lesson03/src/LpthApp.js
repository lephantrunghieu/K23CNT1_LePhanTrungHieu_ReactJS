import LpthClassComp from "./Components/LpthClassComp";
import LpthFuncComp from "./Components/LpthFuncComp";
import LpthJsxExpression from "./Components/LpthJsxExpression";

function LpthApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1> React JS Lesson03 - Lê Phan Trung Hiếu</h1>
      <LpthJsxExpression/>

      <hr/>

      {/* Su dung function component  */}

      <LpthFuncComp/>

      <hr/>
      {/* Su dung class components  */}

      <LpthClassComp/>
    </div>
  );
}

export default LpthApp;
