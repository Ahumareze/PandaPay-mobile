import React, {FC} from 'react';
import HomeScreenView from './HomeScreenView';

interface HomeContainerProps{
    navigate: () => void
}

const HomeScreenContainer:FC<HomeContainerProps> = ({navigate}):JSX.Element => {
    return <HomeScreenView navigate={() => navigate()} />
}

export default HomeScreenContainer;