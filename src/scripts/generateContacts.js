import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    let contacts;
      try {
      const data = await readContacts();
      contacts = data;
    } catch (error) {
      contacts = [];
      return error;
    }
    for (let i = 0; i < number; i++) {
      const data = createFakeContact();
      contacts.push(data);
    }
    await writeContacts(contacts);
    return 'Contacts successfully generated';
  } catch (error) {
    return error;
  }
};
generateContacts(5);
