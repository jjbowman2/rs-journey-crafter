import { renderHook } from "@testing-library/react-hooks";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import useAccounts from "./use-accounts";

describe("useAccounts", () => {
    it("should render successfully", () => {
        const queryClient = new QueryClient();
        const wrapper = ({ children }: { children: ReactNode }) => (
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        );
        const { result } = renderHook(() => useAccounts(""), { wrapper });

        expect(result.current).toBeTruthy();
    });
});
