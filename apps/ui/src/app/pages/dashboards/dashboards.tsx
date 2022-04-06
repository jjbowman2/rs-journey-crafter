import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Container, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MyJourney from "./my-journey/my-journey";

export function Dashboards() {
    return (
        <Container maxW="container.md">
            <Tabs variant="line" align="center">
                <TabList>
                    <Tab>My Journey</Tab>
                    <Tab>Templates</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <MyJourney />
                    </TabPanel>
                    <TabPanel>I expect My Templates</TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}

export default withAuthenticationRequired(Dashboards);
