import React, { useState } from "react";

export default function LpthUseState() {
  // Tạo state count và hàm cập nhật state
  const [count, setCount] = useState(0);

  // Hàm xử lý sự kiện tăng giá trị count
  const lpthHandleTang = () => {
    setCount(count + 1);
  };

  // State là mảng (list)
  const danh_sach = [100, 120, 140, 100];
  // Khởi tạo state
  const [list, setList] = useState(danh_sach);

  // Hàm xử lý sự kiện thêm phần tử ngẫu nhiên
  const lpthHandleAddNewRandom = () => {
    setList((prev) => [...prev, parseInt(Math.random() * 100)]);
  };

  return (
    <div className="alert alert-info">
      <h2>Sử dụng useState</h2>
      <div>
        <b>Count: {count}</b>
        <button onClick={lpthHandleTang}>Tăng</button>
        <button onClick={() => setCount(count - 1)}>Giảm</button>
        <button onClick={() => setCount(0)}>Đặt lại</button>
      </div>
      <div>
        <h3>List: {list.toString()}</h3>
        <button onClick={lpthHandleAddNewRandom}>Thêm số ngẫu nhiên</button>
      </div>
    </div>
  );
}
