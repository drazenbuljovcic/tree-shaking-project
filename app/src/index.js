import { Image } from 'tree-shaking-lib';

import BusinessLogic from './BusinessLogic';

const business = BusinessLogic();
const image = Image();

business.init();
image.init();
