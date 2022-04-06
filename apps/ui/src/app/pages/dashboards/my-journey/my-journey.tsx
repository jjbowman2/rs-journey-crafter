import { useContext } from "react";
import { Redirect } from "react-router-dom";
import SelectedAccountContext from "../../../contexts/selected-account/selected-account-context";
import useTasks from "../../../data/use-tasks/use-tasks";

export function MyJourney() {
    const { selectedAccount } = useContext(SelectedAccountContext);
    const accountId = Number(selectedAccount?.id);
    const { isError, isLoading, data } = useTasks(accountId);

    // if selectedAccount is null (as opposed to undefined) no accounts were found
    if (selectedAccount === null) {
        <Redirect to="/welcome" />;
    }

    // query is dependent on loading the selectedAccount, loading won't start unless selectedAccount is truthy
    if (isLoading || !selectedAccount) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>There was a problem loading your latest journey information.</p>;
    }

    if (data?.length === 0) {
        return <p>You don't have any tasks. Try adding some to get your journey started.</p>;
    }

    return <p>{JSON.stringify(data)}</p>;
}

export default MyJourney;
