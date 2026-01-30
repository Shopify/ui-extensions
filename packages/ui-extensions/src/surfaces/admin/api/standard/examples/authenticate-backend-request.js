const {auth} = useApi(TARGET);

const token = await auth.idToken();

const response = await fetch('https://my-app.com/api/products', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

const products = await response.json();
