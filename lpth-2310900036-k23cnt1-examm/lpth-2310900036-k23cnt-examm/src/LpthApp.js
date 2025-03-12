import { useState } from "react";
import LpthAccountList from './LpthComponents/LpthAccountList';
import LpthAccountAdd from './LpthComponents/LpthAccountAdd';

function Lpth_App() {
  const [lpth_accounts, setLpth_accounts] = useState([
    { lpth_id: "2310900036", lpth_name: "Lê Phan Trung Hiếu", lpth_email: "hieuvip13@example.com", lpth_amount: 1000 },
    { lpth_id: "3636363636", lpth_name: "Hiếu Phan Trung", lpth_email: "NguyenNamvan@example.com", lpth_amount: 1500 },
    { lpth_id: "636363636363", lpth_name: "Nam Văn Xe Thầy", lpth_email: "TranQuocAnh@example.com", lpth_amount: 2000 }
  ]);

  const lpth_addAccount = (lpth_newAccount) => {
    setLpth_accounts([...lpth_accounts, lpth_newAccount]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Quản lý tài khoản</h1>
      <div className="row">
        <div className="col-md-6">
          <LpthAccountAdd lpth_addAccount={lpth_addAccount} />
        </div>
        <div className="col-md-6">
          <LpthAccountList lpth_accounts={lpth_accounts} />
        </div>
      </div>
    </div>
  );
}

export default Lpth_App;