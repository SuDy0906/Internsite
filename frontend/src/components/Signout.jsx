import React , {useEffect} from 'react'
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';
import Button1 from './Button1';

const Signout = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!firebase.isLoggedIn){
            navigate('/login');
        }
    }, [])

    const navHome = () => {
        navigate('/');
    }
    const navDash = () => {
        navigate('/dash');
    }
    const handleSignOut = async () => {
        try {
          await firebase.signOutUser();
          navigate('/login');
        } catch (error) {
          console.error('Error signing out:', error);
        }
      };
    
  return (
    <div className='flex items-center mt-[98px] flex-col text-blue-50 h-full'>
        <h1 className="text-center text-5xl font-semibold text-sky-900 p-16">Hello User!!! Your are Logged In</h1>
        <div classname ='flex gap-4'>
        <Button1 func={handleSignOut} title = {"Sign Out"}/>
        <Button1 func={navHome} title = {"Home"}/>
        <Button1 func={navDash} title = {"Dashboard"}/>
        </div>
    </div>
  )
}

export default Signout;
