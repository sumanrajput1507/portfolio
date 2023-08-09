import React from 'react'

function Header() {
    return (
        <>
        <header className='container'>
        <div>
            <img src="" alt="Logo" />
        </div>
       <nav>
         <ul>
            <li> <a href="/"><span></span><span>home</span></a></li>
            <li><a href="/"><span></span><span>about</span></a></li>
            <li><a href="/"><span></span><span>resume</span></a></li>
            <li><a href="/"><span></span><span>blog</span></a></li>
            <li><a href="/"><span></span><span>contact</span></a></li>
         </ul> 
       </nav>
       <div className='dark-theme-btn'>
         <div className='light-mode'>
         

         </div>
         <div className='light-mode dark-mode'>

        </div>

            <div className='light-mode menu_bar'>

            </div>



       </div>
    </header>
    </>
    )
}
 
export default Header