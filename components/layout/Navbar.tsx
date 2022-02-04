import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Box,
	Button,
	Center,
	Flex,
	Link,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Stack,
	useColorMode,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { ReactNode } from 'react';
import logo from '../../assets/images/logo.png';
import gaison from '../../assets/images/gaison.png';

const NavLink = ({ children }: { children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{
			textDecoration: 'none',
			bg: useColorModeValue('gray.200', 'gray.700'),
		}}
		href={'#'}
	>
		{children}
	</Link>
);

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<Box>
						<Avatar size={'md'} src={logo.src} />
					</Box>
					<a
						href='https://www.amazon.com/dp/B09NBVFXP1?_encoding=UTF8&amp;camp=1789&amp;creative=9325&amp;linkCode=ur2&amp;tag=storypodca-20&amp;linkId=2P4S6EY6B462X4AR'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src='https://www.niftybuttons.com/amazon/amazon-button3.png' />
					</a>
					<Avatar size={'md'} src={gaison.src} />
				</Flex>
			</Box>
		</>
	);
}
