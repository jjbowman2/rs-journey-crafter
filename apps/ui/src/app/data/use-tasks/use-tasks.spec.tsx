import { renderHook } from "@testing-library/react-hooks";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import useTasks from "./use-tasks";

describe("useTasks", () => {
    it("should render successfully", () => {
        const queryClient = new QueryClient();
        const wrapper = ({ children }: { children: ReactNode }) => (
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        );
        const { result } = renderHook(() => useTasks(0), { wrapper });

        expect(result.current).toBeTruthy();
    });
});
