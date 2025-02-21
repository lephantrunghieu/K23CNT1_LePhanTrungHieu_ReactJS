import logo from './logo.svg';
import './App.css';
import LpthClassComp from './components/LpthClassComp';
import LpthFuncComp from './components/LpthFuncComp';
import LpthFuncComp1 from './components/LpthFuncComp1';

function LpthApp() {
  //Object
  const users = {
    fullName:'Le Phan Trung Hieu',
    age:22,
    phone:"0866569267"
  }
  return (
    <div className="container border mt-3">
        <h1>Demo Component - Props - State </h1>
        <hr/>
        <div className='alert alert-danger'>
            <LpthClassComp name="Lê Hiếu" address="Yên Xá, Thanh Trì" company = "Thailand" />
            <hr/>
            <LpthFuncComp  name="Tú Minh Trần" address="Campuchia" company="otoke9" />
        </div>
        <div className='alert alert-info'>
          <LpthFuncComp1 renderInfo={users} />
        </div>
        <LpthClassComp />
        {/* chuyển dữ liệu từ TvcApp -> xuống TvcClassComp */}
        <LpthClassComp renderName="K23CNT1" renderUsers={users} />
    </div>
  );
}

export default LpthApp;
