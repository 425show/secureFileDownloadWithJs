const msalConfig = {
    auth: {
        clientId: "2c4fac8c-987f-480a-a192-8714dbfa0e6f",
        authority: "https://login.microsoftonline.com/b55f0c51-61a7-45c3-84df-33569b247796",
        redirectUri: "http://localhost:3000/",
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case msal.LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case msal.LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case msal.LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case msal.LogLevel.Warning:		
                        console.warn(message);		
                        return;		
                }	
            }	
        }	
    }
};

const loginRequest = {
    scopes: ["User.Read"]
};

const tokenRequest = {
    scopes: ["Mail.Read"], //update this with your API scope
    forceRefresh: false
};

const apiUrl = "https://localhost:5001";