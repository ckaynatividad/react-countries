import { checkError, client } from './client';

export async function getFlags() {
  const response = await client.from('countries').select();
  return checkError(response);
}