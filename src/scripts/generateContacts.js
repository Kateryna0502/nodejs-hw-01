import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => { };
try {
    const oldContacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...oldContacts, ...newContacts];
    await writeContacts(updatedContacts);
    
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
generateContacts(5);
