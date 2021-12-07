import { checkError, client } from './client';

export async function getFlags() {
  const response = await client.from('flags').select();
  return checkError(response);
}