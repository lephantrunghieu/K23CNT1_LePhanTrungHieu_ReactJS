import { useTheme } from "../Context/LpthContextTheme"; // Kiểm tra lại đúng đường dẫn

export default function LpthThemeToggle() {
  const { theme, toggleTheme } = useTheme(); // Nhận theme và toggleTheme từ context

  return (
    <button onClick={toggleTheme}>
      Chuyển sang {theme === "light" ? "Tối" : "Sáng"}
    </button>
  );
}
