import { readContacts, writeContacts } from '../utils/fileUtils.js';

export const removeLastContact = async () => {
  try {
    let contacts = await readContacts();
    if (!contacts.length) return;
    contacts.pop();
    await writeContacts(contacts);
    console.log('Last contact removed and file updated successfully');
  } catch (error) {
    console.error('Error during the removeLastContact process:', error);
  }
};

removeLastContact();
