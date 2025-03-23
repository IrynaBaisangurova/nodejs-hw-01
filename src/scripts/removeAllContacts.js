import { removeContacts } from '../utils/fileUtils.js';

export const removeAllContacts = async () => {
  try {
    await removeContacts();
  } catch (error) {
    console.error(
      'An error happened during the removeAllContacts process:',
      error,
    );
  }
};

removeAllContacts();
