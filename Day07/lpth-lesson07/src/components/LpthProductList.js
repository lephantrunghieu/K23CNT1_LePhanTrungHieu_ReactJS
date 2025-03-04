import React, { useState } from "react";

const LpthProductList = () => {
    // Dữ liệu ban đầu với tiền tố "lpth"
    const initialState = [
        { lpthProductId: "P001", lpthProductName: "IPhone11", lpthQuantity: 15, lpthPrice: 1000 },
        { lpthProductId: "P002", lpthProductName: "IPhone12", lpthQuantity: 20, lpthPrice: 1250 },
        { lpthProductId: "P003", lpthProductName: "IPhone13", lpthQuantity: 10, lpthPrice: 1500 },
        { lpthProductId: "P004", lpthProductName: "IPhone14", lpthQuantity: 15, lpthPrice: 2000 },
    ];

    // State lưu trữ danh sách sản phẩm
    const [lpthProducts, setLpthProducts] = useState(initialState);

    return (
        <div>
            <h2>Danh sách sản phẩm (Lpth)</h2>
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Lpth ID</th>
                        <th>Lpth Tên sản phẩm</th>
                        <th>Lpth Số lượng</th>
                        <th>Lpth Giá</th>
                    </tr>
                </thead>
                <tbody>
                    {lpthProducts.map((lpthProduct, index) => (
                        <tr key={index}>
                            <td>{lpthProduct.lpthProductId}</td>
                            <td>{lpthProduct.lpthProductName}</td>
                            <td>{lpthProduct.lpthQuantity}</td>
                            <td>${lpthProduct.lpthPrice.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LpthProductList;