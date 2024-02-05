'use client';
import { useState } from 'react';
import { IoClose, IoMenuOutline } from 'react-icons/io5';
import {
	FaMagnifyingGlass,
	FaCartShopping,
	FaFacebook,
	FaSquareInstagram,
	FaSquareTwitter
} from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

import QratesLogo from '@/app/assets/images/qrates-logo.svg';
import { inria_sans } from '@/app/ui/font';

import { test } from '@/app/ui/components/Navbar.types';

export default function Navbar() {
	const [isClick, setIsClick] = useState<boolean>();
	const Links = [
		{ name: 'discover music', path: '/discover' },
		{ name: 'for artists', path: '/forartists' },
		{ name: 'for fans', path: '/forfans' }
	];

	const Icons: Array<test> = [
		{
			desktop: [{ Icon: FaMagnifyingGlass }, { Icon: FaCartShopping }],
			mobile: [
				{ Icon: FaFacebook },
				{ Icon: FaSquareInstagram },
				{ Icon: FaSquareTwitter }
			]
		}
	];

	const handleMenuClick = () => {
		setIsClick(!isClick);
		isClick
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'auto');
	};

	return (
		<header className='p-4 md:p-8 flex items-center justify-between'>
			<nav className='flex gap-8'>
				<figure>
					<Link href='/'>
						<Image
							src={QratesLogo}
							alt='Qrates Logo'
							className='w-10 h-10 md:w-14 md:h-14'
						/>
					</Link>
				</figure>

				<ul className='hidden lg:flex items-center gap-8'>
					{Links.map((link) => {
						return (
							<li key={link.name}>
								<Link href={link.path}>
									<span
										className={`${inria_sans.className} font-bold uppercase`}
									>
										{link.name}
									</span>
								</Link>
							</li>
						);
					})}

					{/* {Icons[0].desktop.map((icon, index) => {
						const Icon = icon.Icon;

						return (
							<li key={index}>
								<Icon size={20} />
							</li>
						);
					})} */}

					{Icons[0].desktop.map((icon, index) => {
						const Icon = icon.Icon;
						return (
							<li key={index}>
								<Icon size={20} />
							</li>
						);
					})}
				</ul>
			</nav>

			<div className='hidden lg:flex gap-2'>
				<button
					className={`${inria_sans.className} btn btn-outline text-base font-bold uppercase rounded-full`}
				>
					log in
				</button>
				<button
					className={`${inria_sans.className} btn btn-neutral text-white text-base font-bold uppercase rounded-full`}
				>
					make your own
				</button>
			</div>

			{/* MENU MOBILE RESPONSIVE */}
			<nav className='flex lg:hidden'>
				<div onClick={handleMenuClick} className='cursor-pointer'>
					{isClick ? <IoClose size={50} /> : <IoMenuOutline size={50} />}
				</div>
				<AnimatePresence>
					{isClick && (
						<motion.div
							className='absolute z-50 top-20 right-0 h-full w-full bg-white'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.3, type: 'tween', stiffness: 120 }}
						>
							<ul className='px-4 py-6 flex flex-col gap-10'>
								{Links?.map((item, index) => (
									<motion.li
										key={index}
										className={`${inria_sans.className} text-2xl font-bold uppercase`}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.4, type: 'tween', stiffness: 90 }}
									>
										<Link href={item.path}>{item.name}</Link>
									</motion.li>
								))}
							</ul>

							<div className='mb-6 px-4 flex'>
								{Icons[0].mobile.map((icon, index) => {
									const Icon = icon.Icon;

									return (
										<div key={index} className='[&>*]:mr-4'>
											<Icon className='h-12 w-12' />
										</div>
									);
								})}
							</div>

							<div className='px-4 flex flex-col gap-2'>
								<button
									className={`${inria_sans.className} btn btn-neutral text-base font-bold uppercase rounded-full`}
								>
									make your record
								</button>
								<button
									className={`${inria_sans.className} btn btn-outline text-base font-bold uppercase rounded-full`}
								>
									log in
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}
