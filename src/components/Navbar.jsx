import React ,{useState} from 'react'
import {FaBars, FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/main-logo.png'
import {Link} from 'react-scroll'
import CV from '../assets/ROBERT-KIBUE-CV.pdf'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white'>
        <div>
            <img src={Logo} alt="logo" style={{width: '330px'}}/>
            
        </div>
        {/* menu */}
        <div className='hidden md:flex'>
            <ul className='flex'>
                <li> <Link  to="home" smooth={true}  duration={500} >Home</Link> </li>
                <li><Link  to="about" smooth={true}  duration={500} >About</Link></li>
                <li><Link  to="skills" smooth={true}  duration={500} >Skills</Link></li>
                <li><Link  to="work" smooth={true}  duration={500} >Work</Link></li>
                <li><Link  to="contact" smooth={true}  duration={500} >Contact</Link> </li>
            </ul>
        </div>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}

     
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex  flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick}  to="home" smooth={true}  duration={500} >Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true}  duration={500} >About</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true}  duration={500} >Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true}  duration={500} >Work</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true}  duration={500} >Contact</Link> </li>
            </ul>
       

       {/* social icons */}
       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
<ul>
    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
        <a className='flex items-center justify-between w-full text-gray-300' 
        href="https://www.linkedin.com/in/robert-thaiyah/"> LinkedIn <FaLinkedin size={30}/></a></li>

<li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
        <a className='flex items-center justify-between w-full text-gray-300' 
        href="https://github.com/Robert-Thaiyah"> Github <FaGithub size={30}/></a></li>

<li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-600'>
        <a className='flex items-center justify-between w-full text-gray-300' 
        href="mailto:bobthaiya@gmail.com"> Email <HiOutlineMail size={30}/></a></li>

<li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
        <a className='flex items-center justify-between w-full text-gray-300' 
        href={CV} download={"Robert_CV"}> Download CV <BsFillPersonLinesFill size={30}/></a></li>
</ul>

       </div>
    </div>
  )
}

export default Navbar