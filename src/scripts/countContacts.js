
import { readContacts } from '../utils/fileUtils.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('An error happened during the countContacts process:', error);
  }
};

console.log(await countContacts());
