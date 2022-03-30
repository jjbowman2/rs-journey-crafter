import { act, renderHook } from "@testing-library/react-hooks";
import useAccounts from "./use-accounts";

describe("useAccounts", () => {
    it("should render successfully", () => {
        const { result } = renderHook(() => useAccounts());

        expect(result.current.count).toBe(0);

        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1);
    });
});
