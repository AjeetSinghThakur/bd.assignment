export const environment = {
  production: true,
  bundlesOutputPath: 'assets/i18n',
  eventApiUrl: 'https://localhost:5001/api/',
  openIdConnectSettings: {
    authority: 'https://localhost:5010/',
    client_id: 'globoticketimplicit',
    redirect_uri: 'https://localhost:4200/signin-oidc',
    scope: 'openid profile globoticket',
    response_type: 'id_token token',
    post_logout_redirect_uri: 'https://localhost:4200/',
    automaticSilentRenew: true,
    silent_redirect_uri: 'https://localhost:4200/redirect-silentrenew'
  }
};
