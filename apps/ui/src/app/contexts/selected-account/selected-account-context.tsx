import { Account } from "../../data/use-accounts/use-accounts";
import { createContext } from "react";

interface SelectedAccount {
    selectedAccount?: Account;
    setSelectedAccount: React.Dispatch<React.SetStateAction<Account | undefined>>;
}

const SelectedAccountContext = createContext<SelectedAccount>({
    selectedAccount: undefined,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setSelectedAccount: () => {},
});

export default SelectedAccountContext;
