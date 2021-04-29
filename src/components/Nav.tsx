const Nav = ({ burgerClickHandler, nav, navOpen }) => {
	return (
		<nav role='navigation'>
			<ul className={`links ${navOpen ? 'nav-active' : null}`} ref={nav}>
				<h1>My Work</h1>
				<li>
					<a className='nav-link' href='#i310' onClick={burgerClickHandler} >
						i310 - Multimedia Arts & Tech
					</a>
				</li>
				<li>
					<a className='nav-link' href='#a348' onClick={burgerClickHandler} >
						a348 - Mastering the WWW
					</a>
				</li>
				<li>
					<a className='nav-link' href='#i211' onClick={burgerClickHandler} >
						i211 - Info. Infrastructure II
					</a>
				</li>
				<li>
					<a className='nav-link' href='#j463' onClick={burgerClickHandler} >
						j463 - Graphic Design I
					</a>
				</li>
				<li>
					<a className='nav-link' href='#g290' onClick={burgerClickHandler} >
						g290 - Procedural Art
					</a>
				</li>
				<li>
					<a className='nav-link' href='#j362' onClick={burgerClickHandler} >
						j362 - Multimedia Storytelling
					</a>
				</li>
				<li>
					<a className='nav-link' href='#j363' onClick={burgerClickHandler} >
						j363 - Web Design
					</a>
				</li>
				<li>
					<a className='nav-link' href='#i101' onClick={burgerClickHandler} >
						i101 - Intro to Informatics
					</a>
				</li>
				<li>
					<a className='nav-link' href='#play' onClick={burgerClickHandler} >
						Playgrounds
					</a>
				</li>
				<li>
					<a className='nav-link' href='#inspo' onClick={burgerClickHandler} >
						Inspiration
					</a>
				</li>
				<li>
					<a className='nav-link' href='#references' onClick={burgerClickHandler} >
						References
					</a>
				</li>
			</ul>
			<div className='burger' onClick={burgerClickHandler}>
				&#9776;
			</div>
		</nav>
	);
};

export default Nav;
