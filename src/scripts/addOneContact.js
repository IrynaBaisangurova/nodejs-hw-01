import { createFakeContact } from '../utils/createFakeContact.js';

import { readContacts, writeContacts } from '../utils/fileUtils.js';

const generateContacts = (number) => {
  return Array.from({ length: number }, createFakeContact);
};
export const addOneContact = async () => {
  try {
    let contacts = await readContacts();
    const newContacts = generateContacts(1);
    contacts = contacts.concat(newContacts);
    await writeContacts(contacts);
  } catch (error) {
    console.error('An error happened during the addOneContact process:', error);
  }
};

addOneContact();
