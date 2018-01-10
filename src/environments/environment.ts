// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDi7WzDboa1iYTbk10KxK3wHnhX9DgncVE',
    authDomain: 'sweet-commerce.firebaseapp.com',
    databaseURL: 'https://sweet-commerce.firebaseio.com',
    projectId: 'sweet-commerce',
    storageBucket: '',
    messagingSenderId: '542054274215'
  }
};
