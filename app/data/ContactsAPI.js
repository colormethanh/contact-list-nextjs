
export class ContactsAPI {
  constructor() {
    this.contacts = [
      {
        name: "Thanh", 
        email:"thanh@email.com", 
        phone: "2223334444",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
        id: 1
      },
      {
        name: "Paul Ortiz", 
        email:"paul@email.com", 
        phone: "111-222-3333",
        id: 2
      }
    ];
  };

  all() {
    return this.contacts;
  };

  add(name) {
    return this.contacts.push({name: name});
  };
};