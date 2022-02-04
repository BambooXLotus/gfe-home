import { Avatar, Box, Flex } from '@chakra-ui/react';

import gaison from '../../assets/images/gaison.png';
import logo from '../../assets/images/logo.png';

export default function Navbar() {
	return (
		<>
			<Box px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Box>
						<Avatar size={'md'} src={logo.src} />
					</Box>
					<a
						href='https://www.amazon.com/dp/B09NBVFXP1?_encoding=UTF8&amp;camp=1789&amp;creative=9325&amp;linkCode=ur2&amp;tag=storypodca-20&amp;linkId=2P4S6EY6B462X4AR'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src='https://www.niftybuttons.com/amazon/amazon-button3.png' alt='Buy now on Amazon' />
					</a>
					<Avatar size={'md'} src={gaison.src} />
				</Flex>
			</Box>
		</>
	);
}
