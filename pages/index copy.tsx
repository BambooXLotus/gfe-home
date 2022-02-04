import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import bg from '../assets/images/bg.png';
import { Box, Container, Flex } from '@chakra-ui/react';

const Home: NextPage = () => {
	return (
		<Flex bgColor='#93B2CB'>
			<Container maxW='container.lg'>
				<Box bgImage="url('../assets/images/bg.png'" bgPosition='center' bgRepeat='no-repeat'>
					<Head>
						<title>Guardian Fighters Era</title>
						<meta name='description' content='Guardian Fighters Era out now on Kindle and major platforms!' />
						<link rel='icon' href='/favicon.ico' />
					</Head>

					<main className={styles.main}>
						<h1 className={styles.title}>
							<a target='_blank' href='https://www.amazon.com/dp/B09NBVFXP1'>
								Guardian Fighters Era
							</a>
						</h1>
						<p className={styles.description}>
							Written by Deren Somsanith, Nathan R Large <br /> Illustrated by Socrates Mota
						</p>
						<Image src={bg}></Image>

						<div className={styles.grid}>
							<a href='https://nextjs.org/docs' className={styles.card}>
								<h2>Documentation &rarr;</h2>
								<p>Find in-depth information about Next.js features and API.</p>
							</a>

							<a href='https://nextjs.org/learn' className={styles.card}>
								<h2>Learn &rarr;</h2>
								<p>Learn about Next.js in an interactive course with quizzes!</p>
							</a>

							<a href='https://github.com/vercel/next.js/tree/canary/examples' className={styles.card}>
								<h2>Examples &rarr;</h2>
								<p>Discover and deploy boilerplate example Next.js projects.</p>
							</a>

							<a
								href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
								className={styles.card}
							>
								<h2>Deploy &rarr;</h2>
								<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
							</a>
						</div>
					</main>

					<footer className={styles.footer}>
						<a
							href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
							target='_blank'
							rel='noopener noreferrer'
						>
							Powered by{' '}
							<span className={styles.logo}>
								<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
							</span>
						</a>
					</footer>
				</Box>
			</Container>
		</Flex>
	);
};

export default Home;
