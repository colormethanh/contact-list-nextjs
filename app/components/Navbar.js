import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();


  const handleReroute = (e, route) => {
    e.preventDefault();
    return router.push(route);
  }


  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={(e) => {handleReroute(e, "/contacts")}} > Rolo </a>
        <ul className="navbar-nav" >
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#" onClick={(e) => handleReroute(e, "/contacts")}> Contacts </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#" onClick={(e) => handleReroute(e, "/contacts/create")}> New </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}