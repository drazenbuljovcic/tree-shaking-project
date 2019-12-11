// import { Images } from 'tree-shaking-lib/dependency/images';
import { Images } from 'tree-shaking-lib';
// import { Images, Networks } from 'tree-shaking-lib';
// import { Images, Services, Networks } from 'tree-shaking-lib';
// import { Images } from 'tree-shaking-lib/dependency/images';
// import { Services } from 'tree-shaking-lib/dependency/services';

import BusinessLogic from './BusinessLogic';

const business = BusinessLogic();
const images = Images();
// const services = Services();
// const networks = Networks();

business.init();
images.init();
// services.init();
// networks.init();
