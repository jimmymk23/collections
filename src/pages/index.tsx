import Meta from '../components/Meta'

import Nav from '../components/Nav';
import Main from '../components/Main';

import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

const index = () => {
	const nav = useRef(null);

	// STATE
	const [navOpen, setNavOpen] = useState(false);

    // EFFECTS
    useEffect(() => {
        $('.overlay').hide();
    }, [])

	// HANDLERS
	const toggleNav = () => {
		if (navOpen) {
			setNavOpen(false);
			$('.overlay')
				.css({
					'background-color': '#00000000',
					transition: 'background-color .4s ease',
				})
				.delay(400)
				.hide();
		} else {
			setNavOpen(true);

			$('.overlay').show();
			$('.overlay').css({
				'background-color': '#00000080',
				transition: 'background-color .4s ease',
			});
		}
	};

	const burgerClickHandler = () => {
		toggleNav();
	};

	const mainClickHandler = () => {
		if (navOpen) {
			toggleNav();
		}
	};

	return (
		<>
            <Meta />
			<Nav
				burgerClickHandler={burgerClickHandler}
				nav={nav}
				navOpen={navOpen}
			/>
			<Main mainClickHandler={mainClickHandler} />
		</>
	);
};

export default index;
