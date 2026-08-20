import GridContainer from '../../components/GridContainer';
import { Header } from '../../components/Header';
import { WelcomeBanner } from '../../components/WelcomeBanner';

export const Home = ( props ) => (
  <GridContainer>
    <Header />
    <WelcomeBanner />
  </GridContainer>
);

export default Home;
