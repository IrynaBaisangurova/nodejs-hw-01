import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts, writeContacts } from '../utils/fileUtils.js';

const generateContacts = (number) => {
  return Array.from({ length: number }, createFakeContact);
};

(async (number) => {
  try {
    let contacts = await readContacts();
    const newContacts = generateContacts(number);
    contacts = contacts.concat(newContacts);
    await writeContacts(contacts);
  } catch (error) {
    console.error(
      'An error happened during the generateContacts process:',
      error,
    );
  }
})(5);
