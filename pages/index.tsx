import { Center, Container, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

import bg from '../assets/images/bg.png';
import Navbar from '../components/layout/Navbar';

import type { NextPage } from 'next';
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='description' content='Guardian Fighters Era' />
				<link rel='apple-touch-icon' href='apple-touch-icon.png' />
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<meta property='og:site_name' content='Deren Homepage' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='/card.png' />
				<title>Guardian Fighters Era</title>
			</Head>
			<Navbar></Navbar>
			<Container maxW='container.lg' as='main'>
				<Center>
					<Heading as='h1' size='4xl'>
						Guardian Fighters Era
					</Heading>
				</Center>
				<Image src={bg}></Image>
			</Container>
		</>
	);
};

export default Home;
