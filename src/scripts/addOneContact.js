import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => { 
    try {
    const newContact = createFakeContact();
    const oldContacts = await readContacts();
    const updatedContacts = [...oldContacts, newContact];

    await writeContacts(updatedContacts);
    console.log('Successfully added one new contact.');
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

addOneContact();
