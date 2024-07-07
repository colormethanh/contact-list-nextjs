import { useRouter } from 'next/navigation';

export default function RerouteBtn({text, route}) {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(route);
  };


  return (
    <button className='btn btn-primary' onClick={handleClick}> {text} </button>
  )
}