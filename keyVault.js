import { SecretClient } from '@azure/keyvault-secrets';
import { DefaultAzureCredential } from '@azure/identity';
import dotenv from 'dotenv';
dotenv.config();

async function main() {
  const credential = new DefaultAzureCredential();
  const client = new SecretClient(process.env.VaultUrl, credential);

  // Read the secret we created
  const secretName = 'ApiKey';
  const secret = await client.getSecret(secretName);
  console.log('secret: ', secret.value);
}

main().catch((error) => {
  console.error('An error occurred:', error);
  process.exit(1);
});
