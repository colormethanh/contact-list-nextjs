"use client";
import ListItem from "../components/ListItem";
import RerouteBtn from "../components/RerouteBtn";
import { useContacts } from "../context/useContacts";

export default function Contact() {

  const { contacts } = useContacts();

  return (
    <main>
      <h1 className="text-center">Your Contacts</h1>
      <RerouteBtn text="Create Contact" route="/contacts/create" />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"> Profile Pic </th>
            <th scope="col"> Name </th>
            <th scope="col"> Email </th>
            <th scope="col"> Phone </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((person, i) => 
          <ListItem key={i} person={person} /> 
          )}
        </tbody>
      </table>
    </main>
  );
};