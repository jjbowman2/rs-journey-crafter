import "@fontsource/inter";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./app/app";
import Auth0ProviderWithHistory from "./app/components/auth0-provider-with-history/auth0-provider-with-history";
import theme from "./theme";

const queryClient = new QueryClient();

ReactDOM.render(
	<StrictMode>
		<BrowserRouter>
			<Auth0ProviderWithHistory>
				<QueryClientProvider client={queryClient}>
					<ChakraProvider theme={theme}>
						<ColorModeScript initialColorMode={theme["config"].initialColorMode} />
						<App />
					</ChakraProvider>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</Auth0ProviderWithHistory>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById("root"),
);
