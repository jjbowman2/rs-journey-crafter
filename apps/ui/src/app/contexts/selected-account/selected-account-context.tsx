import { Account } from "@prisma/client";
import { createContext } from "react";

interface SelectedAccount {
    selectedAccount: Account | undefined | null;
    setSelectedAccount: React.Dispatch<React.SetStateAction<Account | undefined | null>>;
}

const SelectedAccountContext = createContext<SelectedAccount>({
    selectedAccount: undefined,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setSelectedAccount: () => {},
});

export default SelectedAccountContext;
