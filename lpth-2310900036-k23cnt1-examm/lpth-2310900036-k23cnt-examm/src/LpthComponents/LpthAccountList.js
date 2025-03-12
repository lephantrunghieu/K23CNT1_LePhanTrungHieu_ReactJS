function LpthAccountList(props) {
    return (
      <div className="card">
        <div className="card-header bg-info text-white">
          <h4 className="mb-0">Danh sách tài khoản</h4>
        </div>
        <ul className="list-group list-group-flush">
          {props.lpth_accounts.map((account) => (
            <li key={account.lpth_id} className="list-group-item">
              <strong>ID:</strong> {account.lpth_id} <br />
              <strong>Tên:</strong> {account.lpth_name} <br />
              <strong>Email:</strong> {account.lpth_email} <br />
              <strong>Số dư:</strong> {account.lpth_amount}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default LpthAccountList;
  