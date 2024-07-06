import Image from 'next/image'
import styles from './page.module.css'
import { ContactsAPI } from './data/ContactsAPI'

const Class = new ContactsAPI();



export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world</h1>
    </main>
  )
}
