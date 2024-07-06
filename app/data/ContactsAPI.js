
export class ContactsAPI {
  constructor() {
    this.contacts = [
      {
        name: "Thanh", email:"thanh@email.com", 
        phone: "222-333-4444",
        id: 1
      },
      {
        name: "Paul Ortiz", email:"paul@email.com", 
        phone: "111-222-3333",
        id: 2
      }
    ];
  };

  all() {
    return this.contacts
  };
};