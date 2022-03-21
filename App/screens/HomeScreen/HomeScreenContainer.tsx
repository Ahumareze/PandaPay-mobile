import React, {FC} from 'react';
import HomeScreenView from './HomeScreenView';

interface HomeContainerProps{
    send: () => void,
    profile: () => void
}

const HomeScreenContainer:FC<HomeContainerProps> = ({send, profile}):JSX.Element => {
    return <HomeScreenView send={() => send()} profile={() => profile()} />
}

export default HomeScreenContainer;