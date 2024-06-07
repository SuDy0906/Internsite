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
        navigate('/dashboard/userdash');
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
    <div className='flex items-center flex-col bg-blue-50 h-full'>
        <h1 className="text-center text-5xl mt-[78px] font-semibold text-sky-900 p-16">Hello User!!! Your are Logged In</h1>
        <div className ='flex gap-4'>
        <Button1 func={handleSignOut} title = {"Sign Out"}/>
        <Button1 func={navHome} title = {"Home"}/>
        <Button1 func={navDash} title = {"Dashboard"}/>
        </div>
    </div>
  )
}

export default Signout;
