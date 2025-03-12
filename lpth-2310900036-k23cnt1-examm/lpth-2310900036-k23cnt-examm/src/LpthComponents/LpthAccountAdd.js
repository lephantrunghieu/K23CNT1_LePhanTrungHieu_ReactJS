import { useState } from "react";

function LpthAccountAdd(props) {
  const [lpth_id, setLpth_id] = useState("");
  const [lpth_name, setLpth_name] = useState("");
  const [lpth_email, setLpth_email] = useState("");
  const [lpth_amount, setLpth_amount] = useState("");

  const LpthHandleSubmit = (e) => {
    e.preventDefault();
    if (!lpth_id || !lpth_name || !lpth_email || !lpth_amount) return;

    // Gọi hàm addAccount từ props
    props.lpth_addAccount({
      lpth_id,
      lpth_name,
      lpth_email,
      lpth_amount: Number(lpth_amount),
    });

    // Reset form
    setLpth_id("");
    setLpth_name("");
    setLpth_email("");
    setLpth_amount("");
  };

  return (
    <form onSubmit={LpthHandleSubmit}>
      <div className="mb-3">
        <label htmlFor="lpth_id" className="form-label">
          ID
        </label>
        <input
          type="text"
          id="lpth_id"
          className="form-control"
          placeholder="Nhập ID"
          value={lpth_id}
          onChange={(e) => setLpth_id(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lpth_name" className="form-label">
          Họ tên
        </label>
        <input
          type="text"
          id="lpth_name"
          className="form-control"
          placeholder="Nhập họ tên"
          value={lpth_name}
          onChange={(e) => setLpth_name(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lpth_email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="lpth_email"
          className="form-control"
          placeholder="Nhập email"
          value={lpth_email}
          onChange={(e) => setLpth_email(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lpth_amount" className="form-label">
          Số dư
        </label>
        <input
          type="number"
          id="lpth_amount"
          className="form-control"
          placeholder="Nhập số dư"
          value={lpth_amount}
          onChange={(e) => setLpth_amount(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Thêm
      </button>
    </form>
  );
}

export default LpthAccountAdd;
