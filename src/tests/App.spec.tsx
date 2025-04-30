import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "../App";
describe("App 元件", () => {
    it("應該渲染出 Click me 按鈕", () => {
        render(<App />);
        // 驗證按鈕存在
        expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
        expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    });
});
